import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import RepositoriesPage from "../../pages/RepositoriesPage/RepositoriesPage";
import MainLayout from "../layouts/MainLayout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:login?">
          <MainLayout>
            <Route path="/:login" exact>
              <HomePage />
            </Route>
            <Route path="/:login/repositories">
              <RepositoriesPage />
            </Route>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
