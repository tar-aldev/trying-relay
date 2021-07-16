import { loadQuery } from "react-relay";
import BranchPage, { BranchPageQuery } from "../../pages/BranchPage/BranchPage";
import HomePage, { HomePageQuery } from "../../pages/HomePage/HomePage";
import RepositoriesPage, {
  RepositoriesPageQuery,
} from "../../pages/RepositoriesPage/RepositoriesPage";
import RepositoryPage, {
  RepositoryPageQuery,
} from "../../pages/RepositoryPage/RepositoryPage";
import Environment from "../../relay/Environment";
import MainLayout from "../layouts/MainLayout";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        Component: HomePage,
        getData: () => loadQuery(Environment, HomePageQuery),
      },
      {
        path: "repositories",
        Component: RepositoriesPage,
        getData: () => loadQuery(Environment, RepositoriesPageQuery),
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
