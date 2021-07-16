import { graphql } from "babel-plugin-relay/macro";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useFragment } from "react-relay";

const HomePageContainer = ({ fragmentRef }) => {
  const { viewer } = useFragment(
    graphql`
      # By convention it should be <ComponentName></ComponentName>
      fragment HomePageContainer_viewer on Query {
        viewer {
          avatarUrl
          url
          email
        }
      }
    `,
    fragmentRef
  );

  return (
    <>
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="p2">
          <Image
            src={viewer.avatarUrl}
            alt="avatar"
            roundedCircle
            width="100%"
            height="100%"
          />
        </Col>

        <Col xs={{ span: 8, offset: 2 }} className="p-2">
          <h6 className="text-center">Welcome, {viewer.name}</h6>
          Link to your repo is: <br />
          <a href={viewer.url}>{viewer.url}</a>
        </Col>
      </Row>
    </>
  );
};

export default HomePageContainer;
