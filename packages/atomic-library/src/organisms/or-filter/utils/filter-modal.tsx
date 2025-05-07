import { View } from "react-native";
import { OrFilter, OrFilterProps, OrModal } from "../..";
import { AtButton, AtButtonSize, AtIcon } from "../../../atoms";
import { FilterProps } from "../../../molecules";
import {
  BaseFilter,
  FilterOption,
} from "../../../molecules/ml-filter-selector";
import { JSX } from "react";
import { Text } from "react-native";

interface FilterModalProps<T extends BaseFilter> {
  filterModalCloseIconLabel?: string;
  headingId: string;
  filterModalTitle: string;
  sortByLabel?: string;
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
  filterTitle?: string;
  handleFilter(key: string, value: FilterOption): void;
  filters: OrFilterProps<T>["filters"];
  onClearFilters?(): void;
  clearAllFiltersLabel?: string;
  filterModalShowResultsLabel?: string;
  dialogRef: React.RefObject<HTMLDialogElement | null> | null;
  handleCloseModal(): void | undefined;
  FilterSelectorComponent: (props: FilterProps<any>) => JSX.Element;
}

export const FilterModal = <T extends BaseFilter>({
  filterModalCloseIconLabel,
  headingId,
  filterModalTitle = "",
  sortByLabel,
  sortByProps,
  onSortChange,
  filterTitle = "",
  handleFilter,
  filters,
  onClearFilters,
  clearAllFiltersLabel = "",
  filterModalShowResultsLabel = "",
  dialogRef,
  handleCloseModal,
  FilterSelectorComponent,
}: FilterModalProps<T>) => {
  return (
    <OrModal
      className={`
        border-none rounded-none bg-surface-primary [&::backdrop]:bg-transparent
        w-full max-w-[100dvw] absolute
        top-[6.79rem] h-[calc(100svh_-_6.79rem)] m-0 p-0 py-8 px-6
        sm:px-8 
        md:px-16 md:py-10 md:w-full
        xl:hidden
        `}
      dialogRef={dialogRef}
      handleCloseModal={handleCloseModal}
      closeButtonAriaLabel={filterModalCloseIconLabel}
    >
      <View className="p-4 xl:mb-6 flex justify-between self-stretch items-start">
        <Text
          id={headingId}
          className="text-xl 2xl:text-lgx font-bold text-primary"
        >
          {filterModalTitle}
        </Text>
        <button onClick={handleCloseModal}>
          <AtIcon color="primary" type="cancel" />
        </button>
      </View>

      {sortByLabel && sortByProps.title && (
        <OrFilter<T>
          title={sortByLabel}
          onFilterUpdate={(_, change) => {
            if (typeof change === "number") onSortChange(change);
          }}
          filters={[
            {
              key: "sortBy",
              type: "selector",
              title: sortByProps.title,
              options: sortByProps.options,
            } as any,
          ]}
          FilterSelectorComponent={FilterSelectorComponent}
        />
      )}
      <OrFilter<T>
        title={filterTitle}
        onFilterUpdate={handleFilter}
        filters={filters}
        showClearLink={true}
        onClearFilters={onClearFilters}
        clearAllFiltersLabel={clearAllFiltersLabel}
        FilterSelectorComponent={FilterSelectorComponent}
      />
      <View className="mt-6 pr-4">
        <AtButton
          dataTestId="showMoreResults"
          size={AtButtonSize.SMALL}
          onClick={handleCloseModal}
        >
          {filterModalShowResultsLabel}
        </AtButton>
      </View>
    </OrModal>
  );
};
