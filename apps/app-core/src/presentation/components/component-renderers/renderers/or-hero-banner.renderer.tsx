import React from "react";
import { View } from "react-native";

import {
  AtButtonVariants,
  OrHeroBanner,
  OrHeroBannerAuthor,
  OrHeroBannerProps,
} from "@mono-repo-demo/atomic-library";
import { OrHeroBannerRendererProps } from "../renderer.types";
import { normalizeMedia } from "../../normalization/media";
import { normalizeFile } from "../../normalization/file";
import { CMSLink } from "@mono-repo-demo/atomic-library";
// import Link from "next/link";

export const OrHeroBannerRenderer = ({
  block,
  className,
}: OrHeroBannerRendererProps) => {
  if (!block.image) return null;
  const {
    align,
    authorName,
    authorPicture,
    authorSectionTextColor,
    buttons,
    image,
    layoutType,
    mobileAlign,
    pretitle,
    publicationDate,
    showDivider,
    showTextBackground,
    subtitle,
    tagLabel,
    fadeInContent,
    theme,
    title,
    variant,
  } = block;

  const distribution = align as OrHeroBannerProps["align"];
  const mobileDistribution = mobileAlign as OrHeroBannerProps["mobileAlign"];
  const blogAuthorTextColor =
    authorSectionTextColor as OrHeroBannerAuthor["authorTextColor"];
  const bannerVariant = variant as OrHeroBannerProps["variant"];
  const widthMode = layoutType as OrHeroBannerProps["layoutType"];

  const normalizedButtons = buttons?.map((item: CMSLink) => ({
    href: item?.actionUrl,
    // linkWrapper: Link,
    label: item?.label,
    ...(item?.variant &&
      item.variant !== "default" && {
        buttonStyleProps: {
          variant: (item?.variant ??
            AtButtonVariants.PRIMARY) as AtButtonVariants,
        },
      }),
  }));

  return (
    <View className="w-screen max-w-[1440px]">
      <OrHeroBanner
        variant={bannerVariant}
        layoutType={widthMode}
        author={{
          authorName: authorName,
          authorPicture: authorPicture
            ? normalizeFile(authorPicture)
            : undefined,
          authorTextColor: blogAuthorTextColor,
          publicationDate: publicationDate,
        }}
        pretitle={pretitle}
        title={title}
        subtitle={subtitle}
        image={normalizeMedia(image)}
        buttons={normalizedButtons}
        showTextBackground={showTextBackground}
        align={distribution}
        mobileAlign={mobileDistribution}
        showDivider={showDivider}
        tagLabel={tagLabel}
        className={className}
        fadeInContent={fadeInContent}
      />
    </View>
  );
};
