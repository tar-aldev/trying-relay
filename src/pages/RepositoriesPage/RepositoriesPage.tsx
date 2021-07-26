import { useQuery } from "@apollo/client";
import { ChangeEvent, FC, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ParamsWithLogin } from "../../shared/interfaces/ParamsWithLogin";
import { SearchType } from "../../__generated__/globalTypes";
import RepositoriesList from "./RepositoriesList/RepositoriesList";
import { REPOSITORIES_PAGE_QUERY } from "./RepositoriesPageQuery";
import {
  RepositoriesPageQuery,
  RepositoriesPageQueryVariables
} from "./__generated__/RepositoriesPageQuery";

const RepositoriesPage: FC = () => {
  const [searchStr, setSearchStr] = useState("");
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
