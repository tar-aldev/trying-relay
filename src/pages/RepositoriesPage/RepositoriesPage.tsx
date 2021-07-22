import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, FC, Suspense, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ParamsWithLogin } from "../../interfaces/ParamsWithLogin";
import { PAGE_INFO_FRAGMENT } from "../../shared/fragments/pageInfoFragment";
import { SearchType } from "../../__generated__/globalTypes";
import RepositoriesList from "./RepositoriesList";
import { REPOSITORY_FRAGMENT } from "./RepositoriesListItem";
import {
  RepositoriesPageQuery,
  RepositoriesPageQueryVariables
} from "./__generated__/RepositoriesPageQuery";

const REPOSITORIES_PAGE_QUERY = gql`
  query RepositoriesPageQuery(
    $cursor: String
    $count: Int!
    $queryString: String!
    $type: SearchType!
  ) {
    search(first: $count, after: $cursor, query: $queryString, type: $type) {
      repositoryCount
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        cursor
        node {
          ...RepositoryFragment
        }
      }
    }
  }
  ${REPOSITORY_FRAGMENT}
  ${PAGE_INFO_FRAGMENT}
`;

const RepositoriesPage: FC = (/* {
  data,
} */) => {
  const [searchStr, setSearchStr] = useState("");
  const { login } = useParams<ParamsWithLogin>();
  const { data, loading, refetch, fetchMore } = useQuery<
    RepositoriesPageQuery,
    RepositoriesPageQueryVariables
  >(REPOSITORIES_PAGE_QUERY, {
    variables: {
      count: 10,
      queryString: `user:${login} ${searchStr} in:name`,
      type: SearchType.REPOSITORY
    }
  });

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.currentTarget.value);
  };

  console.log("data", data);

  return (
    <>
      <Container fluid>
        <h5 className="mb-2">Your Repositories</h5>

        <Form.Control
          size="sm"
          type="text"
          placeholder="Search for repository..."
          className="mb-2"
          value={searchStr}
          onChange={onSearchChange}
        />
      </Container>

      {loading && !data && <div>Loading repositories...</div>}
      {data && (
        <RepositoriesList
          searchStr={searchStr}
          repositoriesSearchResult={data.search}
        />
      )}
      <Suspense fallback={<div></div>}></Suspense>
    </>
  );
};

export default RepositoriesPage;
