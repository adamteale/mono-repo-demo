import { MlDropdown } from "../ml-dropdown/ml-dropdown";
import { labelClasses } from "./ml-dropdown-filter.variants";
import { MlDropdownFilterProps } from "./ml-dropdown-filter.types";
import { BaseFilter } from "../ml-filter-selector";

export const MlDropdownFilter = <T extends BaseFilter>({
  title,
  initiallyOpen,
  dataTestId,
  containerClassName,
  summaryTextClassName,
  divider,
  closeOnClickOutside,
  closeOnActionTaken,
  noResult,
  noResultLabel = "No results matching your search",
  sortByDesktopFilter = false,
  FilterSelector,
  ...filterProps
}: MlDropdownFilterProps<T>) => {
  return (
    <MlDropdown
      childrenContainerClassName={`${sortByDesktopFilter ? "" : "pb-8"}`}
      summaryTextClassName={summaryTextClassName}
      title={title}
      divider={divider}
      closeOnClickOutside={closeOnClickOutside}
      closeOnActionTaken={closeOnActionTaken}
      containerClassName={containerClassName}
      initiallyOpen={initiallyOpen}
      dataTestId={dataTestId}
      sortByDesktopFilter={sortByDesktopFilter}
    >
      <FilterSelector {...filterProps} />
      {noResult && (
        <Text
          className={labelClasses({ list: filterProps.type.includes("list") })}
        >
          {noResultLabel}
        </Text>
      )}
    </MlDropdown>
  );
};
