import { Link } from "found";
import { FC } from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { BranchInfo_branch } from "./__generated__/BranchInfo_branch.graphql";

interface ConnectedRepositoryInfoProps {
  repository: BranchInfo_branch["repository"];
}

const ConnectedRepositoryInfo: FC<ConnectedRepositoryInfoProps> = ({
  repository,
}) => {
  return (
    <>
      <Container fluid>
        <Row className="small text-muted">
          <Col xs={6}>
            <p className="text-left">
              <span className="text-primary">{repository.name}</span> repo
            </p>
          </Col>
          <Col xs={6} className="text-right">
            <p>owner: {repository.owner.login}</p>
          </Col>
        </Row>
      </Container>

      <div className="text-right">
        <Button
          variant="outline-secondary"
          className="mt-2"
          as={Link}
          to={`/${repository.owner.login}/repositories/${repository.name}`}
        >
          Back to repo details
        </Button>
      </div>
    </>
  );
};

export default ConnectedRepositoryInfo;
