import React from "react";

import { View } from "react-native";

import { BannerImage, BannerSplitImage } from "./components";
import {
  OrHeroBannerContentAlignment,
  OrHeroBannerLayoutType,
  OrHeroBannerProps,
  OrHeroBannerVariant,
} from "./or-hero-banner.types";
import { heroBannerContainerClasses } from "./or-hero-banner.variants";
import BannerContent from "./components/BannerContent/BannerContent";

export const OrHeroBanner: React.FC<OrHeroBannerProps> = ({
  align = OrHeroBannerContentAlignment.LEFT,
  mobileAlign,
  author,
  buttons,
  className = "",
  dataTestId,
  variant = OrHeroBannerVariant.CONTENT_BANNER,
  image,
  isActive,
  pretitle,
  subtitle,
  title,
  showDivider = true,
  tagLabel,
  fadeInContent,
  showTextBackground = false,
  layoutType = OrHeroBannerLayoutType.FLUID,
}) => {
  const containerClasses = heroBannerContainerClasses({
    variant,
    contentAlignment: align,
    layoutType: layoutType,
  });
  return (
    <View
      role="region"
      testID={dataTestId}
      className={`${containerClasses} ${className}`}
    >
      <BannerImage variant={variant} image={image} />
      <BannerContent
        {...{
          tagLabel,
          variant,
          align,
          mobileAlign,
          pretitle,
          title,
          subtitle,
          buttons,
          isActive,
          showDivider,
          showTextBackground,
          fadeInContent,
        }}
      />
      {variant === OrHeroBannerVariant.CONTENT_BANNER && (
        <BannerSplitImage {...{ image, author }} />
      )}
    </View>
  );
};
