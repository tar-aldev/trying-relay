import { FC } from "react";
import BranchInfo from "./BranchInfo/BranchInfo";
import CommitsList from "./CommitsList/CommitsList";

// export const BRANCH_PAGE_QUERY = graphql`
//   query BranchPageQuery($id: ID!) {
//     node(id: $id) {
//       id
//       ... on Ref {
//         ...BranchInfo_branch
//         target {
//           ... on Commit {
//             ...CommitsListFragment_commits
//           }
//         }
//       }
//     }
//   }
// `;

const BranchPage: FC = (/* {
  data: queryRef,
} */) => {
  // const { node: branch } = usePreloadedQuery(BRANCH_PAGE_QUERY, queryRef);

  return false ? (
    <>
      {/* <BranchInfo fragmentRef={branch} />
      <CommitsList fragmentRef={branch.target} /> */}
    </>
  ) : (
    <p>Branch cannot be found</p>
  );
};

export default BranchPage;
