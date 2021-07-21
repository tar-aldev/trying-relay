import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MainLayout from "../layouts/MainLayout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/:login?">
          <MainLayout>
            <Route path="/">
              <HomePage />
            </Route>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
