import { ReactNode } from "react";
import {
  FilterOption,
  MlBreadcrumbProps,
  OrFilterProps,
} from "@mono-repo-demo/atomic-library";
import { EcommerceFilter } from "../../molecules/ml-filter-selector";

export interface TmCatalogProps {
  title?: string;
  currentPage?: number;
  totalPages?: number;
  productCards?: ReactNode;
  query?: string;
  filters?: OrFilterProps<EcommerceFilter>["filters"];
  breadcrumb: MlBreadcrumbProps;
  isLoading: boolean;
  hasResults: boolean;
  onChangePage?(pageNumber: number): void;
  handleFilter(key: string, value: FilterOption): void;
  onClearFilters?(): void;
  sortByProps: {
    type: "selector";
    title: string;
    options: {
      label: string;
      selected: boolean;
    }[];
    onClick: (index: number) => void;
  };
  onSortChange(index: number): void;
  // labels
  resultCountsText?: ReactNode;
  filterModalTitle: string;
  filterModalCloseIconLabel?: string;
  filterModalOpenFiltersLabel?: string;
  filterModalShowResultsLabel?: string;
  filterTitle?: string;
  sortByLabel?: string;
  noResultLabel?: string;
  clearAllFiltersLabel?: string;
}
