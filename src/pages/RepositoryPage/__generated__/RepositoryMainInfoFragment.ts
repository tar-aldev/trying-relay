/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: RepositoryMainInfoFragment
// ====================================================

export interface RepositoryMainInfoFragment_defaultBranchRef {
  __typename: "Ref";
  id: string;
  /**
   * The ref name.
   */
  name: string;
}

export interface RepositoryMainInfoFragment {
  __typename: "Repository";
  id: string;
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
  defaultBranchRef: RepositoryMainInfoFragment_defaultBranchRef | null;
}
