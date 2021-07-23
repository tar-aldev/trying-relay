import { gql } from "@apollo/client";
import { FC } from "react";
import { PER_PAGE_AMOUNT } from "../../../core/constants";
import ListLayout from "../../../shared/components/ListLayout";
import { PAGE_INFO_FRAGMENT } from "../../../shared/fragments/pageInfoFragment";
import { PropsWithFetchMore } from "../../../shared/interfaces/PropsWithFetchMore";
import {
  BranchPageQuery,
  BranchPageQueryVariables,
  BranchPageQuery_node_Ref_target_Commit_history
} from "../__generated__/BranchPageQuery";
import CommitItem, { COMMIT_ITEM_FRAGMENT } from "./CommitItem";

export const COMMITS_LIST_FRAGMENT = gql`
  fragment CommitsListFragment on Commit {
    history(first: $commitsCount, after: $cursor) {
      totalCount
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        ...CommitItemFragment
      }
    }
  }
  ${PAGE_INFO_FRAGMENT}
  ${COMMIT_ITEM_FRAGMENT}
`;

export interface CommitsListProps
  extends PropsWithFetchMore<BranchPageQuery, BranchPageQueryVariables> {
  commitsPagination: BranchPageQuery_node_Ref_target_Commit_history;
  loadingNext: boolean;
}

const CommitsList: FC<CommitsListProps> = ({
  commitsPagination,
  loadingNext,
  fetchMore
}) => {
  const { edges, pageInfo, totalCount } = commitsPagination;
  const onLoadMoreCommits = () => {
    fetchMore({
      variables: {
        commitsCount: PER_PAGE_AMOUNT,
        cursor: pageInfo.endCursor
      }
    });
  };

  return edges ? (
    <ListLayout
      hasMore={pageInfo.hasNextPage}
      list={
        <>
          {edges.map((edge) => {
            return edge?.node ? (
              <CommitItem key={edge.cursor} commit={edge.node} />
            ) : null;
          })}
        </>
      }
      onLoadMore={onLoadMoreCommits}
      shownItemsAmount={edges.length}
      totalItemsAmount={totalCount}
      isLoadingNext={loadingNext}
    />
  ) : (
    <p>No commits yet...</p>
  );
};

export default CommitsList;
