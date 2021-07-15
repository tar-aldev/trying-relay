import React from "react";
import { graphql } from "babel-plugin-relay/macro";

export const SelectedBranchInfoFragment = graphql`
  fragment SelectedBranchInfo_branch on Ref {
    name
    target {
      ...SelectedBranchCommits_commits
    }
  }
`;

const SelectedBranchInfo = () => {
  return <div>{/* <SelectedBranchCommits /> */}</div>;
};

export default SelectedBranchInfo;
