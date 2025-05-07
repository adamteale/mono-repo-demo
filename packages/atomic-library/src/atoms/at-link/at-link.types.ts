import { AnchorHTMLAttributes, MouseEvent } from "react";
import { AtIconProps } from "../at-icon";
import { AtButtonProps } from "../at-button";

export enum IconPositions {
  LEFT = "left",
  RIGHT = "right",
}

export interface OnClickProps {
  gtmData?: any;
}

export interface AtLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** An optional attribute that indicates the current page within a set of links. */
  ariaCurrent?: AnchorHTMLAttributes<HTMLAnchorElement>["aria-current"];

  /** An optional object that includes styling properties for the button variant and size. */
  buttonStyleProps?: Pick<AtButtonProps, "variant" | "size">;

  /** An optional string used for testing purposes to identify the element. */
  dataTestId?: string;

  /** An optional property for passing Google Tag Manager data. */
  gtmData?: unknown;

  /** An optional property that determines the position of the icon relative to the label. It can be either `LEFT` or `RIGHT`. */
  iconPosition?: IconPositions;

  /** An optional object containing properties for the icon, such as type, color, and size. */
  iconProps?: AtIconProps;

  /** An optional string that represents the text label of the link. */
  label?: string;

  /** An optional property that allows wrapping the link with a custom component or a button. */
  linkWrapper?: React.ComponentType<any> | "button";

  /**
   * An optional function that handles click events, receiving the event and additional properties.
   * @param e The mouse event triggered by the click.
   * @param props Additional properties for the click event.
   */
  onClick?: (
    e?: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    props?: OnClickProps
  ) => void;

  /** An optional string that defines the ARIA role of the element. */
  role?: string;

  /** An optional number that specifies the tab order of the element. */
  tabIndex?: number;

  /** An optional string that allows adding custom CSS classes to the text. */
  textClasses?: string;
}
