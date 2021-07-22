import { FC, useCallback } from "react";
import ListLayout from "../../shared/components/ListLayout";
import RepositoryListItem, {
  RepositoriesListItemProps
} from "./RepositoriesListItem";
import {
  RepositoriesPageQuery_search,
  RepositoriesPageQuery_search_edges_node_Repository
} from "./__generated__/RepositoriesPageQuery";

export interface RepositoriesListProps {
  searchStr: string;
  repositoriesSearchResult: RepositoriesPageQuery_search;
}

const RepositoriesList: FC<RepositoriesListProps> = ({
  repositoriesSearchResult
}) => {
  const { edges = [], repositoryCount, pageInfo } = repositoriesSearchResult;
  /* const {
    match: { params },
  } = useRouter();
  const { router } = useRouter(); */

  const onNavigateToRepositoryDetails = useCallback<
    RepositoriesListItemProps["handleShowRepoDetails"]
  >((repoName) => {}, []);

  const loadMoreRepositories = useCallback(() => {}, []);

  /* useEffect(() => {
    refetch({ queryString: `${searchStr} in:name user:${params.login}` });
  }, [params.login, searchStr, refetch]); */

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
