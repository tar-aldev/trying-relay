import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import ConnectedRepositoryInfo from "./ConnectedRepositoryInfo";
import styles from "./styles.module.scss";

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

const BranchInfo: FC = () => {
  // const branch = useFragment(BRANCH_INFO_FRAGMENT, fragmentRef);

  return (
    <div
      className={`text-center shadow p-2 mt-n2 mb-4 mx-n2 bg-white ${styles.root}`}
    >
      <h6>
        {/* Commits for <span className="text-primary">{branch.name}</span> branch */}
      </h6>
      {/* <ConnectedRepositoryInfo repository={branch.repository} /> */}
    </div>
  );
};

export default BranchInfo;
