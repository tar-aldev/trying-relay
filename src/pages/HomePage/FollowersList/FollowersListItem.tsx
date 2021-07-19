import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { Card, Image } from "react-bootstrap";
import { useFragment } from "react-relay";
import { formatDate } from "../../../helpers/dateHelpers";
import { PropsWithFragment } from "../../../interfaces/PropsWithFragment";
import { FollowersListItem_follower$key } from "./__generated__/FollowersListItem_follower.graphql";

export const FOLLOWERS_LIST_ITEM_FRAGMENT = graphql`
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
`;

const FollowersListItem: FC<PropsWithFragment<FollowersListItem_follower$key>> =
  ({ fragmentRef }) => {
    const { node: follower } = useFragment(
      FOLLOWERS_LIST_ITEM_FRAGMENT,
      fragmentRef
    );

    return follower ? (
      <Card className="mb-2">
        <Card.Body as="div">
          <div className="d-flex">
            <div>
              <Image
                src={follower.avatarUrl as string}
                alt="Follower avatar"
                roundedCircle
                width={50}
                height={50}
              />
            </div>
            <div className="ml-2 flex-grow-1">
              <h6>{follower.name || follower.login}</h6>
              <p>
                View{" "}
                <a
                  href={follower.url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github profile
                </a>
              </p>

              <p className="small text-muted text-right mt-2">
                Started following: {formatDate(follower.createdAt)}
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
