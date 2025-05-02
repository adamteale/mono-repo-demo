import React, { useEffect, useState } from "react";
import { View, Image, Platform } from "react-native"; // React Native Image component
import { AtImage } from "../../atoms"; // Ensure this is RN compatible
import { ImageFormat, MlMediaFit, MlMediaProps } from "./ml-media.types";
import { useIsMobile, useIsTablet } from "../../utils"; // Adapt these to React Native if needed or replace with Platform API
import { backgroundImageClasses, imageClasses } from "./ml-media.variants"; // Adapt these to return Tailwind strings
import { transformImageFormat } from "./transform-image-format"; // This might need adaptation

export const MlMedia: React.FC<MlMediaProps> = ({
  dataTestId = "ml-media",
  imageDesktop,
  imageTablet,
  imageMobile,
  onErrorSrc,
  wrapperClassName = "",
  fit = MlMediaFit.COVER,
  asBackground = false,
  imageFormat = Platform.OS === "web" ? ImageFormat.WEBP : ImageFormat.JPG,
}) => {
  const [image, setImage] = useState({
    src: imageDesktop.src,
    alt: imageDesktop.alt ?? "",
  });
  const isMobile = useIsMobile(); // Replace with RN specific method if needed
  const isTablet = useIsTablet(); // Replace with RN specific method if needed

  useEffect(() => {
    let selectedImage = imageDesktop;

    if (isMobile && imageMobile?.src) {
      selectedImage = imageMobile;
    } else if (isTablet && imageTablet?.src) {
      selectedImage = imageTablet;
    }

    if (selectedImage.src !== image.src) {
      setImage({
        src: selectedImage.src,
        alt: selectedImage.alt ?? "",
      });
    }
  }, [
    isMobile,
    isTablet,
    image.src,
    image.alt,
    imageDesktop,
    imageMobile,
    imageTablet,
  ]); //Added imageDesktop, imageMobile, imageTablet to the dependency array

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
