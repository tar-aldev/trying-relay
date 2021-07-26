import { gql } from "@apollo/client";
import { BRANCHES_FRAGMENT } from "./BranchesSearchableSelect/BranchesFragment";
import { REPOSITORY_MAIN_INFO_FRAGMENT } from "./RepositoryMainInfo/RepositoryMainInfoFragment";

export const REPOSITORY_PAGE_QUERY = gql`
  query RepositoryPageQuery($name: String!, $owner: String!, $count: Int!, $after: String, $query: String!) {
    repository(name: $name, owner: $owner) {
      ...RepositoryMainInfoFragment
      refs(first: $count, refPrefix: "refs/heads/", query: $query, after: $after) {
        ...BranchesFragment
      }
    }
  }
  ${REPOSITORY_MAIN_INFO_FRAGMENT},
  ${BRANCHES_FRAGMENT}
`;
