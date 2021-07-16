import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import RepositoriesList from "./RepositoriesList";

const RepositoriesFragment = graphql`
  # By convention it should be <ComponentName></ComponentName>
  fragment RepositoriesContainer_repositories on RepositoryConnection {
    ...RepositoriesList_repositories
  }
`;

const RepositoriesContainer = ({ fragmentRef }) => {
  const data = useFragment(RepositoriesFragment, fragmentRef);

  return <RepositoriesList fragmentRef={data} />;
};

export default RepositoriesContainer;
