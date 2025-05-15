import { AtImageProps } from "../../atoms";
import { AtLinkProps } from "../../atoms/at-link";
import { MlMediaProps } from "../../molecules";

export enum OrHeroBannerLayoutType {
  /** The banner on its Image Banner variant will be displayed within a container, meaning it will have horizontal margins that adjust based on the breakpoint */
  CONTAINED = "contained",
  /** The component on its Image Banner variant will be full-width, meaning it will occupy 100% of the page width */
  FLUID = "fluid",
}

export enum OrHeroBannerContentAlignment {
  /** The Hero Banner will have its content and text aligned in the center of the component */
  CENTER = "center",

  /** The Hero Banner will have its content and text aligned to the left of the component */
  LEFT = "left",

  /** The Hero Banner will have its content and text aligned to the right of the component */
  RIGHT = "right",
}

export enum OrHeroBannerContentAlignmentMobile {
  /** The Hero Banner will have its content and text aligned to the top of the component */
  TOP = "top",
  /** The Hero Banner will have its content and text aligned to the center of the component */
  CENTER = "center",
}

export enum OrHeroBannerVariant {
  /** A Hero Banner with content and image distributed on each half of the component . */
  CONTENT_BANNER = "contentBanner",

  /** A Hero Banner with an image covering all the component as background. */
  IMAGE_BANNER = "imageBanner",
}

export enum OrHeroBannerAuthorTextColor {
  /** Dark text color. Useful for light images. */
  PRIMARY = "primary",

  /** Light text color. Useful for dark images. */
  SECONDARY = "secondary",
}

export interface MlBlogCategoryProps {
  name: string;
}

export interface OrHeroBannerAuthor {
  /** The publication date of the banner, typically displayed to show when the content was published. */
  publicationDate?: string;

  /** Indicates if the author's text should be displayed in a light color, useful for dark backgrounds. */
  authorTextColor?: OrHeroBannerAuthorTextColor;

  /** The name of the author, displayed to credit the content creator. */
  authorName?: string;

  /** The picture URL of the author, usually displayed as an avatar or profile image. */
  authorPicture?: AtImageProps;
}

export interface OrHeroBannerProps {
  /** Defines the layout type of the banner, either contained or fluid. This property only applies to Image Banner variant */
  layoutType?: OrHeroBannerLayoutType;

  /** Allows you to modify the content alignment. */
  align?: OrHeroBannerContentAlignment;

  /** Allows you to modify the content alignment in mobile view. */
  mobileAlign?: OrHeroBannerContentAlignmentMobile;

  /** Information about the author of the banner. */
  author?: OrHeroBannerAuthor;

  /** List of links with button-like appearance to allow interactivity. */
  buttons?: AtLinkProps[];

  /** Allows for customized classes. */
  className?: string;

  /** Allows to identify the component in unit tests. */
  dataTestId?: string;

  /** Allows you to modify whether the image uses the entire background or is located at one side. */
  variant?: OrHeroBannerVariant;

  /** The main image of the banner. */
  image: MlMediaProps;

  isActive?: boolean;

  /** Allows you to identify if the banner is in a slider. */
  isInSlider?: boolean;

  /** A short piece of text displayed above the main title, often used for categorization. */
  pretitle?: string;

  /** The subtitle of the banner. */
  subtitle?: string;

  /** A label or tag associated with the banner, often used for categorization or emphasis.  */
  tagLabel?: string;

  /** The main title of the banner. */
  title: string;

  /** URL the user is redirected to upon clicking. */
  link?: AtLinkProps;

  /** Boolean to show the divider underneath the title. */
  showDivider?: boolean;

  /** Enables a dark background for the content when set to 'true' for imageBanner variant, enhancing readability against the image. */
  showTextBackground?: boolean;

  containerWidth?: number;

  fadeInContent?: boolean;
}
