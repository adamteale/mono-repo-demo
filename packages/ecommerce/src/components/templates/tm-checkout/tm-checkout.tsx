import React from "react";
import { View, Text } from "react-native";

import { AtDivider } from "@mono-repo-demo/atomic-library";
import { OrOrderSummary, OrOrderSummaryProps } from "../../organisms";

export interface TmCheckoutProps {
  orderSummaryProps: OrOrderSummaryProps;
  copyright: string;
  children: React.ReactNode;
}

export const TmCheckout = ({
  orderSummaryProps,
  children,
  copyright,
}: TmCheckoutProps) => {
  return (
    <View
      className="flex flex-col gap-8 md:gap-10 xl:gap-12"
      data-testid="tm-checkout"
    >
      <View className="flex flex-col xl:grid xl:grid-cols-2 gap-8 md:gap-10 xl:gap-12">
        <OrOrderSummary
          {...orderSummaryProps}
          dataTestId="or-order-summary"
          className="order-1 xl:order-2 w-full xl:max-w-126 3xl:max-w-122"
        />
        {children}
      </View>
      <View className="text-center">
        <AtDivider className="mb-1" />
        <Text data-testid={"copyright"} className="text-xxs text-tertiary">
          {copyright}
        </Text>
      </View>
    </View>
  );
};
