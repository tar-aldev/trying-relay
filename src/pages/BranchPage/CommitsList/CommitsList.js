import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { usePaginationFragment } from "react-relay";
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
      totalCount
      pageInfo {
        hasNextPage
      }
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
  const onLoadMoreCommits = () => {
    loadNext(10);
  };

  console.log("isLoadingNext", isLoadingNext, history);
  return (
    <div>
      <p>
        Showing {history.edges.length} of {history.totalCount} commits
      </p>
      {history.edges.map((edge) => {
        return <CommitItem key={edge.cursor} fragmentRef={edge} />;
      })}
      {history.pageInfo.hasNextPage && (
        <div className="d-flex justify-content-center">
          <Button
            onClick={onLoadMoreCommits}
            disabled={isLoadingNext}
            style={{ width: 130 }}
          >
            <span>{isLoadingNext ? "Loading..." : "Load more"}</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CommitsList;
