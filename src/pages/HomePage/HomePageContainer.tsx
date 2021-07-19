import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useFragment } from "react-relay";
import { PropsWithFragment } from "../../interfaces/PropsWithFragment";
import { HomePageContainer_viewer$key } from "./__generated__/HomePageContainer_viewer.graphql";

const HomePageContainer: FC<PropsWithFragment<HomePageContainer_viewer$key>> =
  ({ fragmentRef }) => {
    const viewer = useFragment(
      graphql`
        fragment HomePageContainer_viewer on User {
          name
          avatarUrl
          url
          email
        }
      `,
      fragmentRef
    );

    return (
      <>
        <Row>
          <Col xs={{ span: 8, offset: 2 }} className="p2">
            <Image
              src={viewer.avatarUrl as string}
              alt="avatar"
              roundedCircle
              width="100%"
              height="100%"
            />
          </Col>

          <Col xs={{ span: 8, offset: 2 }} className="p-2">
            <h6 className="text-center">Welcome, {viewer.name}</h6>
            Link to your repo is: <br />
            <a href={viewer.url as string}>{viewer.url as string}</a>
          </Col>
        </Row>
      </>
    );
  };

export default HomePageContainer;
