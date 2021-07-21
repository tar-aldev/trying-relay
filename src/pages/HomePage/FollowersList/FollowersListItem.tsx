import { FC } from "react";
import { Card, Image } from "react-bootstrap";
import { formatDate } from "../../../helpers/dateHelpers";
import { FollowersListFragment_edges } from "./__generated__/FollowersListFragment";

export interface FollowersListItemProps {
  follower: FollowersListFragment_edges["node"];
}

const FollowersListItem: FC<FollowersListItemProps> = ({ follower }) => {
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
