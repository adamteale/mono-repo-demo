import { AtImageProps } from "../../atoms";

export interface MlImageInteractiveProps {
  /** An optional string that provides an accessible label for the image, improving screen reader support. */
  ariaLabel?: string;

  /** An optional string to apply custom CSS classes to the component, allowing for additional styling. */
  className?: string;

  /** An optional string used as a test identifier, facilitating easier selection in automated tests. */
  dataTestId?: string;

  /** An object of type `AtImageProps` that contains the source and alternative text for the image, ensuring the image is displayed correctly and is accessible. */
  image: AtImageProps;

  /** An optional string to apply custom CSS classes specifically to the image element, providing further styling flexibility. */
  imageClassName?: string;
}
