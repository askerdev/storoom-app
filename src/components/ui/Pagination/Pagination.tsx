import { useMemo } from "react";
import Flex from "@/components/ui/Flex";
import Arrow from "@/components/ui/icons/Arrow";
import Typography from "@/components/ui/Typography";

type TPaginationProps = {
  canPreviousPage: boolean;
  canNextPage: boolean;
  nextPage: () => void;
  previousPage: () => void;
  setPageIndex: (page: number) => void;
  pageIndex: number;
  totalPages: number;
  disabled?: boolean;
};

const getCurrentColor = (state: boolean) => (state ? "black" : "gray_100");

const Pagination = ({
  pageIndex,
  totalPages,
  nextPage,
  previousPage,
  canPreviousPage,
  canNextPage,
  setPageIndex,
  disabled = false,
}: TPaginationProps) => {
  const pageIndexes = useMemo(
    () =>
      Array(totalPages)
        .fill(0)
        .map((_, index) => index),
    [totalPages],
  );

  const pages = useMemo(() => {
    if (pageIndex < 2) return pageIndexes.slice(0, 5);

    if (pageIndexes.length - pageIndex < 5)
      return pageIndexes.slice(pageIndexes.length - 5, pageIndexes.length);

    return pageIndexes.slice(pageIndex - 2, pageIndex + 3);
  }, [pageIndex, pageIndexes]);

  return (
    <Flex $gap={20} $alignItems="center">
      <button
        type="button"
        onClick={previousPage}
        disabled={disabled}
        aria-label="previous page"
      >
        <Arrow
          $size={16}
          $color={getCurrentColor(canPreviousPage)}
          $rotateDeg={90}
        />
      </button>
      {pages.map((page) => {
        const isCurrentPage = page === pageIndex;

        return (
          <button
            key={page}
            type="button"
            disabled={isCurrentPage || disabled}
            onClick={() => setPageIndex(page)}
          >
            <Typography
              $variant="text1"
              $color={getCurrentColor(isCurrentPage)}
            >
              {page + 1}
            </Typography>
          </button>
        );
      })}
      <button
        type="button"
        onClick={nextPage}
        disabled={disabled}
        aria-label="next page"
      >
        <Arrow
          $size={16}
          $color={getCurrentColor(canNextPage)}
          $rotateDeg={-90}
        />
      </button>
    </Flex>
  );
};

export default Pagination;
