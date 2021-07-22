import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router-dom";
import BranchInfo, { BRANCH_INFO_FRAGMENT } from "./BranchInfo/BranchInfo";
import {
  BranchPageQuery,
  BranchPageQueryVariables,
  BranchPageQuery_node_Ref
} from "./__generated__/BranchPageQuery";

export const BRANCH_PAGE_QUERY = gql`
  query BranchPageQuery(
    $branchId: ID!
    $connectedCommitsCount: Int!
    $cursor: String
  ) {
    node(id: $branchId) {
      ...BranchInfoFragment
    }
  }
  ${BRANCH_INFO_FRAGMENT}
`;

const BranchPage: FC = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const { data, fetchMore } = useQuery<
    BranchPageQuery,
    BranchPageQueryVariables
  >(BRANCH_PAGE_QUERY, { variables: { branchId, connectedCommitsCount: 5 } });

  return data?.node ? (
    <>
      <BranchInfo
        branch={data?.node as BranchPageQuery_node_Ref}
        fetchMore={fetchMore}
      />
    </>
  ) : (
    <p>Branch cannot be found</p>
  );
};

export default BranchPage;
