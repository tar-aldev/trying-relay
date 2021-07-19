import { graphql } from "babel-plugin-relay/macro";
import { useRouter } from "found";
import { FC, useCallback } from "react";
import { useFragment } from "react-relay";
import { PropsWithFragment } from "../../interfaces/PropsWithFragment";
import RepositoryListItem, {
  RepositoriesListItemProps,
} from "./RepositoriesListItem";
import { RepositoriesList_repositories$key } from "./__generated__/RepositoriesList_repositories.graphql";

export const REPOSITORIES_LIST_FRAGMENT = graphql`
  fragment RepositoriesList_repositories on RepositoryConnection {
    edges {
      node {
        id
        ...RepositoriesListItem_repository
      }
    }
  }
`;

const RepositoriesList: FC<
  PropsWithFragment<RepositoriesList_repositories$key>
> = ({ fragmentRef }) => {
  const { router } = useRouter();
  const { edges } = useFragment(REPOSITORIES_LIST_FRAGMENT, fragmentRef);

  const onNavigateToRepositoryDetails = useCallback<
    RepositoriesListItemProps["handleShowRepoDetails"]
  >(
    (repoName, repoOwner) => {
      router.push(`/repositories/${repoName}/${repoOwner}`);
    },
    [router]
  );

  return (
    <div>
      {edges?.map((edge: any) => {
        return (
          <RepositoryListItem
            key={edge.node.id}
            fragmentRef={edge.node}
            handleShowRepoDetails={onNavigateToRepositoryDetails}
          />
        );
      })}
    </div>
  );
};

export default RepositoriesList;
