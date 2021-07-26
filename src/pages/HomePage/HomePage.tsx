import { useQuery } from "@apollo/client";
import { FC } from "react";
import { Container } from "react-bootstrap";
import FollowersList from "./FollowersList/FollowersList/FollowersList";
import { HOME_PAGE_QUERY } from "./HomePageQuery";
import MainUserInfo from "./MainUserInfo/MainUserInfo";
import {
  HomePageQuery,
  HomePageQueryVariables
} from "./__generated__/HomePageQuery";

const HomePage: FC = () => {
  const { data, loading, fetchMore } = useQuery<
    HomePageQuery,
    HomePageQueryVariables
  >(HOME_PAGE_QUERY, {
    variables: {
      count: 2
    },
    notifyOnNetworkStatusChange: true
  });

  return (
    <>
      <Container fluid>
        <h5>Home page</h5>
        {data?.viewer && <MainUserInfo viewer={data?.viewer} />}
        {loading && !data ? <p>Loading info...</p> : <hr />}
      </Container>
      {data?.viewer?.followers && (
        <FollowersList
          followers={data.viewer.followers}
          fetchMore={fetchMore}
          loading={loading}
        />
      )}
    </>
  );
};

export default HomePage;
