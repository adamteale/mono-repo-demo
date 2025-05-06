import { AtLinkProps, Color } from "@mono-repo-demo/atomic-library";

export interface MlColorPickerColorVariation {
  colorKey: Color;
  colorName: string;
  isSoldOut?: boolean;
  isSelected?: boolean;
}

export interface BaseMlColorPickerProps {
  /** An array of `MlColorPickerColorVariation` objects, each representing a color option with a key, name, and an optional sold-out status. */
  options: MlColorPickerColorVariation[];

  /** An optional function that gets called with the index of the selected color when a color is clicked. */
  onClick?: (index: number) => void;

  /** An optional string representing the key of the currently selected color. */
  selected?: string;
}

export interface GridColorPickerProps extends BaseMlColorPickerProps {}

export interface InlineColorPickerProps extends BaseMlColorPickerProps {
  /** Optional properties for the icon link, adhering to the `AtLinkProps` interface. */
  iconLinkProps?: AtLinkProps;

  /** An optional number specifying the maximum number of color items to display inline. */
  maxInlineItems?: number;
}

export enum MlColorPickerType {
  INLINE = "inline",
  GRID = "grid",
}

export type MlColorPickerProps =
  | ({ type: MlColorPickerType.GRID } & GridColorPickerProps)
  | ({ type: MlColorPickerType.INLINE } & InlineColorPickerProps);
