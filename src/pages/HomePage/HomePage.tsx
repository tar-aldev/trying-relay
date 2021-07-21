import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MainUserInfo, { MAIN_USER_INFO_FRAGMENT } from "./MainUserInfo";

/* 
  Think of this component as tree root
  It gathers all the data that nested components need
  and defined data dependencies
*/
export const HOME_PAGE_QUERY = gql`
  query HomePageQuery {
    viewer {
      ...MainUserInfo_viewer
      # ...FollowersList_followers
    }
  }
  ${MAIN_USER_INFO_FRAGMENT}
`;

const HomePage: FC = () => {
  const { data } = useQuery(HOME_PAGE_QUERY);

  return (
    <>
      <Container fluid>
        <h5>Home page</h5>
        {data?.viewer && <MainUserInfo viewer={data?.viewer} />}
      </Container>
      <hr />
      {/* <FollowersList fragmentRef={viewer} /> */}
    </>
  );
};

export default HomePage;
