import { gql } from "@apollo/client";
import { PAGE_INFO_FRAGMENT } from "../../shared/fragments/pageInfoFragment";
import { REPOSITORY_LIST_ITEM_FRAGMENT } from "./RepositoriesList/RepositoriesListItem/RepositoryListItemFragment";

export const REPOSITORIES_PAGE_QUERY = gql`
  query RepositoriesPageQuery(
    $cursor: String
    $count: Int!
    $queryString: String!
    $type: SearchType!
  ) {
    search(first: $count, after: $cursor, query: $queryString, type: $type) {
      repositoryCount
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        cursor
        node {
          ...RepositoryListItemFragment
        }
      }
    }
  }
  ${REPOSITORY_LIST_ITEM_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
`;
