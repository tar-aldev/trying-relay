import { count } from "console";
import React, { ReactElement, useMemo } from "react";
import LoadMoreButton from "./LoadMoreButton";
import ShownPaginationCount from "./ShownPaginationCount";

interface ListLayoutProps {
  countPosition?: "top" | "bottom";
  list: ReactElement;
  totalItemsAmount: number;
  shownItemsAmount: number;
  isLoadingNext: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
}

const ListLayout = ({
  list,
  totalItemsAmount,
  shownItemsAmount,
  isLoadingNext,
  onLoadMore,
  hasMore,
  countPosition = "bottom",
}: ListLayoutProps) => {
  const paginationCount = useMemo(() => {
    return (
      <ShownPaginationCount
        position={countPosition}
        showing={shownItemsAmount || 0}
        total={totalItemsAmount}
      />
    );
  }, [shownItemsAmount, totalItemsAmount, countPosition]);

  return (
    <div>
      {countPosition === "top" && paginationCount}
      {list}
      {hasMore && (
        <div className="d-flex justify-content-center">
          <LoadMoreButton
            isLoadingNext={isLoadingNext}
            onLoadMore={onLoadMore}
          />
        </div>
      )}
      {countPosition === "bottom" && paginationCount}
    </div>
  );
};

export default ListLayout;
