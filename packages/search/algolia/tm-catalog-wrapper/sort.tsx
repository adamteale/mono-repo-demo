import { useEffect } from "react";
// import { useSortBy } from 'react-instantsearch'

interface SortProps {
  items: { label: string; value: string }[];
  setCurrentSort: (value: string) => void;
  value: number;
}

export const AlgoliaSort = ({ items, setCurrentSort, value }: SortProps) => {
  // const { refine, currentRefinement } = useSortBy({ items })

  // useEffect(() => {
  //   const item = items.find((item) => item.value === currentRefinement)
  //   setCurrentSort(item?.label ?? '')
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [currentRefinement, items])

  // useEffect(() => {
  //   if (typeof value === 'number') {
  //     const item = items[value]

  //     if (!item) return

  //     refine(item.value)
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [items, value])

  return null;
};
