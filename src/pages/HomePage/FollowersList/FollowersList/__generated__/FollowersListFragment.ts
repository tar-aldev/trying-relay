/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FollowersListFragment
// ====================================================

export interface FollowersListFragment_pageInfo {
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

export interface FollowersListFragment_edges_node {
  __typename: "User";
  id: string;
  /**
   * Identifies the date and time when the object was created.
   */
  createdAt: any;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
  /**
   * The HTTP URL for this user
   */
  url: any;
  /**
   * The user's publicly visible profile email.
   */
  email: string;
}

export interface FollowersListFragment_edges {
  __typename: "UserEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: FollowersListFragment_edges_node | null;
}

export interface FollowersListFragment {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: FollowersListFragment_pageInfo;
  /**
   * A list of edges.
   */
  edges: (FollowersListFragment_edges | null)[] | null;
}
