import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import RepositoriesList from "./RepositoriesList";

const REPOSITORIES_FRAGMENT = graphql`
  # By convention it should be <ComponentName></ComponentName>
  fragment RepositoriesContainer_repositories on Query {
    viewer {
      repositories(first: 100, orderBy: { field: NAME, direction: ASC }) {
        edges {
          node {
            id
            name
            url
            collaborators {
              edges {
                node {
                  login
                }
              }
            }
            owner {
              id
              login
              url
              avatarUrl
            }
          }
        }
      }
    }
  }
`;

const RepositoriesContainer = ({ fragmentRef }) => {
  const {
    viewer: { repositories },
  } = useFragment(REPOSITORIES_FRAGMENT, fragmentRef);

  return (
    <div>
      {repositories?.edges && repositories.edges.length > 0 ? (
        <RepositoriesList repositories={repositories.edges} />
      ) : (
        <p>No repositories yet...</p>
      )}
    </div>
  );
};

export default RepositoriesContainer;
