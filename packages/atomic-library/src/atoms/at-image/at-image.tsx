import { AtImageProps } from './at-image.types'

export const AtImage = ({
  alt,
  dataTestId = '',
  src,
  onErrorSrc,
  onLoad,
  imageRef,
  loading = 'lazy',
  ...props
}: AtImageProps) => {
  return (
    <img
      alt={alt}
      data-testid={dataTestId}
      src={src}
      loading={loading}
      onLoad={onLoad}
      onError={(e) => {
        if (onErrorSrc) (e.target as HTMLImageElement).src = onErrorSrc
      }}
      ref={imageRef}
      {...props}
    />
  )
}
