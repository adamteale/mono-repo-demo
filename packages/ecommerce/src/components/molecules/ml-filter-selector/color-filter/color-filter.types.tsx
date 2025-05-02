import { BaseFilter, IndexFilterHandler } from "@mono-repo-demo/atomic-library";
import { GridColorPickerProps } from "../..";

// Color Filter Types
export type ColorFilterType = Omit<GridColorPickerProps, "onClick"> &
  BaseFilter;

export type ColorFilterProps = ColorFilterType & IndexFilterHandler;
