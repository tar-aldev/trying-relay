import { graphql } from "babel-plugin-relay/macro";
import React, { Suspense } from "react";
import { usePreloadedQuery } from "react-relay";
import withQueryLoader from "../../HOCs/withQueryLoader";
import HomePageContainer from "./HomePageContainer";
import HomePageQuery from "./__generated__/HomePageQuery.graphql";

/* 
  Think of this component tree root
  It gathers all the data that nested components need
  and defined data dependencies
*/
const HomePage = ({ queryRef }) => {
  // TODO: try to figure out if it is fine to use it this way
  // https://github.com/juffalow/react-relay-example/issues/15
  // https://stackoverflow.com/questions/68358785/how-do-i-use-react-router-with-relay
  const query = usePreloadedQuery(
    graphql`
      # By convention it should be <ComponentName></ComponentName>
      query HomePageQuery {
        ...HomePageContainer_repository
      }
    `,
    queryRef
  );

  return (
    <>
      <h4>Home page</h4>
      <Suspense fallback={<div>Loading...</div>}>
        <HomePageContainer fragmentRef={query} />
      </Suspense>
    </>
  );
};

export default withQueryLoader(HomePage, HomePageQuery);
