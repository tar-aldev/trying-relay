import { gql } from "@apollo/client";
import { FC } from "react";
import ListLayout from "../../../shared/components/ListLayout";
import { PAGE_INFO_FRAGMENT } from "../../../shared/fragments/pageInfoFragment";
import { PropsWithFetchMore } from "../../../shared/interfaces/PropsWithFetchMore";
import {
  BranchPageQuery,
  BranchPageQueryVariables,
  BranchPageQuery_node_Ref_target_Commit_history
} from "../__generated__/BranchPageQuery";
import CommitItem, { COMMIT_ITEM_FRAGMENT } from "./CommitItem";

export const COMMITS_LIST_FRAGMENT = gql`
  fragment CommitsListFragment on Commit {
    history(first: $connectedCommitsCount, after: $cursor) {
      totalCount
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        ...CommitItemFragment
      }
    }
  }
  ${PAGE_INFO_FRAGMENT}
  ${COMMIT_ITEM_FRAGMENT}
`;

export interface CommitsListProps
  extends PropsWithFetchMore<BranchPageQuery, BranchPageQueryVariables> {
  commitsPagination: BranchPageQuery_node_Ref_target_Commit_history;
}

const CommitsList: FC<CommitsListProps> = ({
  commitsPagination,
  fetchMore
}) => {
  const { edges, pageInfo, totalCount } = commitsPagination;
  const onLoadMoreCommits = () => {
    fetchMore({
      variables: {
        connectedCommitsCount: 10,
        cursor: pageInfo.endCursor
      }
    });
  };

  return edges ? (
    <ListLayout
      hasMore={pageInfo.hasNextPage}
      list={
        <>
          {edges.map((edge) => {
            return edge?.node ? (
              <CommitItem key={edge.cursor} commit={edge.node} />
            ) : null;
          })}
        </>
      }
      onLoadMore={onLoadMoreCommits}
      shownItemsAmount={edges.length}
      totalItemsAmount={totalCount}
      isLoadingNext={false}
    />
  ) : (
    <p>No commits yet...</p>
  );
};

export default CommitsList;

/* 
<>
      <Container fluid>
        {edges.map((edge) => {
          return edge?.node ? (
            <CommitItem key={edge.cursor} commit={edge.node} />
          ) : null;
        })}

        {pageInfo.hasNextPage && (
          <div className="d-flex justify-content-center mb-3">
            <LoadMoreButton
              onLoadMore={onLoadMoreCommits}
              isLoadingNext={false}
            />
          </div>
        )}
      </Container>
      <ShownPaginationCount
        position="bottom"
        showing={edges.length}
        total={totalCount}
      />
    </>

*/
