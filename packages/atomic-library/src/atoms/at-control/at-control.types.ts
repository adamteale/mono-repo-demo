import { CSSProperties } from "react";

const AT_CONTROL_ARROW_SIZES = {
  BIG: "big",
  MEDIUM: "medium",
} as const;

export type AtControlSize =
  (typeof AT_CONTROL_ARROW_SIZES)[keyof typeof AT_CONTROL_ARROW_SIZES];

const AT_CONTROL_ICON = {
  UP: "up",
  DOWN: "down",
  RIGHT: "right",
  LEFT: "left",
  PLUS: "plus",
  LESS: "less",
} as const;

export type AtControlIcon =
  (typeof AT_CONTROL_ICON)[keyof typeof AT_CONTROL_ICON];

export interface AtControlProps {
  /** The CSS class name for the control component. */
  className?: string;

  /** The data-test-id attribute for testing purposes. */
  dataTestId?: string;

  /** The icon to be displayed on the control. */
  icon?: AtControlIcon;

  /** The label text for the control. */
  label?: string;

  /** The callback function to be called when the control is clicked. */
  onClick: () => void;

  /** The size of the control. */
  size?: AtControlSize;
}

export type ControlIconProps = Pick<
  AtControlProps,
  "size" | "icon" | "className"
> & { style?: CSSProperties };
