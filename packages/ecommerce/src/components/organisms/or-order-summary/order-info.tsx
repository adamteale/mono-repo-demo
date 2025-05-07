import React from "react";
import { View, Text } from "react-native";

import { AtIcon, AtTooltip } from "@mono-repo-demo/atomic-library";

interface OrderInfoProps {
  title?: string;
  tooltipContent?: string;
  value?: string;
  valueIndicatorColor?: "positive" | "negative" | "neutral";
}

const colorMap = {
  positive: "text-feedback-success",
  negative: "text-feedback-error",
  neutral: "text-primary",
};

export const OrderInfo = ({
  title,
  tooltipContent,
  value,
  valueIndicatorColor = "neutral",
}: OrderInfoProps) => {
  if (!title) return null;

  const labelColor = colorMap[valueIndicatorColor];

  const listItemId = `order-info-${title}`;

  return (
    <li
      className="flex justify-between items-center"
      key={listItemId}
      id={listItemId}
    >
      <View className="flex justify-center items-center">
        <Text className="text-lg leading-6 text-primary font-normal">
          {title}
        </Text>
        {tooltipContent && (
          <AtTooltip
            content={tooltipContent}
            id={`order-info-tooltip-${title}`}
            ariaDescribedBy={listItemId}
          >
            <AtIcon
              className="ml-2 h-5 w-5"
              type="question-mark"
              color="primary"
            />
          </AtTooltip>
        )}
      </View>
      <Text className={`text-lg leading-6 font-normal ${labelColor}`}>
        {value}
      </Text>
    </li>
  );
};
