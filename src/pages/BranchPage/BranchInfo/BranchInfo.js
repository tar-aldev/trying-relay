import { Link } from "found";
import React from "react";
import { Col, Nav, Row } from "react-bootstrap";
import styles from "./styles.module.scss";

const BranchInfo = ({ branch }) => {
  return (
    <div
      className={`text-center shadow p-2 mb-4 mt-n2 mx-n2 bg-white ${styles.root}`}
    >
      <h6>
        Commits for <span className="text-primary">{branch.name}</span> branch
      </h6>

      <Row className="small text-muted">
        <Col xs={6}>
          <p className="text-left">
            <span className="text-primary">{branch.repository.name}</span> repo
          </p>
        </Col>
        <Col xs={6} className="text-right">
          <p>owner: {branch.repository.owner.login}</p>
        </Col>
      </Row>
      <Nav.Link
        className="text-right px-0"
        as={Link}
        to={`/repositories/${branch.repository.name}/${branch.repository.owner.login}`}
      >
        Back to repo details
      </Nav.Link>
    </div>
  );
};

export default BranchInfo;
