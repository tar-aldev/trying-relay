import { gql } from "@apollo/client";
import { COMMITS_LIST_FRAGMENT } from "../../CommitsList/CommitsListFragment";

export const BRANCH_INFO_FRAGMENT = gql`
  fragment BranchInfoFragment on Ref {
    id
    name
    repository {
      name
      owner {
        login
      }
    }
    target {
      ...CommitsListFragment
    }
  }
  ${COMMITS_LIST_FRAGMENT}
`;
