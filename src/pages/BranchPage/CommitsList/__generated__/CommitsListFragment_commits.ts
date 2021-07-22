/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommitsListFragment_commits
// ====================================================

export interface CommitsListFragment_commits_history_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface CommitsListFragment_commits_history_edges {
  __typename: "CommitEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface CommitsListFragment_commits_history {
  __typename: "CommitHistoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: CommitsListFragment_commits_history_pageInfo;
  /**
   * A list of edges.
   */
  edges: (CommitsListFragment_commits_history_edges | null)[] | null;
}

export interface CommitsListFragment_commits {
  __typename: "Commit";
  /**
   * The linear commit history starting from (and including) this commit, in the same order as `git log`.
   */
  history: CommitsListFragment_commits_history;
}
