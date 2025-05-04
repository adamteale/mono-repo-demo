import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AtLink, AtTag } from "../../../../atoms"; // Assuming these are already adapted to React Native
import {
  OrHeroBannerProps,
  OrHeroBannerVariant,
} from "../../or-hero-banner.types";
import { getContentClassnames, getContainerClassnames } from "./utils"; // Adapt this as well or replace logic

export type BannerContentProps = Pick<
  OrHeroBannerProps,
  | "variant"
  | "align"
  | "mobileAlign"
  | "pretitle"
  | "title"
  | "subtitle"
  | "buttons"
  | "isActive"
  | "tagLabel"
  | "showDivider"
  | "showTextBackground"
>;

const BannerContent: React.FC<BannerContentProps> = ({
  variant,
  align,
  mobileAlign,
  pretitle,
  title,
  subtitle,
  buttons,
  isActive,
  tagLabel,
  showDivider,
  showTextBackground,
}) => {
  const containerClassnames = getContainerClassnames(variant!, align!); // Consider directly using style strings
  const contentClassnames = getContentClassnames(
    variant!,
    align!,
    showTextBackground!,
    buttons!,
    mobileAlign
  ); // Consider directly using style strings

  const titleClasses = () => {
    switch (variant) {
      case OrHeroBannerVariant.CONTENT_BANNER:
        return "text-3xl font-bold";
      case OrHeroBannerVariant.IMAGE_BANNER:
        return "text-2xl font-bold text-white";
      default:
        return "text-xl font-bold";
    }
  };

  const subtitleClasses = () => {
    switch (variant) {
      case OrHeroBannerVariant.CONTENT_BANNER:
        return "text-lg text-gray-500";
      case OrHeroBannerVariant.IMAGE_BANNER:
        return "text-lg text-white";
      default:
        return "text-base";
    }
  };

  return (
    <View className={containerClassnames}>
      <View className={contentClassnames}>
        {variant === OrHeroBannerVariant.CONTENT_BANNER && tagLabel && (
          <AtTag
            className="!px-3 !py-2"
            textClassName="!text-base"
            text={tagLabel}
          />
        )}

        <View className="flex flex-col gap-6">
          {variant === OrHeroBannerVariant.CONTENT_BANNER && pretitle && (
            <Text className="mt-8 md:mt-12 xl:line-clamp-1">{pretitle}</Text>
          )}

          <Text className={titleClasses()}>{title}</Text>

          {variant === OrHeroBannerVariant.CONTENT_BANNER && showDivider && (
            <View className="w-[3.75rem] border-b-2 border-blue-950" />
          )}

          <Text className={subtitleClasses()}>{subtitle}</Text>
        </View>

        {!!buttons?.length && (
          <View
            className={`flex flex-col md:flex-row items-center md:items-start gap-4 ${
              variant === OrHeroBannerVariant.IMAGE_BANNER && showTextBackground
                ? "w-fit"
                : "w-full md:w-fit"
            }`}
          >
            {buttons.map((btn, idx) =>
              btn?.label ? (
                <AtLink
                  key={idx}
                  tabIndex={isActive ? 0 : -1}
                  textClasses="whitespace-nowrap"
                  {...btn}
                  className={
                    variant === OrHeroBannerVariant.CONTENT_BANNER
                      ? "w-full md:!w-fit"
                      : "!w-fit"
                  }
                />
              ) : null
            )}
          </View>
        )}
      </View>
    </View>
  );
};

export default BannerContent;
