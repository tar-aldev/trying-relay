import { gql } from "@apollo/client";
import { PAGE_INFO_FRAGMENT } from "../../../shared/fragments/pageInfoFragment";

export const BRANCHES_FRAGMENT = gql`
  fragment BranchesFragment on RefConnection {
    totalCount
    pageInfo {
      ...PageInfoFragment
    }
    edges {
      node {
        id
        name
      }
    }
  }
  ${PAGE_INFO_FRAGMENT}
`;
