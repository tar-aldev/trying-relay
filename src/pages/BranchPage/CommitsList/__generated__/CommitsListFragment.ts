/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommitsListFragment
// ====================================================

export interface CommitsListFragment_history_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface CommitsListFragment_history_edges_node_author {
  __typename: "GitActor";
  /**
   * The email in the Git commit.
   */
  email: string | null;
  /**
   * The name in the Git commit.
   */
  name: string | null;
}

export interface CommitsListFragment_history_edges_node {
  __typename: "Commit";
  /**
   * The datetime when this commit was committed.
   */
  committedDate: any;
  /**
   * Authorship details of the commit.
   */
  author: CommitsListFragment_history_edges_node_author | null;
  /**
   * The Git commit message
   */
  message: string;
}

export interface CommitsListFragment_history_edges {
  __typename: "CommitEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: CommitsListFragment_history_edges_node | null;
}

export interface CommitsListFragment_history {
  __typename: "CommitHistoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: CommitsListFragment_history_pageInfo;
  /**
   * A list of edges.
   */
  edges: (CommitsListFragment_history_edges | null)[] | null;
}

export interface CommitsListFragment {
  __typename: "Commit";
  /**
   * The linear commit history starting from (and including) this commit, in the same order as `git log`.
   */
  history: CommitsListFragment_history;
}
