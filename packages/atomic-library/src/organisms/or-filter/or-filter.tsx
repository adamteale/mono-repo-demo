import {
  BaseFilter,
  FilterOption,
  FilterSelector,
  MlDropdownFilter,
} from "../../molecules";
import { OrFilterProps } from "./or-filter.types";

export const OrFilter = <T extends BaseFilter>({
  filters,
  onFilterUpdate,
  title,
  showClearLink = false,
  onClearFilters,
  clearAllFiltersLabel = "Clear All",
  FilterSelectorComponent = FilterSelector,
}: OrFilterProps<T>) => {
  return (
    <View className="flex flex-col bg-surface-primary px-4">
      <View className="mb-2 xl:mb-6 py-4 justify-between flex items-center self-stretch">
        <Text className="text-lgx font-bold text-primary">{title}</Text>
        {showClearLink && (
          <button
            className={`flex items-center text-link-hover transition-colors underline underline-offset-2 decoration-2 
            active:font-medium active:text-link-pressed
            `}
            onClick={onClearFilters}
          >
            <Text>{clearAllFiltersLabel}</Text>
          </button>
        )}
      </View>
      {filters.map(({ key, ...filter }) => (
        <MlDropdownFilter
          key={key}
          {...filter}
          FilterSelector={FilterSelectorComponent}
          onClick={(index: FilterOption) => onFilterUpdate(key, index)}
        />
      ))}
    </View>
  );
};
