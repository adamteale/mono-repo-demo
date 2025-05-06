import {
  BaseFilter,
  ListFilterWrapperConfiguration,
  ListItemProps,
  RangeOption,
  RangeVariant,
} from "@mono-repo-demo/atomic-library";

export type ListRangeFilterType = Omit<
  ListFilterWrapperConfiguration,
  "searchComponent" | "options"
> & {
  /** The variant the ListRange will display. */
  listRangeVariant?: RangeVariant;

  /** The placeholder text for the max search input. */
  maxSearchPlaceholder?: string;

  /** The placeholder text for the min search input. */
  minSearchPlaceholder?: string;

  /** An array of options for list, list-range, or selector filters. */
  options: RangeOption[];

  /** The label for the search button. */
  searchButtonLabel?: string;

  /** A function to compare search values. */
  searchCompare?: (
    min: number,
    max: number,
    options: RangeOption[]
  ) => Record<"min" | "max", number>;

  /** A function to transform the option. */
  transformOption?: (
    option: RangeOption,
    index: number
  ) => Omit<ListItemProps, "onClick">;
} & BaseFilter;

export type ListRangeFilterProps = ListRangeFilterType & {
  onClick: (element: RangeOption) => void;
};
