import React from "react";
import { Text, TouchableOpacity } from "react-native";

import {
  OrHeroBannerProps,
  OrCarouselBannerProps,
} from "@mono-repo-demo/atomic-library";
import { normalizeMedia } from "./media";
// import Link from "next/link";
import { CMSHeroBanner, CMSCarousel } from "@mono-repo-demo/atomic-library";
import { normalizeFile } from "./file";

export const normalizeCarouselBanner = (
  banner: CMSCarousel
): OrCarouselBannerProps => {
  return {
    slides: banner.items
      ?.map((slide) => {
        if (!slide) return null;

        const {
          variant,
          authorName,
          authorPicture,
          publicationDate,
          authorSectionTextColor,
          tagLabel,
          pretitle,
          title,
          showDivider,
          subtitle,
          buttons,
          showTextBackground,
          image,
          align,
        } = slide as CMSHeroBanner;

        return {
          variant,
          authorName,
          authorPicture: authorPicture && normalizeFile(authorPicture),
          publicationDate,
          authorSectionTextColor,
          tagLabel,
          pretitle,
          title,
          showDivider,
          showTextBackground,
          subtitle,
          buttons: buttons
            ?.map((btn) => ({
              href: btn.actionUrl,
              label: btn.label,
              buttonStyleProps: { variant: btn.variant ?? "secondary" },
              // linkWrapper: Link,
            }))
            .filter(Boolean),
          image: image && normalizeMedia(image),
          align,
        };
      })
      .filter(Boolean) as OrHeroBannerProps[],
  };
};
