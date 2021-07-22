/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepositoryFragment
// ====================================================

export interface RepositoryFragment_collaborators_edges_node {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface RepositoryFragment_collaborators_edges {
  __typename: "RepositoryCollaboratorEdge";
  node: RepositoryFragment_collaborators_edges_node;
}

export interface RepositoryFragment_collaborators {
  __typename: "RepositoryCollaboratorConnection";
  /**
   * A list of edges.
   */
  edges: (RepositoryFragment_collaborators_edges | null)[] | null;
}

export interface RepositoryFragment_owner {
  __typename: "Organization" | "User";
  id: string;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The HTTP URL for the owner.
   */
  url: any;
  /**
   * A URL pointing to the owner's public avatar.
   */
  avatarUrl: any;
}

export interface RepositoryFragment {
  __typename: "Repository";
  id: string;
  /**
   * The name of the repository.
   */
  name: string;
  /**
   * The HTTP URL for this repository
   */
  url: any;
  /**
   * A list of collaborators associated with the repository.
   */
  collaborators: RepositoryFragment_collaborators | null;
  /**
   * The User owner of the repository.
   */
  owner: RepositoryFragment_owner;
}
