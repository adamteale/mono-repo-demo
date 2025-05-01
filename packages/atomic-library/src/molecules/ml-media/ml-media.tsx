import { useEffect, useState } from 'react'
import { AtImage } from '../../atoms'
import { ImageFormat, MlMediaFit, MlMediaProps } from './ml-media.types'
import { useIsMobile, useIsTablet } from '../../utils'
import { backgroundImageClasses, imageClasses } from './ml-media.variants'
import { transformImageFormat } from './transform-image-format'

export const MlMedia = ({
  dataTestId = 'ml-media',
  imageDesktop,
  imageTablet,
  imageMobile,
  onErrorSrc,
  wrapperClassName = '',
  fit = MlMediaFit.COVER,
  asBackground = false,
  imageFormat = ImageFormat.WEBP,
}: MlMediaProps) => {
  const [image, setImage] = useState({
    src: imageDesktop.src,
    alt: imageDesktop.alt ?? '',
  })
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()

  useEffect(() => {
    let selectedImage = imageDesktop

    if (isMobile && imageMobile?.src) {
      selectedImage = imageMobile
    } else if (isTablet && imageTablet?.src) {
      selectedImage = imageTablet
    }

    if (selectedImage.src !== image.src) {
      setImage({
        src: selectedImage.src,
        alt: selectedImage.alt ?? '',
      })
    }
  }, [isMobile, isTablet])

  if (asBackground) {
    return (
      <div data-testid={dataTestId} className={`w-full h-full ${wrapperClassName}`}>
        <div
          style={{ backgroundImage: `url(${transformImageFormat(image.src, imageFormat)})` }}
          className={backgroundImageClasses({ fit })}
          data-testid={`${dataTestId}-bg-image`}
        ></div>
      </div>
    )
  }

  return (
    <div data-testid={dataTestId} className={`w-full h-full ${wrapperClassName}`}>
      <AtImage
        className={imageClasses({ fit })}
        src={transformImageFormat(image.src, imageFormat)}
        alt={image.alt}
        onErrorSrc={onErrorSrc}
        dataTestId={`${dataTestId}-at-image`}
      />
    </div>
  )
}
