import { FC } from "react";
import { Container } from "react-bootstrap";

/* 
  Think of this component as tree root
  It gathers all the data that nested components need
  and defined data dependencies
*/
// export const HOME_PAGE_QUERY = graphql`
//   query HomePageQuery {
//     viewer {
//       ...MainUserInfo_viewer
//       ...FollowersList_followers
//     }
//   }
// `;

const HomePage: FC = () => {
  return (
    <>
      <Container fluid>
        <h5>Home page</h5>
        {/* <MainUserInfo fragmentRef={viewer} /> */}
      </Container>
      <hr />
      {/* <FollowersList fragmentRef={viewer} /> */}
    </>
  );
};

export default HomePage;
