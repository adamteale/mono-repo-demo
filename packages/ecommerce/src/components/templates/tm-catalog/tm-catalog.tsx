import React from "react";
import { useEffect, useId, useState } from "react";
import { View, Text } from "react-native";

import { TmCatalogProps } from "./tm-catalog.types";
import {
  AtDivider,
  MlBreadcrumb,
  // useModalDialog,
  MlPagination,
  OrListing,
  // MlDropdownFilter,
  // FilterButtons,
  // OrFilter,
  // FilterModal,
} from "@mono-repo-demo/atomic-library";
import { MlProductCardSkeleton } from "../../molecules";
import {
  containerClasses,
  desktopFilterContainerClasses,
} from "./tm-catalog.variants";
import // EcommerceFilter,
// EcommerceFilterSelector,
"../../molecules/ml-filter-selector";

export const resultFetchAmount = 9;

export const TmCatalog = ({
  title,
  query,
  // filters = [],
  breadcrumb,
  // filterModalCloseIconLabel,
  // filterModalOpenFiltersLabel,
  // filterModalShowResultsLabel,
  // filterModalTitle,
  // filterTitle = "Filter by",
  // sortByLabel = "Sort by",
  noResultLabel = "No products found with your search",
  // clearAllFiltersLabel = "Clear All",
  isLoading,
  hasResults,
  onChangePage,
  handleFilter,
  onClearFilters,
  // sortByProps,
  onSortChange,
  currentPage,
  totalPages,
  productCards,
  resultCountsText,
}: TmCatalogProps) => {
  const headingId = useId();
  // const { dialog, handleOpenModal, handleCloseModal } = useModalDialog();

  const [internalTotalPages, setInternalTotalPages] = useState(0);

  useEffect(() => {
    if (!!totalPages) setInternalTotalPages(totalPages);
  }, [totalPages]);

  return (
    <>
      {!query && (
        <MlBreadcrumb
          links={breadcrumb.links}
          className="container py-4 md:py-6"
        />
      )}

      <View className={containerClasses({ hasQuery: !!query })}>
        <View className="flex flex-col gap-y-4 sm:gap-y-8 md:gap-y-10 xl:gap-y-12">
          {title && (
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              {title}
            </h1>
          )}

          <View className="flex justify-between items-center">
            <Text className="text-neutral-500">
              {!isLoading && resultCountsText}
            </Text>

            {/* For Tablet */}
            {/* <View className="hidden lg:flex lg:flex-row-reverse xl:hidden flex-row items-end justify-between self-stretch gap-4">
              <FilterButtons
                onClearFilters={onClearFilters}
                clearAllFiltersLabel={clearAllFiltersLabel}
                handleOpenModal={handleOpenModal}
                filterModalOpenFiltersLabel={filterModalOpenFiltersLabel}
              />
            </View> */}

            {/* <View className="items-center gap-6 hidden xl:flex">
              <Text className="text-lgx font-bold py-4">{sortByLabel}</Text>
              <AtDivider className="rotate-90 !border-primary rounded w-6" />
              {sortByProps?.options && (
                <MlDropdownFilter<EcommerceFilter>
                  {...sortByProps}
                  closeOnClickOutside
                  closeOnActionTaken
                  type={"selector"}
                  onClick={(change) => {
                    if (typeof change === "number") onSortChange(change);
                  }}
                  containerClassName='relative z-[1] h-14 w-[15rem] [&:has(details[open=""])]:drop-shadow'
                  divider={false}
                  sortByDesktopFilter={true}
                  summaryTextClassName="text-lgx md:text-lgx"
                  FilterSelector={EcommerceFilterSelector}
                />
              )}
            </View> */}
          </View>
        </View>
        {/* For Mobile */}
        {/* <View className="lg:hidden flex flex-col sm:flex-row self-stretch justify-center sm:justify-start gap-4 sm:gap-2 items-start">
          <FilterButtons
            onClearFilters={onClearFilters}
            clearAllFiltersLabel={clearAllFiltersLabel}
            handleOpenModal={handleOpenModal}
            filterModalOpenFiltersLabel={filterModalOpenFiltersLabel}
            filterButtonClassName="w-full sm:w-auto"
          />
        </View> */}
      </View>

      <AtDivider />

      <View className={desktopFilterContainerClasses({ isLoading })}>
        {/* For Desktop */}
        <View className="hidden xl:block col-span-1 row-span-full">
          <View className="h-[64.25rem] overflow-y-auto at-scrollbar">
            {/* <OrFilter<EcommerceFilter>
              title={filterTitle}
              onFilterUpdate={handleFilter}
              filters={filters}
              showClearLink={true}
              onClearFilters={onClearFilters}
              clearAllFiltersLabel={clearAllFiltersLabel}
              FilterSelectorComponent={EcommerceFilterSelector}
            /> */}
          </View>
        </View>

        <View className="flex flex-col sm:col-span-2 3xl:col-span-3 gap-12">
          <OrListing filter>
            {!isLoading && !hasResults && (
              <Text className="text-primary">{noResultLabel}</Text>
            )}

            {productCards}

            {isLoading &&
              Array.from({ length: resultFetchAmount }, (_, i) => (
                <MlProductCardSkeleton key={i} />
              ))}
          </OrListing>

          {internalTotalPages !== 0 &&
            ((!isLoading && hasResults) || isLoading) && (
              <View className="w-full flex flex-col items-start">
                <MlPagination
                  pageCount={internalTotalPages}
                  defaultPage={currentPage}
                  onPageChange={onChangePage}
                  disabled={isLoading}
                />
              </View>
            )}
        </View>
      </View>

      {/* For Mobile/Tablet */}
      {/* <View className="xl:hidden">
        <FilterModal<EcommerceFilter>
          dialogRef={dialog}
          filterModalCloseIconLabel={filterModalCloseIconLabel}
          headingId={headingId}
          filterModalTitle={filterModalTitle}
          sortByLabel={sortByLabel}
          sortByProps={sortByProps}
          onSortChange={onSortChange}
          filterTitle={filterTitle}
          handleFilter={handleFilter}
          filters={filters}
          onClearFilters={onClearFilters}
          clearAllFiltersLabel={clearAllFiltersLabel}
          filterModalShowResultsLabel={filterModalShowResultsLabel}
          handleCloseModal={handleCloseModal}
          FilterSelectorComponent={EcommerceFilterSelector}
        />
      </View> */}
    </>
  );
};
