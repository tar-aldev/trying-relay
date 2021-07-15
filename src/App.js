import { createBrowserRouter, makeRouteConfig, Route } from "found";
import { loadQuery } from "react-relay";
import "./App.css";
import MainLayout from "./core/layouts/MainLayout";
import HomePage, { HomePageQuery } from "./pages/HomePage/HomePage";
import RepositoriesPage, {
  RepositoriesPageQuery,
} from "./pages/RepositoriesPage/RepositoriesPage";
import Environment from "./relay/Environment";

const Router = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={MainLayout}>
      <Route
        Component={HomePage}
        getData={() => loadQuery(Environment, HomePageQuery)}
      />
      <Route
        path="repositories"
        Component={RepositoriesPage}
        getData={() => loadQuery(Environment, RepositoriesPageQuery)}
      />
    </Route>
  ),
});

export default Router;
