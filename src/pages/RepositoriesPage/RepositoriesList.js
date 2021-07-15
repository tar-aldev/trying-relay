import graphql from "babel-plugin-relay/macro";
import { useRouter } from "found";
import React, { useCallback } from "react";
import { useFragment } from "react-relay";
import RepositoryListItem from "./RepositoriesListItem";

export const RespositoriesListFragment = graphql`
  fragment RepositoriesList_repositories on RepositoryConnection {
    edges {
      node {
        ...RepositoriesListItem_repository
      }
    }
  }
`;

const RepositoriesList = ({ fragmentRef }) => {
  const { match, router } = useRouter();
  const { edges } = useFragment(RespositoriesListFragment, fragmentRef);
  // const history = useHistory();

  const onNavigateToRepositoryDetails = useCallback(
    (repoId) => {
      router.push(`/repositories/${repoId}`);
      // history.push(`/repositories/${repoId}`);
    },
    [router]
  );

  return (
    <div>
      {edges.map((edge) => {
        return (
          <RepositoryListItem
            fragmentRef={edge.node}
            handleListItemClick={onNavigateToRepositoryDetails}
          />
        );
      })}
    </div>
  );
};

export default RepositoriesList;
