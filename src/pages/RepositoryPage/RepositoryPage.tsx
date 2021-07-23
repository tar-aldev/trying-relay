import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { PER_PAGE_AMOUNT } from "../../core/constants";
import { ParamsWithLogin } from "../../shared/interfaces/ParamsWithLogin";
import RepositoryDetails, {
  REPOSITORY_DETAILS_FRAGMENT
} from "./RepositoryDetails";
import {
  RepositoryPageQuery,
  RepositoryPageQueryVariables
} from "./__generated__/RepositoryPageQuery";

export const REPOSITORY_PAGE_QUERY = gql`
  query RepositoryPageQuery($name: String!, $owner: String!, $count: Int!) {
    repository(name: $name, owner: $owner) {
      ...RepositoryDetailsFragment
    }
  }
  ${REPOSITORY_DETAILS_FRAGMENT}
`;

const RepositoryPage: FC = () => {
  const { login, repoName } = useParams<
    ParamsWithLogin & { repoName: string }
  >();
  const { data, loading } = useQuery<
    RepositoryPageQuery,
    RepositoryPageQueryVariables
  >(REPOSITORY_PAGE_QUERY, {
    variables: {
      name: repoName,
      owner: login,
      count: 100
    }
  });

  return (
    <Container fluid>
      <h5>Repo page</h5>
      <div className="d-flex justify-content-end mb-2">
        <Button
          as={Link}
          to={`/${login}/repositories`}
          variant="outline-secondary"
        >
          Back to repos list
        </Button>
      </div>
      {loading && <div>Loading repository information...</div>}
      {data?.repository && <RepositoryDetails repository={data.repository} />}
    </Container>
  );
};

export default RepositoryPage;
