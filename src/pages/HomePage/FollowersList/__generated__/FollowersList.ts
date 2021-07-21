/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FollowersList
// ====================================================

export interface FollowersList_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface FollowersList_edges {
  __typename: "UserEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface FollowersList {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: FollowersList_pageInfo;
  /**
   * A list of edges.
   */
  edges: (FollowersList_edges | null)[] | null;
}
