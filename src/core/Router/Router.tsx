import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BranchPage from "../../pages/BranchPage/BranchPage";
import HomePage from "../../pages/HomePage/HomePage";
import RepositoriesPage from "../../pages/RepositoriesPage/RepositoriesPage";
import RepositoryPage from "../../pages/RepositoryPage/RepositoryPage";
import MainLayout from "../layouts/MainLayout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:login?">
          <MainLayout>
            <Switch>
              <Route path="/:login/repositories/:repoName/branches/:branchId">
                <BranchPage />
              </Route>
              <Route path="/:login/repositories/:repoName">
                <RepositoryPage />
              </Route>
              <Route path="/:login/repositories">
                <RepositoriesPage />
              </Route>
              <Route path="/:login">
                <HomePage />
              </Route>
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
