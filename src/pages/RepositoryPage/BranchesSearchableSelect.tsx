import { gql } from "@apollo/client";
import { FC } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { PAGE_INFO_FRAGMENT } from "../../shared/fragments/pageInfoFragment";
import { RepositoryPageQuery_repository_refs } from "./__generated__/RepositoryPageQuery";

export interface BranchesSearchableSelectProps {
  defaultBranchName?: string;
  branchesPagination: RepositoryPageQuery_repository_refs;
  handleBranchSelect: (branchId: string) => void;
}

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

const BranchesSearchableSelect: FC<BranchesSearchableSelectProps> = ({
  branchesPagination,
  defaultBranchName,
  handleBranchSelect
}) => {
  const { edges, pageInfo, totalCount } = branchesPagination;
  const onBranchSelect = (branchId: string) => () => {
    handleBranchSelect(branchId);
  };

  return (
    <div className="my-2">
      <h6>Click on any of the branches to view its detailed info</h6>

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
        </div>
      ) : (
        "No branches for this repo yet..."
      )}
    </div>
  );
};

export default BranchesSearchableSelect;
