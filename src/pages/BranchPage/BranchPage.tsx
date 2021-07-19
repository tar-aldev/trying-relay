import { graphql } from "babel-plugin-relay/macro";
import { FC } from "react";
import { usePreloadedQuery } from "react-relay";
import { PropsWithPreloadedQuery } from "../../interfaces/PropsWithPreloadedQuery";
import BranchInfo from "./BranchInfo/BranchInfo";
import CommitsList from "./CommitsList/CommitsList";
import { BranchPageQuery } from "./__generated__/BranchPageQuery.graphql";

export const BRANCH_PAGE_QUERY = graphql`
  query BranchPageQuery($id: ID!) {
    node(id: $id) {
      id
      ... on Ref {
        name
        repository {
          name
          owner {
            login
          }
        }
        target {
          ... on Commit {
            ...CommitsListFragment_commits
          }
        }
      }
    }
  }
`;

const BranchPage: FC<PropsWithPreloadedQuery<BranchPageQuery>> = ({
  data: queryRef,
}) => {
  const { node: branch } = usePreloadedQuery(BRANCH_PAGE_QUERY, queryRef);

  return (
    <>
      <BranchInfo branch={branch} />
      {branch?.target && <CommitsList fragmentRef={branch.target} />}
    </>
  );
};

export default BranchPage;
