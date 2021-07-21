import { FC } from "react";
import { Button, Card, Image } from "react-bootstrap";

/* export const REPOSITORIES_LIST_ITEM_FRAGMENT = graphql`
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
`; */

export interface RepositoriesListItemProps {
  handleShowRepoDetails: (repoName: string, ownerLogin: string) => void;
}

const RepositoriesListItem: FC<RepositoriesListItemProps> = ({
  /* fragmentRef, */
  handleShowRepoDetails,
}) => {
  // const repository = useFragment(REPOSITORIES_LIST_ITEM_FRAGMENT, fragmentRef);

  /* const onShowRepoDetails = () => {
    handleShowRepoDetails(repository.name, repository.owner.login);
  }; */

  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title
          as="div"
          className="d-flex align-items-center justify-content-between"
        >
          {/* <h5>{repository.name}</h5>
          <a
            href={repository.owner.url as string}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={repository.owner.avatarUrl as string}
              alt="repo owner avatar"
              width={50}
              height={50}
              roundedCircle
            />
          </a> */}
        </Card.Title>
        <Card.Text as="div">
          {/* <a
            href={repository.url as string}
            target="_blank"
            rel="noopener noreferrer"
          >
            See on github
          </a>

          <p>Owner: {repository.owner.login}</p>
          <div className="d-flex justify-content-end">
            <Button variant="outline-primary" onClick={onShowRepoDetails}>
              Show details
            </Button>
          </div> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RepositoriesListItem;
