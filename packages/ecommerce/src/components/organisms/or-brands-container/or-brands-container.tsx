import React from "react";
import { View, Text } from "react-native";

import {
  AtButtonSize,
  AtButtonVariants,
  AtLink,
} from "@mono-repo-demo/atomic-library";
import { OrBrandsContainerProps } from "./or-brands-container.types";
import {
  brandsContainerClasses,
  containerClasses,
  headerContainerClasses,
  titleClasses,
} from "./or-brands-container.variants";

export const OrBrandsContainer = ({
  title,
  children,
  seeMoreLabel = "SEE ALL",
  linkProps = { href: "#" },
  showLink = false,
  background,
}: OrBrandsContainerProps) => {
  let backgroundClasses;

  switch (background) {
    case "primary":
      backgroundClasses = "bg-surface-primary";
      break;
    case "secondary":
      backgroundClasses = "bg-neutral-50";
      break;
    default:
      backgroundClasses = "bg-surface-primary";
      break;
  }

  return (
    <View className={`${backgroundClasses}`}>
      <View className={containerClasses({ showLink })}>
        <View
          className={headerContainerClasses({ showLink })}
          data-testid="or-brands-container-header"
        >
          <Text className={titleClasses({ showLink })}>{title}</Text>
          {showLink && (
            <View>
              <AtLink
                buttonStyleProps={{
                  variant: AtButtonVariants.TERTIARY,
                  size: AtButtonSize.LARGE,
                }}
                iconProps={{ type: "arrow-right" }}
                label={seeMoreLabel}
                textClasses="pr-1"
                {...linkProps}
              />
            </View>
          )}
        </View>

        {/* Max heights are (totalRows)*(height of MlBrand [px])+(totalRows-1)*(vertical spacing [px])*/}
        <View
          data-testid="or-brands-container-div"
          className={brandsContainerClasses({ showLink })}
        >
          {children}
        </View>
      </View>
    </View>
  );
};
