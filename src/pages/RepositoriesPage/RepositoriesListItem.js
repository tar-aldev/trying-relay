import React from "react";
import { Card, Image } from "react-bootstrap";
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

const RepositoriesListItem = ({ fragmentRef, handleListItemClick }) => {
  const repository = useFragment(RepositoriesListItemFragment, fragmentRef);

  const onListItemClick = () => {
    handleListItemClick(repository.id);
  };

  return (
    <Card key={repository.id} className="mb-2" onClick={onListItemClick}>
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
            Link to repo
          </a>

          <p>Owner: {repository.owner.login}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RepositoriesListItem;
