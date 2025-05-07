import React from "react";
import {
  MlCardBasketProps,
  OrOrderSummaryProps,
  OrPaymentOptionsProps,
  PaymentOption,
  TmPaymentOptions,
} from "@components-library/ecommerce";
import {
  PaymentMethods,
  TmPaymentOptionsWrapperProps,
} from "./tm-payment-options-wrapper.types";
import { useStepper } from "../../../context/stepper/use-stepper";
import {
  PaymentForm,
  StepperData,
} from "../tm-stepper-wrapper/tm-stepper-wrapper.types";
import { useBasket } from "../../../context/basket/use-basket";
import { useState } from "react";
import { normalizeBasketItem } from "../../../utils/normalization/basket-item";
import {
  AtImageProps,
  OrFormColumn,
  MlFormFieldType,
  OrFormState,
} from "@mono-repo-demo/atomic-library";

import {
  getCardServiceName,
  isValidCardNumber,
  isValidExpirationDate,
} from "../../../utils/payment/validations/validations";
import { getStaticPath } from "../../../utils/get-static-path";
import { getShippingPriceLabel } from "../../../utils/basket/get-shipping-price-label";

export const TmPaymentOptionsWrapper = ({
  template,
}: TmPaymentOptionsWrapperProps) => {
  const { goToNextStep, state: stepState } = useStepper<StepperData>();
  const { steps, currentStep } = stepState;
  const stepData = steps[currentStep].data as PaymentForm;

  const {
    state: basketState,
    deleteItemFromBasket,
    updateBasket,
  } = useBasket();
  const { basket, isPending } = basketState;

  const closedRadioButtonsState = {
    [PaymentMethods.CARD]: false,
    [PaymentMethods.PAYPAL]: false,
    [PaymentMethods.GOOGLE]: false,
    [PaymentMethods.APPLE]: false,
  };

  const defaultRadioButtonState = stepData.payMethodName
    ? { ...closedRadioButtonsState, [stepData.payMethodName]: true }
    : { ...closedRadioButtonsState, [PaymentMethods.CARD]: true };

  const [radioButtonsSate, setRadioButtonsSate] = useState(
    defaultRadioButtonState
  );

  const handleRadioButtonChange = (key: PaymentMethods) => {
    setRadioButtonsSate({ ...closedRadioButtonsState, [key]: true });
  };

  const handleGetPaymentMethodImages = (
    paymentMethod: PaymentMethods
  ): AtImageProps[] => {
    const imagesPath = getStaticPath("/images");
    switch (paymentMethod) {
      case PaymentMethods.CARD:
        return [
          { src: `${imagesPath}/visa.svg`, alt: "visa" },
          { src: `${imagesPath}/mastercard.svg`, alt: "mastercard" },
          { src: `${imagesPath}/amex.svg`, alt: "american express" },
          { src: `${imagesPath}/discover.svg`, alt: "discover" },
        ];
      case PaymentMethods.PAYPAL:
        return [{ src: `${imagesPath}/paypal.svg`, alt: "paypal" }];
      case PaymentMethods.GOOGLE:
        return [{ src: `${imagesPath}/google-pay.svg`, alt: "google pay" }];
      case PaymentMethods.APPLE:
        return [{ src: `${imagesPath}/apple-pay.svg`, alt: "apple pay" }];
      default:
        return [];
    }
  };

  const handleCreditDebitCardPayment = (paymentData: {
    formData?: OrFormState;
  }) => {
    const cardServiceName = getCardServiceName(
      paymentData.formData?.values.cardNumber.value as string
    );
    const paymentMethodImage =
      cardServiceName === ""
        ? undefined
        : getStaticPath(`/images/${cardServiceName}.svg`);
    goToNextStep({
      cardName: paymentData.formData?.values.nameOnCard.value,
      cardNumber: paymentData.formData?.values.cardNumber.value,
      expirationDate: paymentData.formData?.values.expirationDate.value,
      securityCode: paymentData.formData?.values.securityCode.value,
      payMethodImage: paymentMethodImage,
      payMethodName: PaymentMethods.CARD,
    } as PaymentForm);
  };

  const handlePayPalPayment = () => {
    // Change this with the paypal data
    goToNextStep({
      cardName: "JHON SMITH",
      payMethodImage: handleGetPaymentMethodImages(PaymentMethods.PAYPAL)[0]
        .src,
      payMethodName: PaymentMethods.PAYPAL,
    } as PaymentForm);
  };

  const handleGooglePayPayment = () => {
    // Change this with the google pay data
    goToNextStep({
      cardName: "JHON SMITH",
      payMethodImage: handleGetPaymentMethodImages(PaymentMethods.GOOGLE)[0]
        .src,
      payMethodName: PaymentMethods.GOOGLE,
    } as PaymentForm);
  };

  const handleApplePayPayment = () => {
    // Change this with the apple pay data
    goToNextStep({
      cardName: "JHON SMITH",
      payMethodImage: handleGetPaymentMethodImages(PaymentMethods.APPLE)[0].src,
      payMethodName: PaymentMethods.APPLE,
    } as PaymentForm);
  };

  const paymentOptions = template.paymentOptions;

  const ammountCreditNumberCharacters = 16;
  const ammountOfCreditNumberCharactersGroup = 4;
  const maxCreditNumberLength =
    ammountCreditNumberCharacters + ammountOfCreditNumberCharactersGroup - 1;

  const paymentOptionsItems: PaymentOption[] = [
    {
      radioProps: {
        title: paymentOptions?.creditDebitLabel ?? "",
        checked: radioButtonsSate[PaymentMethods.CARD],
        onChange: () => handleRadioButtonChange(PaymentMethods.CARD),
        disabled: false,
      },
      buttonProps: {
        children: paymentOptions?.creditDebitButton ?? "",
      },
      images: handleGetPaymentMethodImages(PaymentMethods.CARD),
      formProps: {
        noValidate: false,
        handleSubmit: (formData) => {
          handleCreditDebitCardPayment({ formData });
        },
        columns: OrFormColumn.TWO,
        controls: {
          cardNumber: {
            type: MlFormFieldType.PASSWORD,
            required: true,
            isCreditCard: true,
            maxLength: maxCreditNumberLength,
            value: stepData.cardNumber,
            label: paymentOptions?.cardNumberInputLabel ?? "",
            placeholder: paymentOptions?.cardNumberInputPlaceholder ?? "",
            errorText: paymentOptions?.cardNumberInputErrorText ?? "",
            validator: isValidCardNumber,
            columnClass:
              "sm:col-span-2 md:col-span-1 xl:col-span-2 2xl:col-span-1",
          },
          nameOnCard: {
            type: MlFormFieldType.PASSWORD,
            required: true,
            value: stepData.cardName,
            label: paymentOptions?.nameOnCardInputLabel ?? "",
            placeholder: paymentOptions?.nameOnCardInputPlaceholder ?? "",
            errorText: paymentOptions?.nameOnCardInputErrorText ?? "",
            columnClass:
              "sm:col-span-2 md:col-span-1 xl:col-span-2 2xl:col-span-1",
          },
          expirationDate: {
            type: MlFormFieldType.PASSWORD,
            required: true,
            isExpirationDate: true,
            maxLength: 5,
            value: stepData.expirationDate,
            label: paymentOptions?.expirationDateInputLabel ?? "",
            placeholder: paymentOptions?.expirationDateInputPlaceholder ?? "",
            errorText: paymentOptions?.expirationDateInputErrorText ?? "",
            validator: isValidExpirationDate,
            columnClass: "sm:col-span-2 md:col-span-1",
          },
          securityCode: {
            type: MlFormFieldType.PASSWORD,
            required: true,
            maxLength: 3,
            value: stepData.securityCode,
            insideIcon: { type: "cvv" },
            isCvv: true,
            validator: new RegExp("^\\d{3}$"),
            label: paymentOptions?.securityCodeInputLabel ?? "",
            placeholder: paymentOptions?.securityCodeInputPlaceholder ?? "",
            errorText: paymentOptions?.securityCodeInputErrorText ?? "",
            columnClass: "sm:col-span-2 md:col-span-1",
          },
        },
      },
    },
    {
      radioProps: {
        title: paymentOptions?.paypalLabel ?? "",
        description: paymentOptions?.paypalDescription,
        checked: radioButtonsSate[PaymentMethods.PAYPAL],
        onChange: () => handleRadioButtonChange(PaymentMethods.PAYPAL),
        disabled: false,
      },
      buttonProps: {
        children: paymentOptions?.paypalButton ?? "",
        onClick: handlePayPalPayment,
      },
      images: handleGetPaymentMethodImages(PaymentMethods.PAYPAL),
    },
    {
      radioProps: {
        title: paymentOptions?.googleLabel ?? "",
        description: paymentOptions?.googleDescription,
        checked: radioButtonsSate[PaymentMethods.GOOGLE],
        onChange: () => handleRadioButtonChange(PaymentMethods.GOOGLE),
        disabled: false,
      },
      buttonProps: {
        children: paymentOptions?.googleButton ?? "",
        onClick: handleGooglePayPayment,
      },
      images: handleGetPaymentMethodImages(PaymentMethods.GOOGLE),
    },
    {
      radioProps: {
        title: paymentOptions?.appleLabel ?? "",
        description: paymentOptions?.appleDescription,
        checked: radioButtonsSate[PaymentMethods.APPLE],
        onChange: () => handleRadioButtonChange(PaymentMethods.APPLE),
        disabled: false,
      },
      buttonProps: {
        children: paymentOptions?.appleButton ?? "",
        onClick: handleApplePayPayment,
      },
      images: handleGetPaymentMethodImages(PaymentMethods.APPLE),
    },
  ];

  const paymenOptionsProps: OrPaymentOptionsProps = {
    title: template.paymentOptionsTitle ?? "Payment Options",
    paymentOptions: paymentOptionsItems ?? [],
  };

  const basketItems: MlCardBasketProps[] = [];

  const orderSummaryProps: OrOrderSummaryProps = {
    orderLabelArray: [
      // {
      //   label: template.orderSummaryInfo?.subtotalLabel ?? "Subtotal",
      //   value: basket?.totalPrice?.formatted ?? "$0.00",
      //   tooltipContent: template.orderSummaryInfo?.subtotalTooltipContent,
      // },
      // {
      //   label: template.orderSummaryInfo?.discountsLabel ?? "Discounts",
      //   value:
      //     "$" +
      //     (
      //       basket?.items?.reduce((acc, item) => {
      //         if (item.totalOriginalPrice) {
      //           acc += item.totalOriginalPrice.amount - item.totalPrice.amount;
      //         }
      //         return acc;
      //       }, 0) ?? 0
      //     ).toFixed(2),
      //   tooltipContent: template.orderSummaryInfo?.discountsTooltipContent,
      //   valueIndicatorColor: "positive",
      // },
      // {
      //   label: template.orderSummaryInfo?.taxesLabel ?? "Taxes",
      //   value: "$0.00",
      //   tooltipContent: template.orderSummaryInfo?.taxesTooltipContent,
      // },
      // {
      //   label: template.orderSummaryInfo?.shippingLabel ?? "Shipping",
      //   value: getShippingPriceLabel(basketState, template),
      //   tooltipContent: template.orderSummaryInfo?.shippingTooltipContent,
      // },
    ],
    withCart: true,
    items: basketItems,
    // totalPrice: basket?.totalPrice?.formatted || "0.00",
    // totalItems: basket?.totalItems,
    totalPrice: "0.00",
    totalItems: 0,
    ...template.orderSummaryLabels,
  };

  const copyright =
    template.copyrightText ??
    "Copyright © 2023. Apply Digital. Tech Accelerator. All rights reserved.";

  return (
    <TmPaymentOptions
      paymentOptionsProps={paymenOptionsProps}
      orderSummaryProps={orderSummaryProps}
      copyright={copyright}
    />
  );
};
