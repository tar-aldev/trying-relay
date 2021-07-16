import { graphql } from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay";
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
      <h6>
        Commits for <span className="text-primary">{branch.name}</span> branch
      </h6>
      <CommitsList fragmentRef={branch.target} />
    </div>
  );
};

export default BranchPage;
