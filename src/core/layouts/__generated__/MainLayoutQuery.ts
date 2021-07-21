/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MainLayoutQuery
// ====================================================

export interface MainLayoutQuery_viewer {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
}

export interface MainLayoutQuery {
  /**
   * The currently authenticated user.
   */
  viewer: MainLayoutQuery_viewer;
}
