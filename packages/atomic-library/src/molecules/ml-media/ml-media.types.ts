import { AtImageProps } from '../../atoms'

export enum MlMediaFit {
  COVER = 'cover',
  CONTAIN = 'contain',
}

export enum ImageFormat {
  JPG = 'jpg',
  PNG = 'png',
  WEBP = 'webp',
  GIF = 'gif',
  AVIF = 'avif',
  TIFF = 'tiff',
}

export interface MlMediaProps {
  /** An optional boolean that determines whether the image should be used as a background. */
  asBackground?: boolean

  /** An optional string used for testing purposes to identify the component in the DOM. */
  dataTestId?: string

  /** An optional property of type `MlMediaFit` that specifies how the image should fit within its container, either 'cover' or 'contain'. */
  fit?: MlMediaFit

  /** A required object of type `AtImageProps` that contains the source and alt text for the desktop image. */
  imageDesktop: AtImageProps

  /** An optional object of type `AtImageProps` that contains the source and alt text for the mobile image. */
  imageMobile?: AtImageProps

  /** An optional object of type `AtImageProps` that contains the source and alt text for the tablet image. */
  imageTablet?: AtImageProps

  /** An optional string that specifies a fallback image source if the original image fails to load. */
  onErrorSrc?: string

  /** An optional string to apply custom CSS classes to the wrapper element of the component. */
  wrapperClassName?: string

  /** An optional string to select image format */
  imageFormat?: ImageFormat
}
