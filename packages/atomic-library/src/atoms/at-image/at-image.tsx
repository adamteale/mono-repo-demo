import React, { forwardRef, SyntheticEvent } from "react";
import {
  Image,
  ImageProps,
  NativeSyntheticEvent,
  ImageErrorEventData,
} from "react-native";
import { AtImageProps } from "./at-image.types";

// Create a type that merges the AtImageProps with the standard React Native ImageProps
type CombinedProps = AtImageProps & Omit<ImageProps, keyof AtImageProps>;

// Use forwardRef to allow access to the underlying Image element
export const AtImage = forwardRef<Image, CombinedProps>(
  (
    {
      alt,
      dataTestId = "",
      src,
      onErrorSrc,
      onLoad,
      style,
      width,
      height,
      className = "",
      ...props
    },
    ref
  ) => {
    const onError = (error: NativeSyntheticEvent<ImageErrorEventData>) => {
      if (onErrorSrc) {
        console.warn(
          "onErrorSrc is defined, but needs to be handled by the parent component."
        );
      }
    };

    const handleLoad = (event: NativeSyntheticEvent<any>) => {
      if (onLoad) {
        onLoad({ ...event, currentTarget: null } as unknown as SyntheticEvent<
          HTMLImageElement,
          Event
        >);
      }
    };
    return (
      <Image
        src={src}
        width={typeof width === "string" ? parseInt(width, 10) : width}
        height={typeof height === "string" ? parseInt(height, 10) : height}
        alt={alt}
        testID={dataTestId}
        onLoad={handleLoad}
        className={className}
        ref={ref}
        onError={onError}
      />
    );
  }
);

AtImage.displayName = "AtImage";
