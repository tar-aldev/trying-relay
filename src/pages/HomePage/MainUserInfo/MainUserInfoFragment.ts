import { gql } from "@apollo/client";

export const MAIN_USER_INFO_FRAGMENT = gql`
  fragment MainUserInfoFragment on User {
    name
    login
    avatarUrl
    url
    email
  }
`;
