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
  const { data, loading, fetchMore } = useQuery<
    HomePageQuery,
    HomePageQueryVariables
  >(HOME_PAGE_QUERY, {
    variables: {
      count: 2
    }
  });

  return (
    <>
      <Container fluid>
        <h5>Home page</h5>
        {data?.viewer && <MainUserInfo viewer={data?.viewer} />}
        {loading ? <p>Loading info...</p> : <hr />}
      </Container>
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
