import { useQuery } from "@apollo/client";
import { FC, useCallback, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import { ParamsWithLogin } from "../../shared/interfaces/ParamsWithLogin";
import BranchesSearchableSelect from "./BranchesSearchableSelect/BranchesSearchableSelect";
import { REPOSITORY_PAGE_QUERY } from "./RepositoryPageQuery";
import {
  RepositoryPageQuery,
  RepositoryPageQueryVariables
} from "./__generated__/RepositoryPageQuery";
import RepositoryMainInfo from "./RepositoryMainInfo/RepositoryMainInfo";

const RepositoryPage: FC = () => {
  const history = useHistory();
  const { login, name: repoName } = useParams<
    ParamsWithLogin & { name: string }
  >();
  const [searchStr, setSearchStr] = useState("");

  const { data, loading, previousData, fetchMore } = useQuery<
    RepositoryPageQuery,
    RepositoryPageQueryVariables
  >(REPOSITORY_PAGE_QUERY, {
    variables: {
      name: repoName,
      owner: login,
      count: 2,
      query: searchStr
    },
    notifyOnNetworkStatusChange: true
  });
  const repositoriesData = data || previousData;
  // initial loading or search
  const loadingRepositories = !data?.repository?.refs && loading;
  // load more button is clicked
  const loadingNextRepositories = !!data?.repository?.refs && loading;

  const handleBranchSelect = useCallback(
    (branchId) => {
      history.push(`${history.location.pathname}/branches/${branchId}`);
    },
    [history]
  );

  return (
    <>
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

        {repositoriesData?.repository && (
          <RepositoryMainInfo repository={repositoriesData.repository} />
        )}
      </Container>
      {repositoriesData?.repository?.refs && (
        <BranchesSearchableSelect
          loading={loadingRepositories}
          loadingNext={loadingNextRepositories}
          fetchMore={fetchMore}
          branchesPagination={repositoriesData.repository.refs}
          searchStr={searchStr}
          setSearchStr={setSearchStr}
          handleBranchSelect={handleBranchSelect}
        />
      )}
    </>
  );
};

export default RepositoryPage;
