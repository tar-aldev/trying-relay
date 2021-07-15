import React, { Suspense } from "react";
import { Container } from "react-bootstrap";
import { usePreloadedQuery } from "react-relay";
import HomePageContainer from "./HomePageContainer";
import { graphql } from "babel-plugin-relay/macro";

/* 
  Think of this component tree root
  It gathers all the data that nested components need
  and defined data dependencies
*/
export const HomePageQuery = graphql`
  query HomePageQuery {
    ...HomePageContainer_viewer
  }
`;

const HomePage = (props) => {
  const query = usePreloadedQuery(HomePageQuery, props.data);

  return (
    <Container>
      <h4>Home page</h4>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageContainer fragmentRef={query} />
      </Suspense>
    </Container>
  );
};

export default HomePage;
// export default createFragmentContainer(HomePage, {
//   viewer: graphql`
//     # By convention it should be <ComponentName></ComponentName>
//     fragment HomePage_viewer on User {
//       avatarUrl
//       url
//       email
//     }
//   `,
// });
