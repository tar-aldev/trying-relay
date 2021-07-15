import React from "react";
import { graphql } from "babel-plugin-relay/macro";

export const BranchesSearchableSelectFragment = graphql`
  fragment BranchesSearchableSelect_branches on RefConnection {
    edges {
      node {
        id
        name
      }
    }
  }
`;

const BranchesSearchableSelect = () => {
  return <div></div>;
};

export default BranchesSearchableSelect;
