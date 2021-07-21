import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { MainUserInfo_viewer$key } from "./__generated__/MainUserInfo_viewer.graphql";

/* export const MAIN_USER_INFO_FRAGMENT = graphql`
  fragment MainUserInfo_viewer on User {
    name
    login
    avatarUrl
    url
    email
  }
`; */

export const MAIN_USER_INFO_FRAGMENT = gql`
  fragment MainUserInfo_viewer on User {
    name
    login
    avatarUrl
    url
    email
  }
`;

export interface MainUserInfoProps {
  viewer: any;
}

const MainUserInfo: FC<MainUserInfoProps> = ({ viewer }) => {
  // const viewer = useFragment(MAIN_USER_INFO_FRAGMENT, fragmentRef);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Image
          src={viewer.avatarUrl as string}
          alt="avatar"
          roundedCircle
          width={200}
          height={200}
        />
      </div>
      <h6 className="text-center mt-2">
        Welcome, {/* {viewer.name || viewer.login} */}
      </h6>
      <p className="m-0 text-md-center">
        You can either browse your repositories or go directly to{" "}
        {/* <a href={viewer.url as string}>your github account</a> */}
      </p>
    </>
  );
};

export default MainUserInfo;
