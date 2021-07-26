import { FC, ReactElement } from "react";
import {
  BranchPageQuery_node_Ref,
  BranchPageQuery_node_Ref_target_Commit,
  BranchPageQuery_node_Ref_target_Commit_history
} from "../../__generated__/BranchPageQuery";
import ConnectedRepositoryInfo from "../ConnectedRepositoryInfo";
import styles from "./styles.module.scss";

export interface BranchInfoProps {
  branch: BranchPageQuery_node_Ref;
  renderCommitsList: (
    history: BranchPageQuery_node_Ref_target_Commit_history
  ) => ReactElement;
}

const BranchInfo: FC<BranchInfoProps> = ({ branch, renderCommitsList }) => {
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
        renderCommitsList(
          (branch.target as BranchPageQuery_node_Ref_target_Commit)?.history
        )
      ) : (
        <p>Unable to get commits list...</p>
      )}
    </>
  );
};

export default BranchInfo;
