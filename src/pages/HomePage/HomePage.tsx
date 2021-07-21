import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { Container } from "react-bootstrap";
import MainUserInfo, { MAIN_USER_INFO_FRAGMENT } from "./MainUserInfo";
import {
  HomePageQuery,
  HomePageQueryVariables
} from "./__generated__/HomePageQuery";
import FollowersList, {
  FOLLOWERS_LIST_FRAGMENT
} from "./FollowersList/FollowersList";

/* 
  Think of this component as tree root
  It gathers all the data that nested components need
  and defined data dependencies
*/
export const HOME_PAGE_QUERY = gql`
  query HomePageQuery($count: Int!, $after: String) {
    viewer {
      id
      ...MainUserInfoFragment
      followers(first: $count, after: $after) {
        ...FollowersListFragment
      }
    }
  }
  ${MAIN_USER_INFO_FRAGMENT}
  ${FOLLOWERS_LIST_FRAGMENT}
`;

const HomePage: FC = () => {
  const { data, fetchMore } = useQuery<HomePageQuery, HomePageQueryVariables>(
    HOME_PAGE_QUERY,
    {
      variables: {
        count: 2
      }
    }
  );

  console.log("data", data);

  return (
    <>
      <Container fluid>
        <h5>Home page</h5>
        {data?.viewer && <MainUserInfo viewer={data?.viewer} />}
      </Container>
      <hr />
      {data?.viewer?.followers && (
        <FollowersList
          followers={data.viewer.followers}
          fetchMore={fetchMore}
        />
      )}
    </>
  );
};

export default HomePage;
