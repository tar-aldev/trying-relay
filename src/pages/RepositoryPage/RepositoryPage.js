import { Link } from "found";
import React, { Suspense } from "react";
import { Button } from "react-bootstrap";
import RepositoryDetails from "./RepositoryDetails";
import { graphql } from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay";

export const RepositoryPageQuery = graphql`
  query RepositoryPageQuery($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      ...RepositoryDetails_repository
    }
  }
`;
const RepositoryPage = ({ data: preloadedQuery }) => {
  const { repository } = usePreloadedQuery(RepositoryPageQuery, preloadedQuery);
  return (
    <>
      <h5>Repo page</h5>
      <div className="d-flex justify-content-end mb-2">
        <Button as={Link} to="/repositories" variant="outline-secondary">
          Back to repos list
        </Button>
      </div>
      <Suspense fallback={<div>Loading repository information</div>}>
        <RepositoryDetails fragmentRef={repository} />
      </Suspense>
    </>
  );
};

export default RepositoryPage;
