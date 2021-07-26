import { useMemo } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routesConfig } from "./routesConfig";
import { getRoutesGroup } from "./routesConfigMapper";

const Routes = () => {
  const routes = useMemo(() => routesConfig.map(getRoutesGroup), []);

  return (
    <Router>
      <Switch>{routes}</Switch>
    </Router>
  );
};

export default Routes;
