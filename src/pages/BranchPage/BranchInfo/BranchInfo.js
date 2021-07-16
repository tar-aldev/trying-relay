import React from "react";
import styles from "./styles.module.scss";

const BranchInfo = ({ branch }) => {
  return (
    <div
      className={`text-center shadow p-2 mb-4 mx-n2 bg-white ${styles.root}`}
    >
      <h6>
        Commits for <span className="text-primary">{branch.name}</span> branch
      </h6>
    </div>
  );
};

export default BranchInfo;
