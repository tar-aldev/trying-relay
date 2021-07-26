/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BranchInfoFragment
// ====================================================

export interface BranchInfoFragment_repository_owner {
  __typename: "Organization" | "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface BranchInfoFragment_repository {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The User owner of the repository.
   */
  owner: BranchInfoFragment_repository_owner;
}

export interface BranchInfoFragment_target_Blob {
  __typename: "Blob" | "Tag" | "Tree";
}

export interface BranchInfoFragment_target_Commit_history_pageInfo {
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

export interface BranchInfoFragment_target_Commit_history_edges_node_author {
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

export interface BranchInfoFragment_target_Commit_history_edges_node {
  __typename: "Commit";
  /**
   * The datetime when this commit was committed.
   */
  committedDate: any;
  /**
   * Authorship details of the commit.
   */
  author: BranchInfoFragment_target_Commit_history_edges_node_author | null;
  /**
   * The Git commit message
   */
  message: string;
}

export interface BranchInfoFragment_target_Commit_history_edges {
  __typename: "CommitEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: BranchInfoFragment_target_Commit_history_edges_node | null;
}

export interface BranchInfoFragment_target_Commit_history {
  __typename: "CommitHistoryConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: BranchInfoFragment_target_Commit_history_pageInfo;
  /**
   * A list of edges.
   */
  edges: (BranchInfoFragment_target_Commit_history_edges | null)[] | null;
}

export interface BranchInfoFragment_target_Commit {
  __typename: "Commit";
  /**
   * The linear commit history starting from (and including) this commit, in the same order as `git log`.
   */
  history: BranchInfoFragment_target_Commit_history;
}

export type BranchInfoFragment_target = BranchInfoFragment_target_Blob | BranchInfoFragment_target_Commit;

export interface BranchInfoFragment {
  __typename: "Ref";
  id: string;
  /**
   * The ref name.
   */
  name: string;
  /**
   * The repository the ref belongs to.
   */
  repository: BranchInfoFragment_repository;
  /**
   * The object the ref points to. Returns null when object does not exist.
   */
  target: BranchInfoFragment_target | null;
}
