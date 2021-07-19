import { graphql } from "babel-plugin-relay/macro";
import React, { FC } from "react";
import { Button } from "react-bootstrap";
import { usePaginationFragment } from "react-relay";
import { PropsWithFragment } from "../../../interfaces/PropsWithFragment";
import ShownPaginationCount from "../../../shared/components/ShownPaginationCount";
import CommitItem from "./CommitItem";
import { CommitsListFragment_commits$key } from "./__generated__/CommitsListFragment_commits.graphql";

export const COMMITS_LIST_FRAGMENT = graphql`
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

const CommitsList: FC<PropsWithFragment<CommitsListFragment_commits$key>> = ({
  fragmentRef,
}) => {
  const {
    data: { history },
    isLoadingNext,
    loadNext,
  } = usePaginationFragment(COMMITS_LIST_FRAGMENT, fragmentRef);
  const onLoadMoreCommits = () => {
    loadNext(10);
  };

  return (
    <div>
      {history.edges ? (
        <>
          {history.edges.map((edge: any) => {
            return <CommitItem key={edge.cursor} fragmentRef={edge} />;
          })}

          {history.pageInfo.hasNextPage && (
            <div className="d-flex justify-content-center mb-3">
              <Button
                onClick={onLoadMoreCommits}
                disabled={isLoadingNext}
                style={{ width: 130 }}
              >
                <span>{isLoadingNext ? "Loading..." : "Load more"}</span>
              </Button>
            </div>
          )}
          <ShownPaginationCount
            showing={history.edges.length}
            total={history.totalCount}
          />
        </>
      ) : (
        <p>No commits yet...</p>
      )}
    </div>
  );
};

export default CommitsList;
