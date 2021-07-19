import { graphql } from "babel-plugin-relay/macro";
import React, { FC, Suspense } from "react";
import { usePreloadedQuery } from "react-relay";
import { PropsWithPreloadedQuery } from "../../interfaces/PropsWithPreloadedQuery";
import RepositoriesList from "./RepositoriesList";
import { RepositoriesPageQuery } from "./__generated__/RepositoriesPageQuery.graphql";

export const REPOSITORIES_PAGE_QUERY = graphql`
  query RepositoriesPageQuery {
    viewer {
      repositories(first: 100, orderBy: { field: NAME, direction: ASC }) {
        ...RepositoriesList_repositories
      }
    }
  }
`;

const RepositoriesPage: FC<PropsWithPreloadedQuery<RepositoriesPageQuery>> = ({
  data,
}) => {
  const { viewer } = usePreloadedQuery(REPOSITORIES_PAGE_QUERY, data);

  return (
    <>
      <h6>Your Repositories</h6>
      <Suspense fallback={<div>Loading...</div>}>
        <RepositoriesList fragmentRef={viewer.repositories} />
      </Suspense>
    </>
  );
};

export default RepositoriesPage;
