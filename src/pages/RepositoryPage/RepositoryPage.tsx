import { Link } from "found";
import { FC, Suspense } from "react";
import { Button } from "react-bootstrap";
import RepositoryDetails from "./RepositoryDetails";
import { graphql } from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay";
import { PropsWithPreloadedQuery } from "../../interfaces/PropsWithPreloadedQuery";
import { RepositoryPageQuery } from "./__generated__/RepositoryPageQuery.graphql";

export const REPOSITORY_PAGE_QUERY = graphql`
  query RepositoryPageQuery($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      ...RepositoryDetails_repository
    }
  }
`;

const RepositoryPage: FC<PropsWithPreloadedQuery<RepositoryPageQuery>> = ({
  data,
}) => {
  const { repository } = usePreloadedQuery(REPOSITORY_PAGE_QUERY, data);

  return (
    <>
      <h5>Repo page</h5>
      <div className="d-flex justify-content-end mb-2">
        <Button as={Link} to="/repositories" variant="outline-secondary">
          Back to repos list
        </Button>
      </div>
      <Suspense fallback={<div>Loading repository information</div>}>
        {repository ? (
          <RepositoryDetails fragmentRef={repository} />
        ) : (
          "Repository cannot be found"
        )}
      </Suspense>
    </>
  );
};

export default RepositoryPage;
