import { createBrowserRouter } from "found";
import { loadQuery } from "react-relay";
import "./App.css";
import MainLayout from "./core/layouts/MainLayout";
import BranchPage, { BranchPageQuery } from "./pages/BranchPage/BranchPage";
import HomePage, { HomePageQuery } from "./pages/HomePage/HomePage";
import RepositoriesPage, {
  RepositoriesPageQuery,
} from "./pages/RepositoriesPage/RepositoriesPage";
import RepositoryPage, {
  RepositoryPageQuery,
} from "./pages/RepositoryPage/RepositoryPage";
import Environment from "./relay/Environment";

const TestComponent = () => {
  return <h1>Test component</h1>;
};

/* 
makeRouteConfig(
    <Route path="/" Component={MainLayout}>
      <Route
        Component={HomePage}
        getData={() => loadQuery(Environment, HomePageQuery)}
      />

      <Route path="repositories">
        <Route
          Component={RepositoriesPage}
          getData={() => {
            return loadQuery(Environment, RepositoriesPageQuery);
          }}
        />
        <Route
          path=":name/:owner"
          Component={RepositoryPage}
          getData={({ routeParams }) => {
            return loadQuery(Environment, RepositoryPageQuery, {
              name: routeParams.name,
              owner: routeParams.owner,
            });
          }}
        >
          <Route />
          {{
            branch: <Route path=":branchId" Component={TestComponent} />,
          }}
        </Route>
      </Route>

      {/* <Route
        path="repositories/:name/:owner"
        Component={RepositoryPage}
        getData={({ routeParams }) => {
          return loadQuery(Environment, RepositoryPageQuery, {
            name: routeParams.name,
            owner: routeParams.owner,
          });
        }}
      ></Route> *
      </Route>
      ),

*/

const routes = [
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
        children: [
          {
            path: "test",
            Component: TestComponent,
          },
        ],
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

const Router = createBrowserRouter({
  routeConfig: routes,
});

export default Router;
