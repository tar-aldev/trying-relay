import { RouteConfig } from "found";
import { loadQuery } from "react-relay";
import BranchPage, { BranchPageQuery } from "../../pages/BranchPage/BranchPage";
import HomePage, { HOME_PAGE_QUERY } from "../../pages/HomePage/HomePage";
import { HomePageQuery } from "../../pages/HomePage/__generated__/HomePageQuery.graphql";
import RepositoriesPage, {
  REPOSITORIES_PAGE_QUERY,
} from "../../pages/RepositoriesPage/RepositoriesPage";
import { RepositoriesPageQuery } from "../../pages/RepositoriesPage/__generated__/RepositoriesPageQuery.graphql";
import RepositoryPage, {
  REPOSITORY_PAGE_QUERY,
} from "../../pages/RepositoryPage/RepositoryPage";
import { RepositoryPageQuery } from "../../pages/RepositoryPage/__generated__/RepositoryPageQuery.graphql";
import Environment from "../../relay/Environment";
import MainLayout from "../layouts/MainLayout";

export const routes: RouteConfig = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        Component: HomePage,
        getData: () =>
          loadQuery<HomePageQuery>(Environment, HOME_PAGE_QUERY, {}),
      },
      {
        path: "repositories",
        Component: RepositoriesPage,
        getData: () =>
          loadQuery<RepositoriesPageQuery>(
            Environment,
            REPOSITORIES_PAGE_QUERY,
            {}
          ),
      },
      {
        path: "repositories/:name/:owner",
        Component: RepositoryPage,
        getData: ({ routeParams }) =>
          loadQuery<RepositoryPageQuery>(Environment, REPOSITORY_PAGE_QUERY, {
            name: routeParams.name,
            owner: routeParams.owner,
          }),
      },
      {
        path: "/branches/:branchId",
        Component: BranchPage,
        getData: ({ routeParams }) =>
          loadQuery(Environment, BranchPageQuery, { id: routeParams.branchId }),
      },
    ],
  },
];
