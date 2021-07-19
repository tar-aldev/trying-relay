import { graphql } from "babel-plugin-relay/macro";
import { useRouter } from "found";
import React, { FC, useCallback } from "react";
import { useFragment } from "react-relay";
import { PropsWithFragment } from "../../interfaces/PropsWithFragment";
import BranchesSearchableSelect, {
  BranchesSearchableSelectProps,
} from "./BranchesSearchableSelect";
import { RepositoryDetails_repository$key } from "./__generated__/RepositoryDetails_repository.graphql";

export const REPOSITORY_DETAILS_FRAGMENT = graphql`
  fragment RepositoryDetails_repository on Repository {
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
`;

const RepositoryDetails: FC<
  PropsWithFragment<RepositoryDetails_repository$key>
> = ({ fragmentRef }) => {
  const { router } = useRouter();
  const repository = useFragment(REPOSITORY_DETAILS_FRAGMENT, fragmentRef);
  const handleBranchSelect = useCallback<
    BranchesSearchableSelectProps["handleBranchSelect"]
  >(
    (branchId) => {
      router.push(`/branches/${branchId}`);
    },
    [router]
  );

  return (
    <div>
      <div>
        <h4 className="text-center text-primary">{repository.name}</h4>
        <div
          dangerouslySetInnerHTML={{
            __html: repository.descriptionHTML as any,
          }}
        />
        <p>
          The default branch is:{" "}
          <span className="font-weight-bold text-primary">
            {repository.defaultBranchRef?.name}
          </span>
        </p>
      </div>
      {repository.refs && (
        <BranchesSearchableSelect
          fragmentRef={repository.refs}
          defaultBranchName={repository.defaultBranchRef?.name}
          handleBranchSelect={handleBranchSelect}
        />
      )}
    </div>
  );
};

export default RepositoryDetails;
