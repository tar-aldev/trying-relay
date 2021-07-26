import { ObservableQueryFields } from "@apollo/client";
import { FC } from "react";
import ListLayout from "../../../../shared/components/ListLayout";
import {
  HomePageQuery,
  HomePageQueryVariables
} from "../../__generated__/HomePageQuery";
import FollowersListItem from "../FollowersListItem";
import { FollowersListFragment } from "../__generated__/FollowersListFragment";

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
