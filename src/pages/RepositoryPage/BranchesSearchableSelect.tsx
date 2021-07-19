import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useFragment } from "react-relay";
import { PropsWithFragment } from "../../interfaces/PropsWithFragment";
import { BranchesSearchableSelect_branches$key } from "./__generated__/BranchesSearchableSelect_branches.graphql";

export const BRANCHES_SEARCHABLE_SELECT_FRAGMENT = graphql`
  fragment BranchesSearchableSelect_branches on RefConnection {
    # TODO: Add search as part of query instead of local
    edges {
      node {
        id
        name
      }
    }
  }
`;

export interface BranchesSearchableSelectProps
  extends PropsWithFragment<BranchesSearchableSelect_branches$key> {
  defaultBranchName?: string;
  handleBranchSelect: (branchId: string) => void;
}

const BranchesSearchableSelect: FC<BranchesSearchableSelectProps> = ({
  fragmentRef,
  defaultBranchName,
  handleBranchSelect,
}) => {
  const { edges } = useFragment(
    BRANCHES_SEARCHABLE_SELECT_FRAGMENT,
    fragmentRef
  );

  const onBranchSelect = (branchId: string) => () => {
    handleBranchSelect(branchId);
  };

  return (
    <div>
      <p>Click on any of the branches to view its detailed info</p>

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
