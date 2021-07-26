import { gql } from "@apollo/client";
import { PAGE_INFO_FRAGMENT } from "../../../shared/fragments/pageInfoFragment";
import { COMMIT_ITEM_FRAGMENT } from "./CommitItem/CommitItemFragment";

export const COMMITS_LIST_FRAGMENT = gql`
  fragment CommitsListFragment on Commit {
    history(first: $commitsCount, after: $cursor) {
      totalCount
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        ...CommitItemFragment
      }
    }
  }
  ${PAGE_INFO_FRAGMENT}
  ${COMMIT_ITEM_FRAGMENT}
`;
