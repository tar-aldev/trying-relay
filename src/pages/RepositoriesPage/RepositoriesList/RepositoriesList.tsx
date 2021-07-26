import { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import ListLayout from "../../../shared/components/ListLayout";
import { PropsWithFetchMore } from "../../../shared/interfaces/PropsWithFetchMore";
import RepositoryListItem, {
  RepositoriesListItemProps
} from "./RepositoriesListItem/RepositoriesListItem";
import {
  RepositoriesPageQuery,
  RepositoriesPageQueryVariables,
  RepositoriesPageQuery_search,
  RepositoriesPageQuery_search_edges_node_Repository
} from "../__generated__/RepositoriesPageQuery";

export interface RepositoriesListProps
  extends PropsWithFetchMore<
    RepositoriesPageQuery,
    RepositoriesPageQueryVariables
  > {
  repositoriesSearchResult: RepositoriesPageQuery_search;
}

const RepositoriesList: FC<RepositoriesListProps> = ({
  repositoriesSearchResult,
  fetchMore
}) => {
  const { edges = [], repositoryCount, pageInfo } = repositoriesSearchResult;
  const history = useHistory();

  const onNavigateToRepositoryDetails = useCallback<
    RepositoriesListItemProps["handleShowRepoDetails"]
  >(
    (repoName) => {
      history.push(`${history.location.pathname}/${repoName}`);
    },
    [history]
  );

  const loadMoreRepositories = useCallback(() => {
    fetchMore({
      variables: {
        count: 2,
        after: pageInfo.endCursor
      }
    });
  }, [pageInfo.endCursor, fetchMore]);

  return (
    <>
      <ListLayout
        list={
          <>
            {(edges || []).map((edge) => {
              return edge?.node ? (
                <RepositoryListItem
                  key={edge?.cursor}
                  repository={
                    edge.node as RepositoriesPageQuery_search_edges_node_Repository
                  }
                  handleShowRepoDetails={onNavigateToRepositoryDetails}
                />
              ) : null;
            })}
          </>
        }
        countPosition="top"
        isLoadingNext={false}
        onLoadMore={loadMoreRepositories}
        hasMore={pageInfo.hasNextPage}
        shownItemsAmount={edges?.length || 0}
        totalItemsAmount={repositoryCount}
      />
    </>
  );
};

export default RepositoriesList;
