import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { useFragment } from "react-relay";

export const BranchesSearchableSelectFragment = graphql`
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

const BranchesSearchableSelect = ({
  fragmentRef,
  defaultBranchName,
  handleBranchSelect,
}) => {
  const branches = useFragment(BranchesSearchableSelectFragment, fragmentRef);

  const onBranchSelect = (branchId) => () => {
    handleBranchSelect(branchId);
  };

  return (
    <div>
      <p>Click on any of the branches to view its detailed info</p>

      {branches.edges.length > 0 ? (
        <div>
          <Card>
            <ListGroup variant="flush">
              {branches.edges.map(({ node }) => {
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
