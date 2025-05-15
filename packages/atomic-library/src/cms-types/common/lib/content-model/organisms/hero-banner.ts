import { CMSImage, CMSLink } from "../common";
import { CMSMedia } from "../molecules";

export interface CMSHeroBanner {
  align?: "left" | "right";
  authorName?: string;
  authorPicture?: CMSImage;
  authorSectionTextColor?: "primary" | "secondary";
  buttons?: CMSLink[];
  contentTypeId?: string;
  image?: CMSMedia;
  layoutType: "contained" | "fluid";
  mobileAlign?: "top" | "center";
  pretitle?: string;
  publicationDate?: string;
  showDivider?: boolean;
  showTextBackground?: boolean;
  subtitle?: string;
  tagLabel?: string;
  fadeInContent?: boolean;
  theme?: string;
  title: string;
  variant: "contentBanner" | "imageBanner";
}
