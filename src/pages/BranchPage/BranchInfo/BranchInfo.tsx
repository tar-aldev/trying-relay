import { Link } from "found";
import { FC } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { BranchPageQueryResponse } from "../__generated__/BranchPageQuery.graphql";
import styles from "./styles.module.scss";

const BranchInfo: FC<{ branch: BranchPageQueryResponse["node"] }> = ({
  branch,
}) => {
  return (
    <div
      className={`text-center shadow p-2 mt-n2 mb-4 mx-n2 bg-white ${styles.root}`}
    >
      {branch ? (
        <>
          <h6>
            Commits for{" "}
            <span className="text-primary">{branch.name || "N / A"}</span>{" "}
            branch
          </h6>

          <Container fluid>
            <Row className="small text-muted">
              <Col xs={6}>
                <p className="text-left">
                  <span className="text-primary">
                    {branch.repository?.name}
                  </span>{" "}
                  repo
                </p>
              </Col>
              <Col xs={6} className="text-right">
                <p>owner: {branch.repository?.owner?.login}</p>
              </Col>
            </Row>
          </Container>

          <div className="text-right">
            <Nav.Link
              className="d-inline"
              as={Link}
              to={`/repositories/${branch?.repository?.name}/${branch?.repository?.owner.login}`}
            >
              Back to repo details
            </Nav.Link>
          </div>
        </>
      ) : (
        <p>Branch cannot be found</p>
      )}
    </div>
  );
};

export default BranchInfo;
