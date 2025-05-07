import React from "react";
import { View, Text } from "react-native";

import {
  BaseFilter,
  CustomFilter,
  FilterProps,
  // FilterSelector,
} from "@mono-repo-demo/atomic-library";
import { ColorsFilter } from "./color-filter/color";
import { ListRangeFilter } from "./list-range-filter/list-range";
import { SizeFilter } from "./size-filter/size";
import { ColorFilterType } from "./color-filter/color-filter.types";
import { ListRangeFilterType } from "./list-range-filter/list-range-filter.types";
import { SizeFilterType } from "./size-filter/size-filter.types";

export type EcommerceFilter =
  | CustomFilter
  | ({ type: "color" } & ColorFilterType & BaseFilter)
  | ({ type: "list-range" } & ListRangeFilterType & BaseFilter)
  | ({ type: "size" } & SizeFilterType & BaseFilter);

export const EcommerceFilterSelector = (
  props: FilterProps<EcommerceFilter>
) => {
  return <View>placeholder</View>;
  // try {
  //   return FilterSelector(props as FilterProps<CustomFilter>);
  // } catch {
  //   switch (props.type) {
  //     case "color":
  //       return <ColorsFilter {...props} />;
  //     case "list-range":
  //       return <ListRangeFilter {...props} />;
  //     case "size":
  //       return <SizeFilter {...props} />;
  //     default:
  //       throw new Error(`Invalid filter type`);
  //   }
  // }
};
