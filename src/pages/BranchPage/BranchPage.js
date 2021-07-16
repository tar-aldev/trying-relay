import { graphql } from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay";
import BranchInfo from "./BranchInfo/BranchInfo";
import CommitsList from "./CommitsList/CommitsList";

export const BranchPageQuery = graphql`
  query BranchPageQuery($id: ID!) {
    node(id: $id) {
      id
      ... on Ref {
        name
        repository {
          name
          owner {
            login
          }
        }
        target {
          ... on Commit {
            ...CommitsListFragment_commits
          }
        }
      }
    }
  }
`;

const BranchPage = ({ data: queryRef }) => {
  const { node: branch } = usePreloadedQuery(BranchPageQuery, queryRef);

  return (
    <>
      <BranchInfo branch={branch} />
      <CommitsList fragmentRef={branch.target} />
    </>
  );
};

export default BranchPage;
