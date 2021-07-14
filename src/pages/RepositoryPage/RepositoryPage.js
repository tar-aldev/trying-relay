import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const RepositoryPage = () => {
  return (
    <Container className="p-4">
      <h5>Repo page</h5>
      <div className="d-flex justify-content-end">
        <Button as={NavLink} to="/repositories">
          Back to repos list
        </Button>
      </div>
    </Container>
  );
};

export default RepositoryPage;
