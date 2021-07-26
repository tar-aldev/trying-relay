import { gql, useApolloClient } from "@apollo/client";
import { Dispatch, FC, useCallback } from "react";
import {
  Card,
  Container,
  FormControl,
  InputGroup,
  ListGroup
} from "react-bootstrap";
import { PER_PAGE_AMOUNT } from "../../core/constants";
import ListLayout from "../../shared/components/ListLayout";
import { PAGE_INFO_FRAGMENT } from "../../shared/fragments/pageInfoFragment";
import { PropsWithFetchMore } from "../../shared/interfaces/PropsWithFetchMore";
import {
  RepositoryPageQuery,
  RepositoryPageQueryVariables,
  RepositoryPageQuery_repository,
  RepositoryPageQuery_repository_refs
} from "./__generated__/RepositoryPageQuery";

export const BRANCHES_FRAGMENT = gql`
  fragment BranchesFragment on RefConnection {
    totalCount
    pageInfo {
      ...PageInfoFragment
    }
    edges {
      node {
        id
        name
      }
    }
  }
  ${PAGE_INFO_FRAGMENT}
`;

export interface BranchesSearchableSelectProps
  extends PropsWithFetchMore<
    RepositoryPageQuery,
    RepositoryPageQueryVariables
  > {
  searchStr: string;
  loading: boolean;
  loadingNext: boolean;
  setSearchStr: Dispatch<string>;
  defaultBranchName?: string;
  branchesPagination: RepositoryPageQuery_repository_refs;
  handleBranchSelect: (branchId: string) => void;
}

const BranchesSearchableSelect: FC<BranchesSearchableSelectProps> = ({
  loading,
  loadingNext,
  branchesPagination,
  defaultBranchName,
  handleBranchSelect,
  searchStr,
  setSearchStr,
  fetchMore
}) => {
  const client = useApolloClient();

  console.log(
    "FFFF",
    client.cache.readFragment({
      fragment: BRANCHES_FRAGMENT,
      fragmentName: "BranchesFragment",
      id: "RefConnection:{}"
    })
  );
  const { edges, pageInfo, totalCount } = branchesPagination;

  const onBranchSelect = (branchId: string) => () => {
    handleBranchSelect(branchId);
  };

  const onLoadMoreBranches = useCallback(() => {
    fetchMore({
      variables: {
        count: PER_PAGE_AMOUNT,
        after: pageInfo.endCursor
      }
    });
  }, [fetchMore, pageInfo.endCursor]);

  return (
    <div className="my-2">
      <Container fluid>
        <InputGroup size="sm" className="mb-3">
          <FormControl
            placeholder="Search by branch name"
            value={searchStr}
            onChange={(e) => {
              setSearchStr(e.target.value);
            }}
          />
        </InputGroup>
      </Container>
      {loading ? (
        <p>Loading search results...</p>
      ) : (
        <ListLayout
          countPosition="top"
          hasMore={pageInfo.hasNextPage}
          isLoadingNext={loadingNext}
          onLoadMore={onLoadMoreBranches}
          list={
            <>
              {edges && edges.length > 0 ? (
                <div>
                  <Card>
                    <ListGroup variant="flush">
                      {edges.map(({ node }: any) => {
                        return (
                          <ListGroup.Item
                            key={node.id}
                            onClick={onBranchSelect(node.id)}
                            className={
                              defaultBranchName === node.name
                                ? "bg-secondary text-light"
                                : ""
                            }
                          >
                            {node.name}
                            {defaultBranchName === node.name && (
                              <span className="small">
                                {" "}
                                (This is the default branch)
                              </span>
                            )}
                          </ListGroup.Item>
                        );
                      })}
                    </ListGroup>
                  </Card>

                  <p className="muted small">
                    * Click on any of the branches to view its detailed info
                  </p>
                </div>
              ) : (
                "No branches found..."
              )}
            </>
          }
          shownItemsAmount={edges?.length || 0}
          totalItemsAmount={totalCount}
        />
      )}
    </div>
  );
};

export default BranchesSearchableSelect;
