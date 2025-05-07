import { ListOption } from "./list-filter/list-filter.types";

// Base Interfaces and Types
export interface IndexFilterHandler {
  onClick: (index: number) => void;
}

export interface BaseFilter {
  /**
   * Specifies the filter type, such as 'list', 'list-range', 'color', 'size', 'selector',
   * or any other filter type that may be implemented in the future.
   */
  type: string;

  /**
   * Represents the options available for the filter.
   * The 'any' type allows flexibility to accommodate various filter structures
   * that may differ depending on the type of filter being used.
   */
  options?: any;
}

export type Filter<T extends BaseFilter> = T;

/**
 * E-commerce filter definitions are kept here to avoid duplicating the component for e-commerce use cases.
 * Moving these definitions to an e-commerce-specific location would require changing the type of FilterOption.
 * In common filters, FilterOption is `number | ListOption`, but in e-commerce, it would be `number | ListOption | RangeOption`.
 * This change would force us to duplicate `ml-dropdown-filter.types.tsx`, as the FilterProps definition depends on the DropdownFilterHandler, which uses FilterOption.
 * As a result, FilterSelector and EcommerceFilterSelector would require separate props: "FilterProps" and "EcommerceFilterProps".
 * To avoid this duplication and keep a unified FilterProps for both selectors, the e-commerce-specific definitions remain here.
 */
export enum RangeVariant {
  PRESET = "preset",
  CUSTOM = "custom",
}

export type RangeOption = {
  min: number;
  max: number;
  quantity: number;
  selected: boolean;
  rangeOrigin: RangeVariant;
};

export type FilterOption = number | ListOption | RangeOption;
