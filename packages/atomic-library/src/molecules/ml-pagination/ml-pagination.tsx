import { View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { AtButton, AtButtonVariants, AtIcon, AtPagination } from "../../atoms";
import { MlPaginationProps } from "./ml-pagination.types";
import { PaginationEllipsis } from "./pagination-ellipsis";
import { paginationClasses } from "./ml-pagination.variants";

export const MlPagination = ({
  pageCount,
  siblingCount: defaultSiblingCount = 1,
  boundaryCount: defaultBoundaryCount = 1,
  showPrevAndNextButtons = true,
  disabled = false,
  defaultPage = 1,
  onPageChange,
}: MlPaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(defaultPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange?.(pageNumber);
  };

  useEffect(() => {
    if (defaultPage > 0 && currentPage !== defaultPage) {
      setCurrentPage(defaultPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultPage]);

  const [siblingCount, setSiblingCount] = useState(defaultSiblingCount);
  const [boundaryCount, setBoundaryCount] = useState(defaultBoundaryCount);

  const adjustCountsForScreenSize = useCallback(() => {
    if (window.innerWidth < 768) {
      setSiblingCount(0);
      setBoundaryCount(0);
    } else {
      setSiblingCount(defaultSiblingCount);
      setBoundaryCount(defaultBoundaryCount);
    }
  }, [defaultBoundaryCount, defaultSiblingCount]);

  useEffect(() => {
    adjustCountsForScreenSize();

    window.addEventListener("resize", adjustCountsForScreenSize);

    return () =>
      window.removeEventListener("resize", adjustCountsForScreenSize);
  }, [adjustCountsForScreenSize]);

  const setPaginationItemDisplay = (index: number) => {
    const currentPageIndex = currentPage - 1;

    const isSibling = Math.abs(index - currentPageIndex) <= siblingCount;
    const isLeftBoundary = Math.abs(index) < boundaryCount;
    const isRightBoundary = Math.abs(index - pageCount) <= boundaryCount;

    const isSiblingAdjacent =
      Math.abs(index - currentPageIndex) === siblingCount + 1;
    const isLeftBoundaryAdjacent = Math.abs(index) === boundaryCount;
    const isRightBoundaryAdjacent =
      Math.abs(index - pageCount) === boundaryCount + 1;

    const currentPageIsInLeftBoundary =
      currentPageIndex <= siblingCount + boundaryCount + 1;
    const limitIfCurrentPageIsInLeftBoundary =
      siblingCount * 2 + boundaryCount + 1;
    const isLimitAdjacentIfCurrentPageIsInLeftBoundary =
      index === siblingCount * 2 + boundaryCount + 2;

    const currentPageIsInRightBoundary =
      currentPageIndex >= pageCount - siblingCount - boundaryCount - 1;
    const limitIfCurrentPageIsInRightBoundary =
      pageCount - siblingCount * 2 - boundaryCount - 2;
    const isLimitAdjacentIfCurrentPageIsInRightBoundary =
      index === pageCount - siblingCount * 2 - boundaryCount - 3;

    if (
      isSibling ||
      isLeftBoundary ||
      isRightBoundary ||
      (isSiblingAdjacent && isLeftBoundaryAdjacent) ||
      (isSiblingAdjacent && isRightBoundaryAdjacent) ||
      (currentPageIsInLeftBoundary &&
        index <= limitIfCurrentPageIsInLeftBoundary) ||
      (currentPageIsInRightBoundary &&
        index >= limitIfCurrentPageIsInRightBoundary) ||
      (currentPageIsInLeftBoundary &&
        isRightBoundaryAdjacent &&
        isLimitAdjacentIfCurrentPageIsInLeftBoundary) ||
      (currentPageIsInRightBoundary &&
        isLeftBoundaryAdjacent &&
        isLimitAdjacentIfCurrentPageIsInRightBoundary)
    ) {
      return (
        <AtPagination
          key={`pagination-page-${index}`}
          pageLabel={index + 1}
          selected={currentPageIndex === index}
          disabled={disabled}
          onClick={() => handlePageChange(index + 1)}
        />
      );
    }

    if (
      isSiblingAdjacent ||
      (currentPageIsInLeftBoundary &&
        isLimitAdjacentIfCurrentPageIsInLeftBoundary) ||
      (currentPageIsInRightBoundary &&
        isLimitAdjacentIfCurrentPageIsInRightBoundary)
    ) {
      return <PaginationEllipsis key={`pagination-ellipsis-${index}`} />;
    }
  };

  return (
    <View className="flex flex-row gap-2">
      {showPrevAndNextButtons && (
        <AtButton
          variant={AtButtonVariants.SECONDARY}
          className="h-14 !w-14"
          disabled={disabled || currentPage === 1}
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
          dataTestId={"pagination-previous-button"}
        >
          <AtIcon
            type="arrow-left"
            color={
              disabled || currentPage === 1
                ? "disabled-primary"
                : "text-primary"
            }
          />
        </AtButton>
      )}

      <View className={paginationClasses({ disabled })}>
        {Array.from({ length: pageCount }, (_, index) =>
          setPaginationItemDisplay(index)
        )}
      </View>

      {showPrevAndNextButtons && (
        <AtButton
          variant={AtButtonVariants.SECONDARY}
          className="h-14 !w-14"
          disabled={disabled || currentPage === pageCount}
          onClick={() => {
            handlePageChange(currentPage + 1);
          }}
          dataTestId={"pagination-next-button"}
        >
          <AtIcon
            type="arrow-right"
            color={
              disabled || currentPage === pageCount
                ? "disabled-primary"
                : "text-primary"
            }
          />
        </AtButton>
      )}
    </View>
  );
};
