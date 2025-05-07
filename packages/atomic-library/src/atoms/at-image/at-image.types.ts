import { ImgHTMLAttributes } from "react";

export interface AtImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** An optional string that provides alternative text for the image, improving accessibility for screen readers. */
  alt?: string;

  /** An optional string used for testing purposes to uniquely identify the image element in the DOM. */
  dataTestId?: string;

  /** An optional reference object that can be used to access the image element and its properties, such as width, height, etc. */
  imageRef?: React.RefObject<HTMLImageElement | null>;

  /** An optional string that specifies the URL of the fallback image to be displayed in case the primary image fails to load. */
  onErrorSrc?: string;

  /** A required string that specifies the URL of the image to be displayed. */
  src: string;
}
