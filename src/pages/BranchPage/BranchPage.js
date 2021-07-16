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
    <div>
      <BranchInfo branch={branch} />
      <CommitsList fragmentRef={branch.target} />
    </div>
  );
};

export default BranchPage;
