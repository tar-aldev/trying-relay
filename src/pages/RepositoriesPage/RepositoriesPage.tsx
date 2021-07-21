import { ChangeEvent, FC, Suspense, useState } from "react";
import { Container, Form } from "react-bootstrap";
import RepositoriesList from "./RepositoriesList";
import { RepositoriesPageQuery } from "./__generated__/RepositoriesPageQuery.graphql";

// export const REPOSITORIES_PAGE_QUERY = graphql`
//   query RepositoriesPageQuery($queryString: String!, $type: SearchType!) {
//     ...RepositoriesList_repositories
//   }
// `;

const RepositoriesPage: FC = (/* {
  data,
} */) => {
  // const repos = usePreloadedQuery(REPOSITORIES_PAGE_QUERY, data);
  const [searchStr, setSearchStr] = useState("");
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.currentTarget.value);
  };

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

      <Suspense fallback={<div>Loading repositories...</div>}>
        {/* <RepositoriesList fragmentRef={repos} searchStr={searchStr} /> */}
      </Suspense>
    </>
  );
};

export default RepositoriesPage;
