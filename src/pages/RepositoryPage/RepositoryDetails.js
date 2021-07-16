import { graphql } from "babel-plugin-relay/macro";
import { useRouter } from "found";
import React, { useCallback } from "react";
import { useFragment } from "react-relay";
import BranchesSearchableSelect from "./BranchesSearchableSelect";

export const RepositoryDetailsFragment = graphql`
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

const RepositoryDetails = ({ fragmentRef }) => {
  const {
    router,
    match: { params },
  } = useRouter();
  const repository = useFragment(RepositoryDetailsFragment, fragmentRef);
  const handleBranchSelect = useCallback(
    (branchId) => {
      router.push(`/branches/${branchId}`);
    },
    [router]
  );

  return (
    <div>
      <div>
        <h4 className="text-center text-primary">{repository.name}</h4>
        <div dangerouslySetInnerHTML={{ __html: repository.descriptionHTML }} />
        <p>
          The default branch is:{" "}
          <span className="font-weight-bold text-primary">
            {repository.defaultBranchRef.name}
          </span>
        </p>
      </div>
      <BranchesSearchableSelect
        fragmentRef={repository.refs}
        selectedBranchId={params.branchId}
        defaultBranchName={repository.defaultBranchRef.name}
        handleBranchSelect={handleBranchSelect}
      />

      {/* <div className="mt-2">
        {selectedBranchId ? (
          <Suspense fallback={<div>Loading Selected branch Info</div>}>
            <SelectedBranchInfo queryRef={selectedBranchQueryRef} />
          </Suspense>
        ) : (
          <p>No branch selected yet</p>
        )}
      </div> */}
    </div>
  );
};

export default RepositoryDetails;
