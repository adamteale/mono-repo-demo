import React from "react";
import { View, Text } from "react-native";

import { MlColorPickerProps, MlColorPickerType } from "./ml-color-picker.types";
import { InlineColorPicker } from "./inline-color-picker";
import { GridColorPicker } from "./grid-color-picker";

export const MlColorPicker = (props: MlColorPickerProps) => {
  const { type, ...picker } = props;
  return null;
  // return (
  //   <View data-testid="ml-color-picker">
  //     {type === MlColorPickerType.INLINE && <InlineColorPicker {...picker} />}
  //     {type === MlColorPickerType.GRID && <GridColorPicker {...picker} />}
  //   </View>
  // );
};
