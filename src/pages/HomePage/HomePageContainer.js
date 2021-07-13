import React from "react";
import { useFragment } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

const HomePageContainer = ({ fragmentRef }) => {
  const { repository } = useFragment(
    graphql`
      # By convention it should be <ComponentName></ComponentName>
      fragment HomePageContainer_repository on Query {
        repository(owner: "facebook", name: "relay") {
          name
        }
      }
    `,
    fragmentRef
  );

  return <div>{repository.name}</div>;
};

export default HomePageContainer;
