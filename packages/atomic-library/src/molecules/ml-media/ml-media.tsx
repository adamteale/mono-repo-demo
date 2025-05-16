import React, { SyntheticEvent, useEffect, useState } from "react";
import { View, Image, Platform, NativeSyntheticEvent } from "react-native";

import { AtImage } from "../../atoms";
import { ImageFormat, MlMediaFit, MlMediaProps } from "./ml-media.types";
import { useIsMobile, useIsTablet } from "../../utils";
import { backgroundImageClasses, imageClasses } from "./ml-media.variants";
import { transformImageFormat } from "./transform-image-format";

export const MlMedia: React.FC<MlMediaProps> = ({
  dataTestId = "ml-media",
  imageDesktop,
  imageTablet,
  imageMobile,
  onErrorSrc,
  wrapperClassName = "",
  fit = MlMediaFit.COVER,
  asBackground = false,
  imageFormat = ImageFormat.WEBP,
}) => {
  const [image, setImage] = useState({
    src: imageDesktop.src,
    alt: imageDesktop.alt ?? "",
  });
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  // useEffect(() => {
  //   let selectedImage = imageDesktop;

  //   if (isMobile && imageMobile?.src) {
  //     selectedImage = imageMobile;
  //   } else if (isTablet && imageTablet?.src) {
  //     selectedImage = imageTablet;
  //   }

  //   if (selectedImage.src !== image.src) {
  //     setImage({
  //       src: selectedImage.src,
  //       alt: selectedImage.alt ?? "",
  //     });
  //   }
  // }, [
  //   isMobile,
  //   isTablet,
  //   image.src,
  //   image.alt,
  //   imageDesktop,
  //   imageMobile,
  //   imageTablet,
  // ]);

  if (asBackground) {
    return (
      <View testID={dataTestId} className={`w-full h-full ${wrapperClassName}`}>
        <Image
          source={{ uri: transformImageFormat(image.src, imageFormat) }}
          style={{ resizeMode: fit }} //Use inline styles for the resizemode.
          className={backgroundImageClasses({ fit })}
          testID={`${dataTestId}-bg-image`}
        />
      </View>
    );
  }

  return (
    <View testID={dataTestId} className={`w-full h-full ${wrapperClassName}`}>
      <AtImage
        className={imageClasses({ fit })}
        src={transformImageFormat(image.src, imageFormat)}
        alt={image.alt}
        onErrorSrc={onErrorSrc}
        testID={`${dataTestId}-at-image`}
      />
    </View>
  );
};
