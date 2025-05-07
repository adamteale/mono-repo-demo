import { useEffect, useRef, useState } from 'react'
import { MlImageInteractiveProps } from './ml-image-interactive.types'
import { mouseOffset, useZoomPanning } from './utils'
import { AtImage, ControlIcon } from '../../atoms'

export const MlImageInteractive = ({
  dataTestId = 'ml-product-image',
  image,
  imageClassName = '',
  className = '',
  ariaLabel,
}: MlImageInteractiveProps) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const [_, setImageLoaded] = useState(false)

  const {
    container,
    handleDesktopPointerPosition,
    handleHideControl,
    handleShowControl,
    handleToggleZoom,
    pointerPosition,
    visibleControl,
    zoomShiftX,
    zoomShiftY,
    zoomedIn,
  } = useZoomPanning()

  const onImageLoad = () => {
    setImageLoaded(true)
  }

  useEffect(() => {
    if (imageRef.current?.complete) {
      onImageLoad()
    }
  }, [])

  return (
    <button
      data-testid={dataTestId}
      ref={container}
      aria-label={ariaLabel ?? image.alt}
      className={`overflow-hidden xl:hover:cursor-none ${className}`}
      onPointerMove={handleDesktopPointerPosition}
      onClick={handleToggleZoom}
      onPointerEnter={handleShowControl}
      onPointerLeave={handleHideControl}
    >
      {visibleControl && (
        <ControlIcon
          style={{ top: pointerPosition.y - mouseOffset, left: pointerPosition.x - mouseOffset }}
          icon={zoomedIn ? 'less' : 'plus'}
          className="hidden xl:block fixed z-10 pointer-events-none shadow-md"
        />
      )}
      <AtImage
        style={{
          scale: zoomedIn ? '2' : undefined,
          translate: zoomedIn ? `${zoomShiftX} ${zoomShiftY}` : undefined,
        }}
        src={image?.src || ''}
        onErrorSrc={image?.onErrorSrc}
        alt={image?.alt || ''}
        className={`object-cover w-full h-full ${imageClassName} transition-[scale]`}
        onLoad={onImageLoad}
        imageRef={imageRef}
      />
    </button>
  )
}
