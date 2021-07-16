import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

export const RepositoriesListItemFragment = graphql`
  fragment RepositoriesListItem_repository on Repository {
    id
    name
    url
    collaborators {
      edges {
        node {
          login
        }
      }
    }
    owner {
      id
      login
      url
      avatarUrl
    }
  }
`;

const RepositoriesListItem = ({ fragmentRef, handleShowRepoDetails }) => {
  const repository = useFragment(RepositoriesListItemFragment, fragmentRef);

  const onShowRepoDetails = () => {
    handleShowRepoDetails(repository.name, repository.owner.login);
  };

  return (
    <Card key={repository.id} className="mb-2">
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
          <a href={repository.url} target="_blank" rel="noopener noreferrer">
            See on github
          </a>

          <p>Owner: {repository.owner.login}</p>
          <div className="d-flex justify-content-end">
            <Button variant="outline-primary" onClick={onShowRepoDetails}>
              Show details
            </Button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RepositoriesListItem;
