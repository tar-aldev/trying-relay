/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: CommitItemFragment
// ====================================================

export interface CommitItemFragment_node_author {
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

export interface CommitItemFragment_node {
  __typename: "Commit";
  /**
   * The datetime when this commit was committed.
   */
  committedDate: any;
  /**
   * Authorship details of the commit.
   */
  author: CommitItemFragment_node_author | null;
  /**
   * The Git commit message
   */
  message: string;
}

export interface CommitItemFragment {
  __typename: "CommitEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: CommitItemFragment_node | null;
}
