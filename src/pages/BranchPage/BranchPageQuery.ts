import { gql } from "@apollo/client";
import { BRANCH_INFO_FRAGMENT } from "./BranchInfo/BranchInfo/BranchInfoFragment";

export const BRANCH_PAGE_QUERY = gql`
  query BranchPageQuery($branchId: ID!, $commitsCount: Int!, $cursor: String) {
    node(id: $branchId) {
      ...BranchInfoFragment
    }
  }
  ${BRANCH_INFO_FRAGMENT}
`;
