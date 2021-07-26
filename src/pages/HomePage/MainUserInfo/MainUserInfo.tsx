import { FC } from "react";
import { Image } from "react-bootstrap";
import { MainUserInfoFragment } from "./__generated__/MainUserInfoFragment";

export interface MainUserInfoProps {
  viewer: MainUserInfoFragment;
}

const MainUserInfo: FC<MainUserInfoProps> = ({ viewer }) => {
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
        Welcome, {viewer.name || viewer.login}
      </h6>
      <p className="m-0 text-md-center">
        You can either browse your repositories or go directly to{" "}
        <a href={viewer.url as string}>your github account</a>
      </p>
    </>
  );
};

export default MainUserInfo;
