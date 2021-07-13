import { Suspense } from "react";
import { RelayEnvironmentProvider } from "react-relay";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import relayEnvironment from "./relay/Environment";

const App = () => {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <Router>
        <Route path="/">
          <HomePage />
        </Route>
      </Router>
    </RelayEnvironmentProvider>
  );
};

export default App;
