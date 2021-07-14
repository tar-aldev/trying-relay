import { RelayEnvironmentProvider } from "react-relay";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./core/Header";
import HomePage from "./pages/HomePage/HomePage";
import RepositoriesPage from "./pages/RepositoriesPage/RespositoriesPage";
import RepositoryPage from "./pages/RepositoryPage/RepositoryPage";
import relayEnvironment from "./relay/Environment";

const App = () => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/repositories" exact>
            <RepositoriesPage />
          </Route>

          <Route path="/repositories/:repoId">
            <RepositoryPage />
          </Route>
        </Switch>
      </Router>
    </RelayEnvironmentProvider>
  );
};

export default App;
