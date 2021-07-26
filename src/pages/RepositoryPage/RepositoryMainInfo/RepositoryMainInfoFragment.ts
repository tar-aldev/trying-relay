import { gql } from "@apollo/client";

export const REPOSITORY_MAIN_INFO_FRAGMENT = gql`
  fragment RepositoryMainInfoFragment on Repository {
    id
    name
    descriptionHTML
    defaultBranchRef {
      id
      name
    }
  }
`;
