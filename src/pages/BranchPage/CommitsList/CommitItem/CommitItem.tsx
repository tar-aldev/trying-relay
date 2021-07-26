import { FC, useMemo } from "react";
import { Card } from "react-bootstrap";
import { formatDate } from "../../../../helpers/dateHelpers";
import { BranchPageQuery_node_Ref_target_Commit_history_edges_node } from "../../__generated__/BranchPageQuery";

export interface CommitItemProps {
  commit: BranchPageQuery_node_Ref_target_Commit_history_edges_node;
}

const CommitItem: FC<CommitItemProps> = ({ commit }) => {
  const formattedCommitDate = useMemo(
    () => formatDate(commit.committedDate),
    [commit.committedDate]
  );

  return (
    <Card className="mb-2">
      <Card.Body as="div">
        <h6>Commit message:</h6>
        <p>{commit.message}</p>

        <hr />
        <p className="small">
          Commited by{" "}
          <span className="text-primary">{commit.author?.name}</span>
        </p>

        <p className="text-right small">
          <span className="text-primary">{formattedCommitDate}</span>
        </p>
      </Card.Body>
    </Card>
  );
};

export default CommitItem;
