import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { Card, ListGroup } from "react-bootstrap";
import { useFragment } from "react-relay";

export const SelectedBranchCommitsFragment = graphql`
  fragment SelectedBranchCommits_commits on Commit {
    history(first: 100) {
      edges {
        node {
          id
          author {
            email
            name
          }
          message
        }
      }
    }
  }
`;

const SelectedBranchCommits = ({ fragmentRef }) => {
  const { history } = useFragment(SelectedBranchCommitsFragment, fragmentRef);

  return (
    <div>
      {history.edges.map(({ node }) => {
        return (
          <Card key={node.id} as="div" className="mb-2">
            <Card.Body className="py-1">
              {node.message}
              <div className="d-flex justify-content-end mt-1">
                <p className="small">
                  by <span className="text-primary"> {node.author.name}</span>
                </p>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default SelectedBranchCommits;
