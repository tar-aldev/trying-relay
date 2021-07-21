import { FC } from "react";
import { Card, Image } from "react-bootstrap";
import { formatDate } from "../../../helpers/dateHelpers";

/* export const FOLLOWERS_LIST_ITEM_FRAGMENT = graphql`
  fragment FollowersListItem_follower on UserEdge {
    node {
      email
      name
      login
      avatarUrl
      url
      createdAt
    }
  }
`; */

const FollowersListItem: FC = (/* { fragmentRef } */) => {
  /* const { node: follower } = useFragment(
      FOLLOWERS_LIST_ITEM_FRAGMENT,
      fragmentRef
    ); */

  return false ? (
    <Card className="mb-2">
      <Card.Body as="div">
        <div className="d-flex">
          <div>
            {/* <Image
                src={follower.avatarUrl as string}
                alt="Follower avatar"
                roundedCircle
                width={50}
                height={50}
              /> */}
          </div>
          <div className="ml-2 flex-grow-1">
            {/* <h6>{follower.name || follower.login}</h6> */}
            {/* <p>
                View{" "}
                <a
                  href={follower.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github profile
                </a>
              </p> */}

            <p className="small text-muted text-right mt-2">
              Started following: {/* {formatDate(follower.createdAt)} */}
            </p>
          </div>
        </div>
      </Card.Body>
    </Card>
  ) : (
    <p>No follower info...</p>
  );
};

export default FollowersListItem;
