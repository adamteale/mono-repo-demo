import { ButtonHTMLAttributes, ReactNode } from "react";
import { Target } from "../../types";
import { OnClickProps } from "./handlers";
import { IconType } from "../at-icon";

export enum AtButtonIconPosition {
  LEFT = "left",
  RIGHT = "right",
}

export enum AtButtonActionType {
  OPEN_URL = "Open URL",
  GO_BACK = "Go back",
  SCROLL_TO = "Scroll to",
}

export enum AtButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
  QUARTENARY = "quartenary",
}

export enum AtButtonSize {
  SMALL = "small",
  LARGE = "large",
}

export interface AtButtonProps {
  /** The type of action performed by the button. */
  actionType?: AtButtonActionType;

  /** The value associated with the button action. */
  actionValue?: string;

  /** The type of the button element. */
  buttonType?: ButtonHTMLAttributes<HTMLButtonElement>["type"];

  /** The content to be displayed inside the button. */
  children: ReactNode;

  /** The CSS class name for semantic purposes (not for styling) */
  className?: string;

  /** The data test ID for the button. */
  dataTestId?: string;

  /** Indicates whether the button is disabled. */
  disabled?: boolean;

  /** The name of the form the button belongs to. */
  form?: string;

  /** Additional data for [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/). */
  gtmData?: unknown;

  /** The name of the icon to be displayed. */
  icon?: string;

  /** The position of the icon relative to the button content. */
  iconPosition?: AtButtonIconPosition;

  /** The type of icon to be displayed. */
  iconType?: IconType;

  /** Indicates whether the button is in a loading state. */
  isLoading?: boolean;

  /** The click event handler for the button. */
  onClick?:
    | void
    | (<T = React.MouseEvent<HTMLButtonElement, MouseEvent>>(
        e: T,
        onClickProps: OnClickProps
      ) => void);

  /** The size of the button. */
  size?: AtButtonSize;

  /** The target of the button. */
  target?: Target;

  /** The variant of the button. */
  variant?: AtButtonVariants;
}
