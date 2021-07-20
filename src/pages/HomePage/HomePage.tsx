import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { usePreloadedQuery } from "react-relay";
import { PropsWithPreloadedQuery } from "../../interfaces/PropsWithPreloadedQuery";
import FollowersList from "./FollowersList/FollowersList";
import MainUserInfo from "./MainUserInfo";
import { HomePageQuery } from "./__generated__/HomePageQuery.graphql";

/* 
  Think of this component as tree root
  It gathers all the data that nested components need
  and defined data dependencies
*/
export const HOME_PAGE_QUERY = graphql`
  query HomePageQuery {
    viewer {
      ...MainUserInfo_viewer
      ...FollowersList_followers
    }
  }
`;

const HomePage: FC<PropsWithPreloadedQuery<HomePageQuery>> = ({
  data: preloadedQuery,
}) => {
  const { viewer } = usePreloadedQuery(HOME_PAGE_QUERY, preloadedQuery);

  return (
    <>
      <h5>Home page</h5>
      <MainUserInfo fragmentRef={viewer} />
      <hr />
      <FollowersList fragmentRef={viewer} />
    </>
  );
};

export default HomePage;
