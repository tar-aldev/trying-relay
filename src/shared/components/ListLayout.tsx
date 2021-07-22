import { ReactElement, useMemo } from "react";
import { Container } from "react-bootstrap";
import LoadMoreButton from "./LoadMoreButton";
import ShownPaginationCount from "./ShownPaginationCount";
import styles from "./styles.module.scss";

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
  countPosition = "bottom"
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
      <Container fluid className={styles.root}>
        {list}
        {isLoadingNext && <p>Loading more items...</p>}
      </Container>
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
