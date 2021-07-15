import { createBrowserRouter, makeRouteConfig, Route } from "found";
import { loadQuery } from "react-relay";
import "./App.css";
import MainLayout from "./core/layouts/MainLayout";
import HomePage, { HomePageQuery } from "./pages/HomePage/HomePage";
import RepositoriesPage, {
  RepositoriesPageQuery,
} from "./pages/RepositoriesPage/RepositoriesPage";
import Environment from "./relay/Environment";
import RepositoryPage, {
  RepositoryPageQuery,
} from "./pages/RepositoryPage/RepositoryPage";

const Router = createBrowserRouter({
  routeConfig: [
    {
      path: "/",
      Component: MainLayout,
      children: [
        {
          path: "/",
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
      ],
    },
  ],
});

/* 
<Route path="/" Component={MainLayout}>
      <Route
        Component={HomePage}
        getData={() => loadQuery(Environment, HomePageQuery)}
      />
      <Route
        path="repositories"
        Component={RepositoriesPage}
        getData={() => loadQuery(Environment, RepositoriesPageQuery)}
      >
        <Route path=":id" Component={RepositoryPage} />
      </Route>
    </Route>
*/
export default Router;
