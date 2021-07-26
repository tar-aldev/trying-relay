import { gql } from "@apollo/client";
import { FC } from "react";

export const REPOSITORY_MAIN_INFO_FRAGMENT = gql`
  fragment RepositoryMainInfoFragment on Repository {
    id
    name
    descriptionHTML
    defaultBranchRef {
      id
      name
    }
  }
`;

export interface RepositoryDetailsProps {
  repository: any;
}

const RepositoryDetails: FC<RepositoryDetailsProps> = ({ repository }) => {
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
      {/* {repository.refs ? (
        renderBranchesSearch({
          branchesPagination: repository.refs,
          defaultBranchName: repository.defaultBranchRef?.name
        })
      ) : (
        <p>Unable to find branches...</p>
      )} */}
    </div>
  );
};

export default RepositoryDetails;

/* 
(
        <BranchesSearchableSelect
          branchesPagination={repository.refs}
          defaultBranchName={repository.defaultBranchRef?.name}
          handleBranchSelect={handleBranchSelect}
        />
      )

*/
