/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepositoryListItemFragment
// ====================================================

export interface RepositoryListItemFragment_collaborators_edges_node {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface RepositoryListItemFragment_collaborators_edges {
  __typename: "RepositoryCollaboratorEdge";
  node: RepositoryListItemFragment_collaborators_edges_node;
}

export interface RepositoryListItemFragment_collaborators {
  __typename: "RepositoryCollaboratorConnection";
  /**
   * A list of edges.
   */
  edges: (RepositoryListItemFragment_collaborators_edges | null)[] | null;
}

export interface RepositoryListItemFragment_owner {
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

export interface RepositoryListItemFragment {
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
  collaborators: RepositoryListItemFragment_collaborators | null;
  /**
   * The User owner of the repository.
   */
  owner: RepositoryListItemFragment_owner;
}
