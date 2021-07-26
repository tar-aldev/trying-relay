import { gql } from "@apollo/client";

export const REPOSITORY_LIST_ITEM_FRAGMENT = gql`
  fragment RepositoryListItemFragment on Repository {
    id
    name
    url
    collaborators {
      edges {
        node {
          login
        }
      }
    }
    owner {
      id
      login
      url
      avatarUrl
    }
  }
`;
