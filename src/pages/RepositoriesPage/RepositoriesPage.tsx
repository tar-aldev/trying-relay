import { graphql } from "babel-plugin-relay/macro";
import React, { FC, Suspense } from "react";
import { usePreloadedQuery } from "react-relay";
import { PropsWithPreloadedQuery } from "../../interfaces/PropsWithPreloadedQuery";
import RepositoriesList from "./RepositoriesList";
import { RepositoriesPageQuery } from "./__generated__/RepositoriesPageQuery.graphql";

export const REPOSITORIES_PAGE_QUERY = graphql`
  query RepositoriesPageQuery {
    viewer {
      ...RepositoriesList_repositories
    }
  }
`;

const RepositoriesPage: FC<PropsWithPreloadedQuery<RepositoriesPageQuery>> = ({
  data,
}) => {
  const { viewer } = usePreloadedQuery(REPOSITORIES_PAGE_QUERY, data);

  return (
    <>
      <h5 className="mb-2">Your Repositories</h5>
      <Suspense fallback={<div>Loading...</div>}>
        <RepositoriesList fragmentRef={viewer} />
      </Suspense>
    </>
  );
};

export default RepositoriesPage;
