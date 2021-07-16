import graphql from "babel-plugin-relay/macro";
import { useRouter } from "found";
import React, { useCallback } from "react";
import { useFragment } from "react-relay";
import RepositoryListItem from "./RepositoriesListItem";

export const RespositoriesListFragment = graphql`
  fragment RepositoriesList_repositories on RepositoryConnection {
    edges {
      node {
        id
        ...RepositoriesListItem_repository
      }
    }
  }
`;

const RepositoriesList = ({ fragmentRef }) => {
  const { router } = useRouter();
  const { edges } = useFragment(RespositoriesListFragment, fragmentRef);

  const onNavigateToRepositoryDetails = useCallback(
    (repoName, repoOwner) => {
      router.push(`/repositories/${repoName}/${repoOwner}`);
    },
    [router]
  );

  return (
    <div>
      {edges.map((edge) => {
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
