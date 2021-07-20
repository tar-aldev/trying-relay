import { RouteConfig } from "found";
import { loadQuery } from "react-relay";
import BranchPage, {
  BRANCH_PAGE_QUERY,
} from "../../pages/BranchPage/BranchPage";
import { BranchPageQuery } from "../../pages/BranchPage/__generated__/BranchPageQuery.graphql";
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
import MainLayout, { MAIN_LAYOUT_QUERY } from "../layouts/MainLayout";

export const routes: RouteConfig = [
  {
    path: "/:login?",
    Component: MainLayout,
    getData: () => loadQuery(Environment, MAIN_LAYOUT_QUERY, {}),
    children: [
      {
        Component: HomePage,
        getData: () =>
          loadQuery<HomePageQuery>(Environment, HOME_PAGE_QUERY, {}),
      },
      {
        path: "repositories",
        Component: RepositoriesPage,
        getData: ({ params }) =>
          loadQuery<RepositoriesPageQuery>(
            Environment,
            REPOSITORIES_PAGE_QUERY,
            { queryString: `user:${params.login}`, type: "REPOSITORY" }
          ),
      },
      {
        path: "repositories/:name",
        Component: RepositoryPage,
        getData: ({ params }) =>
          loadQuery<RepositoryPageQuery>(Environment, REPOSITORY_PAGE_QUERY, {
            name: params.name,
            owner: params.login,
          }),
      },
      {
        path: "/branches/:branchId",
        Component: BranchPage,
        getData: ({ routeParams }) =>
          loadQuery<BranchPageQuery>(Environment, BRANCH_PAGE_QUERY, {
            id: routeParams.branchId,
          }),
      },
    ],
  },
];
