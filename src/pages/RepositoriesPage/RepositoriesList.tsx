import { graphql } from "babel-plugin-relay/macro";
import { useRouter } from "found";
import { FC, useCallback } from "react";
import { usePaginationFragment } from "react-relay";
import { PER_PAGE_AMOUNT } from "../../core/constants";
import { PropsWithFragment } from "../../interfaces/PropsWithFragment";
import ListLayout from "../../shared/components/ListLayout";
import RepositoryListItem, {
  RepositoriesListItemProps,
} from "./RepositoriesListItem";
import { RepositoriesList_repositories$key } from "./__generated__/RepositoriesList_repositories.graphql";

export const REPOSITORIES_LIST_FRAGMENT = graphql`
  fragment RepositoriesList_repositories on User
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
  )
  @refetchable(queryName: "RepositoriesListPaginationQuery") {
    repositories(
      first: $count
      after: $cursor
      orderBy: { field: NAME, direction: ASC }
    ) @connection(key: "RepositoriesList_repositories") {
      totalCount
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          ...RepositoriesListItem_repository
        }
      }
    }
  }
`;

const RepositoriesList: FC<
  PropsWithFragment<RepositoriesList_repositories$key>
> = ({ fragmentRef }) => {
  const { router } = useRouter();
  const {
    data: { repositories },
    loadNext,
    hasNext,
    isLoadingNext,
  } = usePaginationFragment(REPOSITORIES_LIST_FRAGMENT, fragmentRef);

  const onNavigateToRepositoryDetails = useCallback<
    RepositoriesListItemProps["handleShowRepoDetails"]
  >(
    (repoName, repoOwner) => {
      router.push(`/repositories/${repoName}/${repoOwner}`);
    },
    [router]
  );

  const loadMoreRepositories = useCallback(() => {
    loadNext(PER_PAGE_AMOUNT);
  }, [loadNext]);

  return (
    <ListLayout
      list={
        <>
          {repositories.edges?.map((edge) => {
            return edge?.node ? (
              <RepositoryListItem
                key={edge?.node?.id}
                fragmentRef={edge?.node}
                handleShowRepoDetails={onNavigateToRepositoryDetails}
              />
            ) : null;
          })}
        </>
      }
      countPosition="top"
      isLoadingNext={isLoadingNext}
      onLoadMore={loadMoreRepositories}
      hasMore={hasNext}
      shownItemsAmount={repositories.edges?.length || 0}
      totalItemsAmount={repositories.totalCount}
    />
  );
};

export default RepositoriesList;
