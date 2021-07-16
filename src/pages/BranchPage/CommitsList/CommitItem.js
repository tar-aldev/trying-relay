import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { Card } from "react-bootstrap";

export const CommitItemFragment = graphql`
  fragment CommitItemFragment_commit on CommitEdge {
    node {
      author {
        email
        name
      }
      message
    }
  }
`;
const CommitItem = ({ fragmentRef }) => {
  const { node: commitItem } = useFragment(CommitItemFragment, fragmentRef);
  return (
    <Card className="mb-2">
      <Card.Body as="div">
        <h6>Commit message:</h6>
        <p>{commitItem.message}</p>

        <div className="d-flex justify-content-end">
          <p className="small mb-0">
            by <span className="text-primary">{commitItem.author.name}</span>
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CommitItem;
