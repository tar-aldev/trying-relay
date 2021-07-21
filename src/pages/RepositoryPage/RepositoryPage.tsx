import { FC, Suspense } from "react";
import { Button } from "react-bootstrap";
import RepositoryDetails from "./RepositoryDetails";

/* export const REPOSITORY_PAGE_QUERY = graphql`
  query RepositoryPageQuery($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      ...RepositoryDetails_repository
    }
  }
`; */

const RepositoryPage: FC = (/* { data } */) => {
  /*  const { repository } = usePreloadedQuery(REPOSITORY_PAGE_QUERY, data);
  const {
    match: { params },
  } = useRouter(); */

  return (
    <>
      <h5>Repo page</h5>
      <div className="d-flex justify-content-end mb-2">
        {/* <Button
          as={Link}
          to={`/${params.login}/repositories`}
          variant="outline-secondary"
        >
          Back to repos list
        </Button> */}
      </div>
      <Suspense fallback={<div>Loading repository information</div>}>
        {/* {repository ? (
          <RepositoryDetails fragmentRef={repository} />
        ) : (
          "Repository cannot be found"
        )} */}
      </Suspense>
    </>
  );
};

export default RepositoryPage;
