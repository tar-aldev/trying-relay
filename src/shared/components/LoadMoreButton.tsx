import React, { FC } from "react";
import { Button } from "react-bootstrap";

interface LoadMoreButtonProps {
  isLoadingNext: boolean;
  onLoadMore: (e: any) => void;
}

const LoadMoreButton: FC<LoadMoreButtonProps> = ({
  isLoadingNext,
  onLoadMore,
}) => {
  return (
    <Button
      onClick={onLoadMore}
      disabled={isLoadingNext}
      style={{ width: 130 }}
    >
      <span>{isLoadingNext ? "Loading..." : "Load more"}</span>
    </Button>
  );
};

export default LoadMoreButton;
