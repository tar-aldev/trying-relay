/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchType } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: RepositoriesPageQuery
// ====================================================

export interface RepositoriesPageQuery_search_pageInfo {
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

export interface RepositoriesPageQuery_search_edges_node_App {
  __typename: "App" | "Discussion" | "Issue" | "MarketplaceListing" | "Organization" | "PullRequest" | "User";
}

export interface RepositoriesPageQuery_search_edges_node_Repository_collaborators_edges_node {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface RepositoriesPageQuery_search_edges_node_Repository_collaborators_edges {
  __typename: "RepositoryCollaboratorEdge";
  node: RepositoriesPageQuery_search_edges_node_Repository_collaborators_edges_node;
}

export interface RepositoriesPageQuery_search_edges_node_Repository_collaborators {
  __typename: "RepositoryCollaboratorConnection";
  /**
   * A list of edges.
   */
  edges: (RepositoriesPageQuery_search_edges_node_Repository_collaborators_edges | null)[] | null;
}

export interface RepositoriesPageQuery_search_edges_node_Repository_owner {
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

export interface RepositoriesPageQuery_search_edges_node_Repository {
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
  collaborators: RepositoriesPageQuery_search_edges_node_Repository_collaborators | null;
  /**
   * The User owner of the repository.
   */
  owner: RepositoriesPageQuery_search_edges_node_Repository_owner;
}

export type RepositoriesPageQuery_search_edges_node = RepositoriesPageQuery_search_edges_node_App | RepositoriesPageQuery_search_edges_node_Repository;

export interface RepositoriesPageQuery_search_edges {
  __typename: "SearchResultItemEdge";
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
  /**
   * The item at the end of the edge.
   */
  node: RepositoriesPageQuery_search_edges_node | null;
}

export interface RepositoriesPageQuery_search {
  __typename: "SearchResultItemConnection";
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
  /**
   * Information to aid in pagination.
   */
  pageInfo: RepositoriesPageQuery_search_pageInfo;
  /**
   * A list of edges.
   */
  edges: (RepositoriesPageQuery_search_edges | null)[] | null;
}

export interface RepositoriesPageQuery {
  /**
   * Perform a search across resources.
   */
  search: RepositoriesPageQuery_search;
}

export interface RepositoriesPageQueryVariables {
  cursor?: string | null;
  count: number;
  queryString: string;
  type: SearchType;
}
