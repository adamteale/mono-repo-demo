import React from "react";
import { View, Text, ScrollView } from "react-native";
import { AtIcon, AtLink } from "../../atoms"; // Assuming these are RN compatible
import { MlMedia } from "../../molecules"; // Assuming this is RN compatible
import {
  OrContentStripLayoutType,
  OrContentStripListType,
  OrContentStripProps,
} from "./or-content-strip.types";
import {
  containerClasses,
  contentClasses,
  linkClasses,
  sectionClasses,
} from "./or-content-strip.variants"; // Adapt these to return Tailwind strings

export const OrContentStrip: React.FC<OrContentStripProps> = ({
  className = "",
  bodyContainerClassName = "",
  dataTestId = "",
  align,
  title,
  subtitle,
  paragraph,
  firstItem,
  secondItem,
  thirdItem,
  link,
  image,
  backgroundColor,
  listType,
  layoutType = OrContentStripLayoutType.CONTAINED,
}) => {
  const sectionStyle = sectionClasses({ backgroundColor });
  const containerStyle = containerClasses({ layoutType, align });
  const contentStyle = contentClasses({
    hasTitleOrSubtitleOrParagraph: !!(title || subtitle || paragraph),
    hasItems: !!(firstItem || secondItem || thirdItem),
  });
  const linkStyle = linkClasses({
    hasTitleOrSubtitleOrParagraph: !!(title || subtitle || paragraph),
    hasItems: !!(firstItem || secondItem || thirdItem),
  });

  return (
    <View className={`${sectionStyle} ${className}`} testID={dataTestId}>
      <View className={containerStyle} testID="or-content-strip-container">
        <View
          className="w-full h-[20.75rem] md:h-[33.25rem] xl:w-[50%] xl:h-[47.375rem]"
          testID="or-content-strip-image-container"
        >
          {image && <MlMedia {...image} />}
        </View>

        <View
          className={`flex flex-col w-full items-start justify-center px-6 py-16 text-primary sm:px-8 md:px-16 md:py-20
          xl:w-[50%] xl:h-[47.375rem] xl:py-16 xl:px-24 ${bodyContainerClassName}`}
          testID="or-content-strip-body-container"
        >
          <View className={contentStyle} testID="or-content-strip-content">
            <View className="flex flex-col gap-y-6 break-normal">
              {title && (
                <Text className="text-xl font-bold leading-10 tracking-[0.04px] md:text-2xl">
                  {title}
                </Text>
              )}
              {subtitle && (
                <Text className="text-lgx font-bold leading-7 tracking-[0.04px] md:text-xl">
                  {subtitle}
                </Text>
              )}
              {paragraph && (
                <Text className="text-lg leading-6 tracking-[0.04px]">
                  {paragraph}
                </Text>
              )}
            </View>
            <View className="list-none flex flex-col gap-y-8 break-normal">
              {[firstItem, secondItem, thirdItem]
                .filter(Boolean)
                .map((item, index) => {
                  let iconType = "";
                  if (listType === OrContentStripListType.BULLET) {
                    iconType = "bullet";
                  } else if (listType === OrContentStripListType.CHECK) {
                    iconType = "check";
                  } else {
                    iconType = "number";
                  }
                  return (
                    <View
                      key={`item-index-${index}`}
                      className="flex flex-row items-start"
                    >
                      {listType === OrContentStripListType.BULLET && (
                        <Text className="mr-2.5">•</Text>
                      )}
                      {listType === OrContentStripListType.CHECK && (
                        <View>
                          <AtIcon className="mr-2.5" type="check" />
                        </View>
                      )}
                      {listType === OrContentStripListType.NUMBER && (
                        <Text className="mr-2.5">{index + 1}.</Text>
                      )}
                      <Text className="text-lg leading-6 tracking-[0.04px]">
                        {item}
                      </Text>
                    </View>
                  );
                })}
            </View>
            {link?.label && (
              <View className="w-fit">
                <AtLink
                  className={linkStyle}
                  iconProps={{ type: "arrow-right" }}
                  {...link}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};
