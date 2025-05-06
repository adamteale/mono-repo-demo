import {
  MlCardBasketProps,
  OrOrderDetailProps,
  OrOrderSummaryProps,
  TmOrderDetail,
} from "@components-library/ecommerce";
import { FormEvent, useState } from "react";
import { useBasket } from "../../../context/basket/use-basket";
import { useStepper } from "../../../context/stepper/use-stepper";
import { TmOrderDetailPropsWrapper } from "./tm-order-detail-wrapper.types";
import { normalizeBasketItem } from "../../../utils/normalization/basket-item";
import {
  PaymentForm,
  ShippingInfoForm,
  StepperData,
} from "../tm-stepper-wrapper/tm-stepper-wrapper.types";
import { useRouter } from "next/router";
import { MlFormFieldType } from "@mono-repo-demo/atomic-library";
import { getShippingPriceLabel } from "../../../utils/basket/get-shipping-price-label";

export const TmOrderDetailWrapper = ({
  template,
}: TmOrderDetailPropsWrapper) => {
  const { setStep, state: stepState } = useStepper<StepperData>();
  const {
    state: basketState,
    deleteItemFromBasket,
    updateBasket,
    setBasketOrder,
  } = useBasket();
  const [checkboxActive, setCheckboxActive] = useState(false);

  const router = useRouter();

  const { steps } = stepState;
  const { basket, isPending } = basketState;

  const shippingStepIndex = steps.findIndex(
    (step) => step.label.trim().toLowerCase() === "shipping"
  );
  const paymentStepIndex = steps.findIndex(
    (step) => step.label.trim().toLowerCase() === "payment"
  );

  let shippingStepData: ShippingInfoForm = {};
  let paymentStepData: PaymentForm = {};

  if (shippingStepIndex > -1) {
    shippingStepData = steps[shippingStepIndex].data as ShippingInfoForm;
  }

  if (paymentStepIndex > -1) {
    paymentStepData = steps[paymentStepIndex].data as PaymentForm;
  }

  const handleNavigateToShipping = () =>
    setStep(shippingStepIndex, shippingStepData);
  const handleNavigateToPayment = () =>
    setStep(paymentStepIndex, paymentStepData);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await setBasketOrder({});
    router.push("/checkout-completed");
  };

  const handleHideEmail = (email?: string, uncensoredCharacters = 4) => {
    if (!email) return;

    const domainIndex = email.indexOf("@");

    if (domainIndex === -1) return email;

    const userName = email.substring(0, domainIndex);
    const domain = email.substring(domainIndex);

    const uncensoredAmmount = Math.min(uncensoredCharacters, userName.length);
    const censoredUserName =
      userName.substring(0, uncensoredAmmount) +
      "*".repeat(userName.length - uncensoredAmmount);

    return censoredUserName + domain;
  };

  const handleHideCardNumber = (
    cardNumber?: string | number,
    uncensoredCharacter = 4
  ) => {
    if (!cardNumber) return;

    const parsedCardNumber = String(cardNumber);
    return (
      "*".repeat(parsedCardNumber.length - uncensoredCharacter) +
      parsedCardNumber.slice(-uncensoredCharacter)
    );
  };

  const orderDetailProps: OrOrderDetailProps = {
    title: template.orderDetailLabels?.title ?? "Order Details",
    detailItems: [
      {
        title: template.orderDetailLabels?.emailLabel ?? "Email",
        details: [
          { label: handleHideEmail(shippingStepData.email) ?? "Email" },
        ],
        link: {
          children: template.orderDetailLabels?.editButtonLabel ?? "Edit",
          onClick: handleNavigateToShipping,
        },
      },
      {
        title:
          template.orderDetailLabels?.shippingAddressLabel ??
          "Shipping Address",
        details: shippingStepData.shippingSameAsBilling
          ? [
              {
                label: `${
                  shippingStepData.billingAddress?.firstName ?? "First Name"
                } ${shippingStepData.billingAddress?.lastName ?? "Last Name"}`,
              },
              {
                label: `${
                  shippingStepData.billingAddress?.streetName ?? "Street Name"
                } ${
                  shippingStepData.billingAddress?.streetNumber ??
                  "Street Number"
                }`,
              },
              ...(shippingStepData.billingAddress?.additionalInfo
                ? [{ label: shippingStepData.billingAddress.additionalInfo }]
                : []),
              {
                label: `${shippingStepData.billingAddress?.city ?? "City"} ${
                  shippingStepData?.billingAddress?.stateCode ?? "State"
                } ${shippingStepData.billingAddress?.postalCode ?? "Zip Code"}`,
              },
              {
                label:
                  shippingStepData.billingAddress?.countryCode ?? "Country",
              },
            ]
          : [
              {
                label: `${
                  shippingStepData.shippingAddress?.firstName ?? "First Name"
                } ${shippingStepData.shippingAddress?.lastName ?? "Last Name"}`,
              },
              {
                label: `${
                  shippingStepData.shippingAddress?.streetName ?? "Street Name"
                } ${
                  shippingStepData.shippingAddress?.streetNumber ??
                  "Street Number"
                }`,
              },
              ...(shippingStepData.shippingAddress?.additionalInfo
                ? [{ label: shippingStepData.shippingAddress.additionalInfo }]
                : []),
              {
                label: `${shippingStepData.shippingAddress?.city ?? "City"} ${
                  shippingStepData?.shippingAddress?.stateCode ?? "State"
                } ${
                  shippingStepData.shippingAddress?.postalCode ?? "Zip Code"
                }`,
              },
              {
                label:
                  shippingStepData.shippingAddress?.countryCode ?? "Country",
              },
            ],
        link: {
          children: template.orderDetailLabels?.editButtonLabel ?? "Edit",
          onClick: handleNavigateToShipping,
        },
      },
      {
        title:
          template.orderDetailLabels?.deliveryMethodLabel ?? "Delivery Method",
        details: [
          {
            label:
              shippingStepData.deliveryMethod?.deliveryType ?? "Delivery Type",
            value:
              shippingStepData.deliveryMethod?.shippingPrice ??
              "Shipping Price",
          },
          {
            label:
              template.orderDetailLabels?.deliveryArrivalLabel ??
              "Arrives Date",
            value:
              shippingStepData?.deliveryMethod?.arrivesDate ?? "Arrives Date",
          },
        ],
        link: {
          children: template.orderDetailLabels?.editButtonLabel ?? "Edit",
          onClick: handleNavigateToShipping,
        },
      },
      {
        title:
          template.orderDetailLabels?.paymentMethodLabel ?? "Payment Method",
        details: [
          { label: paymentStepData.cardName ?? "Card Name" },
          {
            label:
              handleHideCardNumber(paymentStepData?.cardNumber) ??
              "Card Number",
          },
          { label: paymentStepData.expirationDate ?? "Expiration Date" },
        ],
        link: {
          children: template.orderDetailLabels?.editButtonLabel ?? "Edit",
          onClick: handleNavigateToPayment,
        },
        image: paymentStepData.payMethodImage
          ? { src: paymentStepData.payMethodImage }
          : undefined,
      },
    ],
    formButton: {
      children: template.orderDetailLabels?.buttonLabel ?? "Place Order",
      disabled: !checkboxActive,
    },
    formCheckbox: {
      type: MlFormFieldType.CHECKBOX,
      checked: checkboxActive,
      onClick: () => setCheckboxActive(!checkboxActive),
      label:
        template.orderDetailLabels?.privacyPolicyLabel ??
        "By placing this order, I agree with the privacy policy and terms of use.",
    },
    onSubmit: handleSubmit,
  };

  const basketItems: MlCardBasketProps[] = [];

  const orderSummaryProps: OrOrderSummaryProps = {
    orderLabelArray: [
      {
        label: template.orderSummaryInfo?.subtotalLabel ?? "Subtotal",
        value: basket?.totalPrice?.formatted ?? "$0.00",
        tooltipContent: template.orderSummaryInfo?.subtotalTooltipContent,
      },
      {
        label: template.orderSummaryInfo?.discountsLabel ?? "Discounts",
        value:
          "$" +
          (
            basket?.items?.reduce((acc, item) => {
              if (item.totalOriginalPrice) {
                acc += item.totalOriginalPrice.amount - item.totalPrice.amount;
              }
              return acc;
            }, 0) ?? 0
          ).toFixed(2),
        tooltipContent: template.orderSummaryInfo?.discountsTooltipContent,
        valueIndicatorColor: "positive",
      },
      {
        label: template.orderSummaryInfo?.taxesLabel ?? "Taxes",
        value: "$0.00",
        tooltipContent: template.orderSummaryInfo?.taxesTooltipContent,
      },
      {
        label: template.orderSummaryInfo?.shippingLabel ?? "Shipping",
        value: getShippingPriceLabel(basketState, template),
        tooltipContent: template.orderSummaryInfo?.shippingTooltipContent,
      },
    ],
    withCart: true,
    items: basketItems,
    totalPrice: basket?.totalPrice?.formatted || "0.00",
    totalItems: basket?.totalItems,
    ...template.orderSummaryLabels,
  };

  const copyrigthText =
    template.copyrightText ??
    "Copyright © 2023. Apply Digital. Tech Accelerator. All rights reserved.";

  return (
    <TmOrderDetail
      copyright={copyrigthText}
      orderDetailProps={orderDetailProps}
      orderSummaryProps={orderSummaryProps}
    />
  );
};
