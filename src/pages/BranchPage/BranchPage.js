import { usePreloadedQuery } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";
import { Card, ListGroup } from "react-bootstrap";
import SelectedBranchCommits from "./SelectedBranchCommits";

export const BranchPageQuery = graphql`
  query BranchPageQuery($id: ID!) {
    node(id: $id) {
      id
      ... on Ref {
        name
        target {
          ... on Commit {
            ...SelectedBranchCommits_commits
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
      <SelectedBranchCommits fragmentRef={branch.target} />
    </div>
  );
};

export default BranchPage;
