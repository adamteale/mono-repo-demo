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
      style, // Capture the style prop
      className = "", //Capture className
      ...props
    },
    ref
  ) => {
    const onError = (error: NativeSyntheticEvent<ImageErrorEventData>) => {
      // Handle the error and set the onErrorSrc if provided
      if (onErrorSrc) {
        console.warn(
          "onErrorSrc is defined, but needs to be handled by the parent component."
        ); // Added console.warn
        // You would likely update the `source` in the parent component based on this error.
      }
    };

    const handleLoad = (event: NativeSyntheticEvent<any>) => {
      if (onLoad) {
        onLoad({ ...event, currentTarget: null } as unknown as SyntheticEvent<
          HTMLImageElement,
          Event
        >); // Ensure correct type
      }
    };

    return (
      <Image
        source={{ uri: src }}
        src={src}
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
