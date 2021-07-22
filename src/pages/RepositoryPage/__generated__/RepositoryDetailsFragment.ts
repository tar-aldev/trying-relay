/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepositoryDetailsFragment
// ====================================================

export interface RepositoryDetailsFragment_defaultBranchRef {
  __typename: "Ref";
  id: string;
  /**
   * The ref name.
   */
  name: string;
}

export interface RepositoryDetailsFragment_refs_pageInfo {
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

export interface RepositoryDetailsFragment_refs_edges_node {
  __typename: "Ref";
  id: string;
  /**
   * The ref name.
   */
  name: string;
}

export interface RepositoryDetailsFragment_refs_edges {
  __typename: "RefEdge";
  /**
   * The item at the end of the edge.
   */
  node: RepositoryDetailsFragment_refs_edges_node | null;
}

export interface RepositoryDetailsFragment_refs {
  __typename: "RefConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: RepositoryDetailsFragment_refs_pageInfo;
  /**
   * A list of edges.
   */
  edges: (RepositoryDetailsFragment_refs_edges | null)[] | null;
}

export interface RepositoryDetailsFragment {
  __typename: "Repository";
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The description of the repository rendered to HTML.
   */
  descriptionHTML: any;
  /**
   * The Ref associated with the repository's default branch.
   */
  defaultBranchRef: RepositoryDetailsFragment_defaultBranchRef | null;
  /**
   * Fetch a list of refs from the repository
   */
  refs: RepositoryDetailsFragment_refs | null;
}
