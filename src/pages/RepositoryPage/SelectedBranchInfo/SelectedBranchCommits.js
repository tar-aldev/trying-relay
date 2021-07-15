import React from "react";
import { graphql } from "babel-plugin-relay/macro";

export const SelectedBranchCommitsFragment = graphql`
  fragment SelectedBranchCommits_commits on Commit {
    history(first: 100) {
      edges {
        node {
          author {
            email
            name
          }
          message
        }
      }
    }
  }
`;

const SelectedBranchCommits = () => {
  return <div></div>;
};

export default SelectedBranchCommits;
