import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { useFragment } from "react-relay";
import { PropsWithFragment } from "../../../interfaces/PropsWithFragment";
import ConnectedRepositoryInfo from "./ConnectedRepositoryInfo";
import styles from "./styles.module.scss";
import { BranchInfo_branch$key } from "./__generated__/BranchInfo_branch.graphql";

export const BRANCH_INFO_FRAGMENT = graphql`
  fragment BranchInfo_branch on Ref {
    name
    repository {
      name
      owner {
        login
      }
    }
  }
`;

const BranchInfo: FC<PropsWithFragment<BranchInfo_branch$key>> = ({
  fragmentRef,
}) => {
  const branch = useFragment(BRANCH_INFO_FRAGMENT, fragmentRef);

  return (
    <div
      className={`text-center shadow p-2 mt-n2 mb-4 mx-n2 bg-white ${styles.root}`}
    >
      <h6>
        Commits for <span className="text-primary">{branch.name}</span> branch
      </h6>
      <ConnectedRepositoryInfo repository={branch.repository} />
    </div>
  );
};

export default BranchInfo;
