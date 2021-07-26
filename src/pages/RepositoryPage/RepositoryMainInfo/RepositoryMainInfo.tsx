import { FC } from "react";
import { RepositoryPageQuery_repository } from "../__generated__/RepositoryPageQuery";

export interface RepositoryMainInfoProps {
  repository: RepositoryPageQuery_repository;
}

const RepositoryMainInfo: FC<RepositoryMainInfoProps> = ({ repository }) => {
  return (
    <div>
      <div>
        <h4 className="text-center text-primary">{repository.name}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: repository.descriptionHTML as any
          }}
        />
        {repository.defaultBranchRef?.name && (
          <p>
            The default branch is:{" "}
            <span className="font-weight-bold text-primary">
              {repository.defaultBranchRef?.name}
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default RepositoryMainInfo;
