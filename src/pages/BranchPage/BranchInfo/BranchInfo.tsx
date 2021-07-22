import { gql } from "@apollo/client";
import { FC } from "react";
import { PropsWithFetchMore } from "../../../shared/interfaces/PropsWithFetchMore";
import CommitsList, { COMMITS_LIST_FRAGMENT } from "../CommitsList/CommitsList";
import {
  BranchPageQuery,
  BranchPageQueryVariables,
  BranchPageQuery_node_Ref,
  BranchPageQuery_node_Ref_target_Commit
} from "../__generated__/BranchPageQuery";
import ConnectedRepositoryInfo from "./ConnectedRepositoryInfo";
import styles from "./styles.module.scss";

export const BRANCH_INFO_FRAGMENT = gql`
  fragment BranchInfoFragment on Ref {
    id
    name
    repository {
      name
      owner {
        login
      }
    }
    target {
      ...CommitsListFragment
    }
  }
  ${COMMITS_LIST_FRAGMENT}
`;

export interface BranchInfoProps
  extends PropsWithFetchMore<BranchPageQuery, BranchPageQueryVariables> {
  branch: BranchPageQuery_node_Ref;
}

const BranchInfo: FC<BranchInfoProps> = ({ branch, fetchMore }) => {
  return (
    <>
      <div
        className={`text-center shadow p-2 mt-n2 mb-4 bg-white ${styles.root}`}
      >
        <h6>
          Commits for <span className="text-primary">{branch.name}</span> branch
        </h6>
        <ConnectedRepositoryInfo repository={branch.repository} />
      </div>
      {branch.target ? (
        <CommitsList
          fetchMore={fetchMore}
          commitsPagination={
            (branch.target as BranchPageQuery_node_Ref_target_Commit)?.history
          }
        />
      ) : (
        <p>Unable to get commits list...</p>
      )}
    </>
  );
};

export default BranchInfo;
