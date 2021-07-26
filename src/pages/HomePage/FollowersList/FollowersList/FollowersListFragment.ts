import { gql } from "@apollo/client";
import { MAIN_USER_INFO_FRAGMENT } from "../../MainUserInfo/MainUserInfoFragment";

export const FOLLOWERS_LIST_FRAGMENT = gql`
  fragment FollowersListFragment on FollowerConnection {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        createdAt
        ...MainUserInfoFragment
      }
    }
  }
  ${MAIN_USER_INFO_FRAGMENT}
`;
