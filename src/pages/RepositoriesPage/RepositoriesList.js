import React from "react";
import { Card, Image } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const RepositoriesList = ({ repositories }) => {
  const history = useHistory();

  const onNavigateToRepositoryDetails = (repoId) => () => {
    history.push(`/repositories/${repoId}`);
  };

  return (
    <div>
      {repositories.map(({ node: repository }) => {
        return (
          <Card
            key={repository.id}
            className="mb-2"
            onClick={onNavigateToRepositoryDetails(repository.id)}
          >
            <Card.Body>
              <Card.Title
                as="div"
                className="d-flex align-items-center justify-content-between"
              >
                <h5>{repository.name}</h5>
                <a
                  href={repository.owner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={repository.owner.avatarUrl}
                    alt="repo owner avatar"
                    width={50}
                    height={50}
                    roundedCircle
                  />
                </a>
              </Card.Title>
              <Card.Text as="div">
                <a
                  href={repository.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to repo
                </a>

                <p>Owner: {repository.owner.login}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default RepositoriesList;
