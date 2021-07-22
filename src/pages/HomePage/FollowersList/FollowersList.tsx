// import { PER_PAGE_AMOUNT } from "../../../core/constants";
// import ListLayout from "../../../shared/components/ListLayout";
// import FollowersListItem from "./FollowersListItem";
import { gql, ObservableQueryFields } from "@apollo/client";
import { FC } from "react";
import ListLayout from "../../../shared/components/ListLayout";
import { MAIN_USER_INFO_FRAGMENT } from "../MainUserInfo";
import {
  HomePageQuery,
  HomePageQueryVariables
} from "../__generated__/HomePageQuery";
import FollowersListItem from "./FollowersListItem";
import { FollowersListFragment } from "./__generated__/FollowersListFragment";

/* export const FOLLOWERS_LIST_FRAGMENT = raphql`
  fragment FollowersList_followers on User
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
  )
  @refetchable(queryName: "FollowersListPaginationQuery") {
    followers(first: $count, after: $cursor)
      @connection(key: "FollowersList_followers") {
      totalCount
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        ...FollowersListItem_follower
      }
    }
  }
`; */

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

export interface FollowersListProps {
  followers: FollowersListFragment;
  fetchMore: ObservableQueryFields<
    HomePageQuery,
    HomePageQueryVariables
  >["fetchMore"];
  loading: boolean;
}

const FollowersList: FC<FollowersListProps> = ({
  followers,
  fetchMore,
  loading
}) => {
  const onLoadMoreFollowers = () => {
    fetchMore({
      variables: {
        count: 2,
        after: followers.pageInfo.endCursor
      }
    });
  };

  return (
    <>
      <ListLayout
        hasMore={followers.pageInfo.hasNextPage}
        list={
          <>
            {followers.edges?.map((edge, index) =>
              edge ? (
                <FollowersListItem
                  key={index || edge?.cursor}
                  follower={edge.node}
                />
              ) : null
            )}
          </>
        }
        isLoadingNext={loading}
        onLoadMore={onLoadMoreFollowers}
        shownItemsAmount={followers.edges?.length || 0}
        totalItemsAmount={followers.totalCount}
        countPosition="top"
      />
    </>
  );
};

export default FollowersList;
