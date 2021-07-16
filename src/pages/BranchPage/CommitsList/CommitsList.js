import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { Card } from "react-bootstrap";
import { useFragment, usePaginationFragment } from "react-relay";
import CommitItem from "./CommitItem";

export const CommitsListFragment = graphql`
  fragment CommitsListFragment_commits on Commit
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
  )
  @refetchable(queryName: "CommitsListPaginationQuery") {
    history(first: $count, after: $cursor)
      @connection(key: "SelectedBranchCommits_history") {
      edges {
        cursor
        ...CommitItemFragment_commit
      }
    }
  }
`;

const CommitsList = ({ fragmentRef }) => {
  const {
    data: { history },
    isLoadingNext,
    loadNext,
  } = usePaginationFragment(CommitsListFragment, fragmentRef);
  // const { history } = useFragment(SelectedBranchCommitsFragment, fragmentRef);

  console.log("data", history);
  return (
    <div>
      {history.edges.map((edge) => {
        return <CommitItem key={edge.cursor} fragmentRef={edge} />;
      })}
    </div>
  );
};

export default CommitsList;
