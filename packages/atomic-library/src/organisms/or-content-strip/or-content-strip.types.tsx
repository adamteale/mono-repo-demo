import { AtLinkProps } from "../../atoms";
import { MlMediaProps } from "../../molecules";

export enum OrContentStripListType {
  BULLET = "bullet",
  CHECK = "check",
  NUMBER = "number",
}

export enum OrContentStripBackgroundColor {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export enum OrContentStripTextAlignment {
  LEFT = "left",
  RIGHT = "right",
}

export enum OrContentStripLayoutType {
  /** The banner on its Image Banner variant will be displayed within a container, meaning it will have horizontal margins that adjust based on the breakpoint */
  CONTAINED = "contained",
  /** The component on its Image Banner variant will be full-width, meaning it will occupy 100% of the page width */
  FLUID = "fluid",
}
export interface OrContentStripProps {
  /** Defines the layout type of the banner, either contained or fluid. This property only applies to Image Banner variant */
  layoutType?: OrContentStripLayoutType;

  /** Allows for applying custom CSS classes to the component. */
  className?: string;

  /** Allows for applying custom CSS classes to the text container of the component */
  bodyContainerClassName?: string;

  /** Allows for assigning a `data-testid` attribute for easier selection in tests. */
  dataTestId?: string;

  /** Controls the alignment of the text content relative to the image. Can be `left` or `right`. */
  align?: OrContentStripTextAlignment;

  /** The main title text displayed in the content strip. */
  title?: string;

  /** The subtitle text displayed below the main title. */
  subtitle?: string;

  /** A paragraph of text that provides additional information.*/
  paragraph?: string;

  /** The first item to be listed in the content strip. Each item is an object containing text. */
  firstItem?: string;

  /** The second item to be listed in the content strip. Each item is an object containing text. */
  secondItem?: string;

  /** The third item to be listed in the content strip. Each item is an object containing text. */
  thirdItem?: string;

  /** An object representing a link, with properties for `href` and `label`. */
  link?: AtLinkProps;

  /** An object for responsive images, with separate sources for desktop and mobile views. */
  image?: MlMediaProps;

  /** Sets the background color of the content strip. Options include `primary` and `secondary`. */
  backgroundColor?: OrContentStripBackgroundColor;

  /** Defines the style of the list items. Can be `bullet`, `check`, or `number`. */
  listType?: OrContentStripListType;
}
