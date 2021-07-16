import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { Card } from "react-bootstrap";
import { useMemo } from "react";
import { formatDate } from "../../../helpers/dateHelpers";

export const CommitItemFragment = graphql`
  fragment CommitItemFragment_commit on CommitEdge {
    node {
      committedDate
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
  const formattedCommitDate = useMemo(
    () => formatDate(commitItem.committedDate),
    [commitItem.committedDate]
  );

  return (
    <Card className="mb-2">
      <Card.Body as="div">
        <h6>Commit message:</h6>
        <p>{commitItem.message}</p>
        <p className="small">
          Commited by{" "}
          <span className="text-primary">{commitItem.author.name}</span>
        </p>

        <p className="text-right small">
          on <span className="text-primary">{formattedCommitDate}</span>
        </p>
      </Card.Body>
    </Card>
  );
};

export default CommitItem;
