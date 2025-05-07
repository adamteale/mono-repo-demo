import React from "react";
import { View, Text } from "react-native";

import {
  AtButton,
  AtButtonVariants,
  AtDivider,
  AtImage,
  AtLink,
  MlFormField,
  MlFormFieldType,
} from "@mono-repo-demo/atomic-library";
import { OrOrderDetailProps } from "./or-order-detail.types";

export const OrOrderDetail = ({
  className,
  dataTestId,
  title,
  detailItems,
  formButton,
  formCheckbox,
  onSubmit,
}: OrOrderDetailProps) => {
  return (
    <View
      className={`flex flex-col gap-6 px-4 py-6 bg-surface-primary md:px-6 md:py-8 md:gap-8 md:border md:rounded-lg md:border-secondary ${className}`}
      data-testid={dataTestId}
    >
      <Text className="text-xl text-primary font-bold">{title}</Text>
      {detailItems.map((item, idx) => (
        <View
          className="flex flex-col gap-6 md:gap-8"
          key={`item-${idx}`}
          data-testid="detail-item"
        >
          <View className="flex flex-col gap-4">
            <View className="flex flex-row justify-between">
              <Text className="text-primary font-bold">{item.title}</Text>
              <AtLink {...item.link} />
            </View>
            <View className="flex flex-row gap-4">
              {item.image && <AtImage className="h-fit" {...item.image} />}
              <View className="flex flex-col w-full gap-2">
                {item.details.map((detail) => (
                  <View
                    key={`detail-${detail.label}`}
                    className="flex flex-row items-baseline justify-between"
                  >
                    <Text className="text-catina-grey-400 font-normal w-fit">
                      {detail.label}
                    </Text>
                    {detail.value && (
                      <Text className="font-bold text-sm text-catina-grey-400 text-right">
                        {detail.value}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            </View>
          </View>
          <AtDivider className="!border-original-300" />
        </View>
      ))}
      <form
        className="flex flex-col gap-6 md:gap-8"
        onSubmit={onSubmit}
        data-testid="or-order-detail-form"
      >
        <MlFormField
          {...formCheckbox}
          className={`text-sm ${formCheckbox.className}`}
          type={MlFormFieldType.CHECKBOX}
        />
        <AtButton
          dataTestId="placeOrder"
          {...formButton}
          variant={AtButtonVariants.PRIMARY}
          // buttonType="submit"
        />
      </form>
    </View>
  );
};
