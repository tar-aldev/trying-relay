import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { PER_PAGE_AMOUNT } from "../../core/constants";
import BranchInfo, { BRANCH_INFO_FRAGMENT } from "./BranchInfo/BranchInfo";
import CommitsList from "./CommitsList/CommitsList";
import {
  BranchPageQuery,
  BranchPageQueryVariables,
  BranchPageQuery_node_Ref,
  BranchPageQuery_node_Ref_target_Commit_history
} from "./__generated__/BranchPageQuery";

export const BRANCH_PAGE_QUERY = gql`
  query BranchPageQuery($branchId: ID!, $commitsCount: Int!, $cursor: String) {
    node(id: $branchId) {
      ...BranchInfoFragment
    }
  }
  ${BRANCH_INFO_FRAGMENT}
`;

const BranchPage: FC = () => {
  const { branchId } = useParams<{ branchId: string }>();
  const { data, fetchMore, loading } = useQuery<
    BranchPageQuery,
    BranchPageQueryVariables
  >(BRANCH_PAGE_QUERY, {
    variables: { branchId, commitsCount: PER_PAGE_AMOUNT },
    notifyOnNetworkStatusChange: true
  });

  return data?.node ? (
    <BranchInfo
      branch={data?.node as BranchPageQuery_node_Ref}
      renderCommitsList={(
        history: BranchPageQuery_node_Ref_target_Commit_history
      ) => (
        <CommitsList
          fetchMore={fetchMore}
          commitsPagination={history}
          loadingNext={!!data && loading}
        />
      )}
    />
  ) : (
    <p>Branch cannot be found</p>
  );
};

export default BranchPage;
