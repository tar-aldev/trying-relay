import { gql } from "@apollo/client";
import React, { FC, useCallback } from "react";
import { useHistory } from "react-router-dom";
import BranchesSearchableSelect, {
  BRANCHES_FRAGMENT
} from "./BranchesSearchableSelect";
import { RepositoryPageQuery_repository } from "./__generated__/RepositoryPageQuery";

/* export const REPOSITORY_DETAILS_FRAGMENT = gqfl`
  fragment RepositoryDetails on Repository {
    name
    descriptionHTML
    defaultBranchRef {
      id
      name
    }
    # the branches repository has
    refs(first: 100, refPrefix: "refs/heads/") {
      ...BranchesSearchableSelect_branches
    }
  }
`; */

export const REPOSITORY_DETAILS_FRAGMENT = gql`
  fragment RepositoryDetailsFragment on Repository {
    name
    descriptionHTML
    defaultBranchRef {
      id
      name
    }
    # the branches repository has
    refs(first: $count, refPrefix: "refs/heads/") {
      ...BranchesFragment
    }
  }
  ${BRANCHES_FRAGMENT}
`;

export interface RepositoryDetailsProps {
  repository: RepositoryPageQuery_repository;
}
const RepositoryDetails: FC<RepositoryDetailsProps> = ({ repository }) => {
  const history = useHistory();
  const handleBranchSelect = useCallback(
    (branchId) => {
      history.push(`${history.location.pathname}/branches/${branchId}`);
    },
    [history]
  );

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
      {repository.refs && (
        <BranchesSearchableSelect
          branchesPagination={repository.refs}
          defaultBranchName={repository.defaultBranchRef?.name}
          handleBranchSelect={handleBranchSelect}
        />
      )}
    </div>
  );
};

export default RepositoryDetails;
