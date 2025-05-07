import React, { useState, useRef, useEffect } from "react";
import { View, Image, Pressable } from "react-native";
import { MlImageInteractiveProps } from "./ml-image-interactive.types";
import { mouseOffset, useZoomPanning } from "./utils"; // Adapt these utility functions
import { AtImage, ControlIcon } from "../../atoms"; // Adapt these components

export const MlImageInteractive = ({
  dataTestId = "ml-product-image",
  image,
  imageClassName = "",
  className = "",
  ariaLabel,
}: MlImageInteractiveProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const {
    container,
    handleDesktopPointerPosition, // Adapt these
    handleHideControl, // Adapt these
    handleShowControl, // Adapt these
    handleToggleZoom, // Adapt these
    pointerPosition,
    visibleControl,
    zoomShiftX,
    zoomShiftY,
    zoomedIn,
  } = useZoomPanning();

  const onImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    if (imageRef.current) {
      // React Native Image doesn't have `complete` property. Check if image has loaded.
      if (imageLoaded) {
        onImageLoad();
      }
    }
  }, [imageLoaded]);

  return (
    <Pressable
      testID={dataTestId}
      //ref={container} // No direct ref in React Native, see Adapt container
      accessible={true}
      accessibilityLabel={ariaLabel ?? image?.alt}
      className={`overflow-hidden  ${className}`} // xl:hover:cursor-none won't work
      //onPointerMove={handleDesktopPointerPosition}  // Adapt for touch devices or gesture handlers
      onPress={() => handleToggleZoom}
      //onPointerEnter={handleShowControl}   // Adapt these
      //onPointerLeave={handleHideControl}   // Adapt these
    >
      {visibleControl && (
        <ControlIcon
          // The style tag should also be converted to classNames
          style={{
            top: pointerPosition.y - mouseOffset,
            left: pointerPosition.x - mouseOffset,
          }}
          icon={zoomedIn ? "less" : "plus"}
          className="absolute z-10 pointer-events-none shadow-md" // hidden xl:block removed
        />
      )}
      <AtImage
        style={{
          scale: zoomedIn ? "2" : undefined,
          translate: zoomedIn ? `${zoomShiftX} ${zoomShiftY}` : undefined,
        }}
        src={image?.src || ""}
        onErrorSrc={image?.onErrorSrc}
        alt={image?.alt || ""}
        className={`object-cover w-full h-full ${imageClassName} transition-[scale]`}
        onLoad={onImageLoad}
        imageRef={imageRef}
      />
    </Pressable>
  );
};
