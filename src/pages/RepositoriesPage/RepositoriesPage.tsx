import { gql, useQuery } from "@apollo/client";
import { ChangeEvent, FC, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PAGE_INFO_FRAGMENT } from "../../shared/fragments/pageInfoFragment";
import { ParamsWithLogin } from "../../shared/interfaces/ParamsWithLogin";
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

const RepositoriesPage: FC = () => {
  const [searchStr, setSearchStr] = useState("");

  console.log("searchStr", searchStr);

  const { login } = useParams<ParamsWithLogin>();
  const { data, loading, fetchMore } = useQuery<
    RepositoriesPageQuery,
    RepositoriesPageQueryVariables
  >(REPOSITORIES_PAGE_QUERY, {
    variables: {
      count: 10,
      queryString: `user:${login}`,
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
          repositoriesSearchResult={data.search}
          fetchMore={fetchMore}
        />
      )}
    </>
  );
};

export default RepositoriesPage;
