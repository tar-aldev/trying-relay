import { gql } from "@apollo/client";
import { FOLLOWERS_LIST_FRAGMENT } from "./FollowersList/FollowersList/FollowersListFragment";
import { MAIN_USER_INFO_FRAGMENT } from "./MainUserInfo/MainUserInfoFragment";

export const HOME_PAGE_QUERY = gql`
  query HomePageQuery($count: Int!, $after: String) {
    viewer {
      id
      ...MainUserInfoFragment
      followers(first: $count, after: $after) {
        ...FollowersListFragment
      }
    }
  }
  ${MAIN_USER_INFO_FRAGMENT}
  ${FOLLOWERS_LIST_FRAGMENT}
`;
