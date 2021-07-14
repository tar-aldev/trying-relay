import React, { Suspense } from "react";
import { usePreloadedQuery } from "react-relay";
import withQueryLoader from "../../HOCs/withQueryLoader";
import { graphql } from "babel-plugin-relay/macro";
import RepositoriesContainer from "./RepositoriesContainer";
import RespositoriesPageQuery from "./__generated__/RespositoriesPageQuery.graphql";
import { Container } from "react-bootstrap";

function RespositoriesPage({ queryRef }) {
  // TODO: try to figure out if it is fine to use it this way
  // https://github.com/juffalow/react-relay-example/issues/15
  // https://stackoverflow.com/questions/68358785/how-do-i-use-react-router-with-relay
  const query = usePreloadedQuery(
    graphql`
      # By convention it should be <ComponentName></ComponentName>
      query RespositoriesPageQuery {
        ...RepositoriesContainer_repositories
      }
    `,
    queryRef
  );

  return (
    <Container className="p-4">
      <h6>Your Repositories</h6>
      <Suspense fallback={<div>Loading...</div>}>
        <RepositoriesContainer fragmentRef={query} />
      </Suspense>
    </Container>
  );
}

export default withQueryLoader(RespositoriesPage, RespositoriesPageQuery);
