import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { usePaginationFragment } from "react-relay";
import { PER_PAGE_AMOUNT } from "../../../core/constants";
import { PropsWithFragment } from "../../../interfaces/PropsWithFragment";
import ListLayout from "../../../shared/components/ListLayout";
import ShownPaginationCount from "../../../shared/components/ShownPaginationCount";
import FollowersListItem from "./FollowersListItem";
import { FollowersList_followers$key } from "./__generated__/FollowersList_followers.graphql";

export const FOLLOWERS_LIST_FRAGMENT = graphql`
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
`;

const FollowersList: FC<PropsWithFragment<FollowersList_followers$key>> = ({
  fragmentRef,
}) => {
  const {
    data: { followers },
    isLoadingNext,
    loadNext,
  } = usePaginationFragment(FOLLOWERS_LIST_FRAGMENT, fragmentRef);

  const onLoadMoreFollowers = () => {
    loadNext(PER_PAGE_AMOUNT);
  };

  return (
    <>
      <ListLayout
        hasMore={followers.pageInfo.hasNextPage}
        list={
          <>
            {followers.edges?.map((edge, index) => (
              <FollowersListItem
                key={index || edge?.cursor}
                fragmentRef={edge!}
              />
            ))}
          </>
        }
        isLoadingNext={isLoadingNext}
        onLoadMore={onLoadMoreFollowers}
        shownItemsAmount={followers.edges?.length || 0}
        totalItemsAmount={followers.totalCount}
        countPosition="top"
      />
    </>
  );
};

export default FollowersList;
