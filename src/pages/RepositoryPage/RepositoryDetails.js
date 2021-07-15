import React from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

export const RepositoryDetailsFragment = graphql`
  fragment RepositoryDetails_repository on Repository {
    name
    descriptionHTML
    defaultBranchRef {
      name
    }
    # the branches repository has
    refs(first: 100, refPrefix: "refs/heads/") {
      ...BranchesSearchableSelect_branches
    }
    # selected branch from searchable select
    # TODO: make it come from variable
    ref(qualifiedName: "") {
      ...SelectedBranchInfo_branch
    }
  }
`;

const RepositoryDetails = ({ fragmentRef }) => {
  console.log("fragmentRef", fragmentRef);
  const repository = useFragment(RepositoryDetailsFragment, fragmentRef);

  console.log("repository", repository);

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
      {/* <BranchesSearchableSelect /> */}
      {/* <SelectedBranchInfo /> */}
    </div>
  );
};

export default RepositoryDetails;
