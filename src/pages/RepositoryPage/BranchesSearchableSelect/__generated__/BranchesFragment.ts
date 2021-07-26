/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: BranchesFragment
// ====================================================

export interface BranchesFragment_pageInfo {
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

export interface BranchesFragment_edges_node {
  __typename: "Ref";
  id: string;
  /**
   * The ref name.
   */
  name: string;
}

export interface BranchesFragment_edges {
  __typename: "RefEdge";
  /**
   * The item at the end of the edge.
   */
  node: BranchesFragment_edges_node | null;
}

export interface BranchesFragment {
  __typename: "RefConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: BranchesFragment_pageInfo;
  /**
   * A list of edges.
   */
  edges: (BranchesFragment_edges | null)[] | null;
}
