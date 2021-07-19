import { RouteConfig } from "found";
import { loadQuery } from "react-relay";
import BranchPage, { BranchPageQuery } from "../../pages/BranchPage/BranchPage";
import HomePage, { HOME_PAGE_QUERY } from "../../pages/HomePage/HomePage";
import RepositoriesPage, {
  RepositoriesPageQuery,
} from "../../pages/RepositoriesPage/RepositoriesPage";
import RepositoryPage, {
  RepositoryPageQuery,
} from "../../pages/RepositoryPage/RepositoryPage";
import Environment from "../../relay/Environment";
import MainLayout from "../layouts/MainLayout";
import type { HomePageQuery } from "../../pages/HomePage/__generated__/HomePageQuery.graphql";

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
        getData: () => loadQuery(Environment, RepositoriesPageQuery, {}),
      },
      {
        path: "repositories/:name/:owner",
        Component: RepositoryPage,
        getData: ({ routeParams }) =>
          loadQuery(Environment, RepositoryPageQuery, {
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
