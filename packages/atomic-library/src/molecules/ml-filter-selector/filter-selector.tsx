import { FilterProps } from "../ml-dropdown-filter";
import { BaseFilter } from "./filter.types";
import { ListFilter } from "./list-filter/list";
import { ListFilterType } from "./list-filter/list-filter.types";
import { SelectorFilter } from "./selector-filter/selector";
import { SelectorFilterType } from "./selector-filter/selector-filter.types";

// Custom Filters
export type CustomFilter =
  | ({ type: "list" } & ListFilterType & BaseFilter)
  | ({ type: "selector" } & SelectorFilterType & BaseFilter);

export const FilterSelector = (props: FilterProps<CustomFilter>) => {
  switch (props.type) {
    case "list":
      return <ListFilter {...props} />;
    case "selector":
      return <SelectorFilter {...props} />;
    default:
      throw new Error(`Invalid filter type`);
  }
};
