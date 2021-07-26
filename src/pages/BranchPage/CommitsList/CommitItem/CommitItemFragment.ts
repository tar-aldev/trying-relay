import { gql } from "@apollo/client";

export const COMMIT_ITEM_FRAGMENT = gql`
  fragment CommitItemFragment on CommitEdge {
    cursor
    node {
      committedDate
      author {
        email
        name
      }
      message
    }
  }
`;
