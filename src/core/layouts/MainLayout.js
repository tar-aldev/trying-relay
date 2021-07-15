import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "../../relay/Environment";

const MainLayout = ({ children }) => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Container className="p-2">{children}</Container>
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default MainLayout;
