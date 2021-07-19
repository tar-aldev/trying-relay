import { graphql } from "babel-plugin-relay/macro";
import { FC, Suspense } from "react";
import { Container } from "react-bootstrap";
import { usePreloadedQuery } from "react-relay";
import { PropsWithPreloadedQuery } from "../../interfaces/PropsWithPreloadedQuery";
import HomePageContainer from "./HomePageContainer";
import { HomePageQuery } from "./__generated__/HomePageQuery.graphql";

/* 
  Think of this component tree root
  It gathers all the data that nested components need
  and defined data dependencies
*/
export const HOME_PAGE_QUERY = graphql`
  query HomePageQuery {
    viewer {
      ...HomePageContainer_viewer
    }
  }
`;

const HomePage: FC<PropsWithPreloadedQuery<HomePageQuery>> = ({
  data: preloadedQuery,
}) => {
  const { viewer } = usePreloadedQuery(HOME_PAGE_QUERY, preloadedQuery);

  return (
    <Container>
      <h4>Home page</h4>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageContainer fragmentRef={viewer} />
      </Suspense>
    </Container>
  );
};

export default HomePage;
