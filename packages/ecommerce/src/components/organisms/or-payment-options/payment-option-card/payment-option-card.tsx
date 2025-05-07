import React from "react";
import { View, Text } from "react-native";

import { AtImage, AtRadio, OrForm } from "@mono-repo-demo/atomic-library";
import { useOrForm } from "@mono-repo-demo/atomic-library";
import { PaymentOptionCardProps } from "./payment-option-card.types";
import {
  bodyWrapperClasses,
  containerClasses,
  multipleImagesWrapperClasses,
  radioWrapperClasses,
  singleImageWrapperClasses,
} from "./payment-card.variants";

export const PaymentOptionCard = ({
  formProps,
  radioProps,
  images,
  dataTestId,
}: PaymentOptionCardProps) => {
  const manager = useOrForm(formProps?.controls ?? {});

  return (
    <View
      className={containerClasses({
        checked: radioProps.checked,
        isDescriptionAbsent: !radioProps.description && radioProps.checked,
      })}
      // onClick={() => !radioProps.checked && radioProps.onChange()}
    >
      <View className="flex flex-col gap-5">
        <View
          className={radioWrapperClasses({
            descriptionChecked: !!radioProps.description && radioProps.checked,
          })}
        >
          <AtRadio {...radioProps} title={undefined} description={undefined} />
          <View
            className={bodyWrapperClasses({
              checked: radioProps.checked,
              descriptionChecked:
                !!radioProps.description && radioProps.checked,
            })}
          >
            <View className="flex flex-col w-fit gap-y-2">
              {images && images.length === 1 && (
                <View
                  className={singleImageWrapperClasses({
                    checked: radioProps.checked,
                  })}
                >
                  {images.map((imageProps, imageIdx) => (
                    <AtImage key={`image-${imageIdx}`} {...imageProps} />
                  ))}
                </View>
              )}
              {radioProps.title && (
                <Text
                  className={`text-primary order-2 text-base font-bold md:order-1 ${radioProps.titleClassName}`}
                >
                  {radioProps.title}
                </Text>
              )}
              {radioProps.description && radioProps.checked && (
                <Text className="text-neutral-500 order-3 w-fit">
                  {radioProps.description}
                </Text>
              )}
            </View>
            {images && (
              <View
                className={multipleImagesWrapperClasses({
                  checked: radioProps.checked,
                  isMultipleImages: images.length > 1,
                })}
              >
                {images.map((imageProps, imageIdx) => (
                  <AtImage key={`image-${imageIdx}`} {...imageProps} />
                ))}
              </View>
            )}
          </View>
        </View>
        {images && images.length > 1 && (
          <View className="flex md:hidden flex-row gap-2 h-fit">
            {images.map((imageProps, imageIdx) => (
              <AtImage key={`image-${imageIdx}`} {...imageProps} />
            ))}
          </View>
        )}
      </View>
      {formProps && radioProps.checked && (
        <OrForm
          {...formProps}
          manager={manager}
          id={radioProps.title}
          dataTestId={`${dataTestId}-form`}
        />
      )}
    </View>
  );
};
