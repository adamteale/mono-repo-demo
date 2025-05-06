import { OrFormColumn } from "@mono-repo-demo/atomic-library";
import { MlCardBasketProps } from "../../molecules";
import { OrOrderSummaryProps, OrPaymentOptionsProps } from "../../organisms";

const defaultTooltipContent =
  "(e.g., “Free shipping over $50”) or the difference required to qualify (e.g., “Add $15.35 to qualify for free shipping”).";

const defaultOrderInfoArray = [
  {
    label: "Subtotal",
    value: "$150.50",
    tooltipContent: defaultTooltipContent,
  },
  {
    label: "Discounts",
    value: "$0.00",
    tooltipContent: defaultTooltipContent,
    valueIndicatorColor: "positive" as "positive",
  },
  {
    label: "Taxes",
    value: "$0.00",
    tooltipContent: defaultTooltipContent,
  },
  {
    label: "Shipping",
    value: "$0.00",
    tooltipContent: defaultTooltipContent,
  },
];

const defaultItems: MlCardBasketProps[] = [
  {
    index: "1",
    showInputQuantity: true,
    color: "beige",
    size: "4",
    eyebrowHeadline: "Seavees",
    image: { src: "https://picsum.photos/500/500" },
    productLink: {
      href: "#",
    },
    stockAmount: 5,
    initialInputValue: 1,
    onDeleteItem: () => {},
    price: "$50.00",
    title: "Product",
  },
  {
    index: "2",
    showInputQuantity: true,
    color: "blue",
    size: "5",
    eyebrowHeadline: "Seavees",
    image: { src: "https://picsum.photos/500/500" },
    productLink: {
      href: "#",
    },
    stockAmount: 5,
    initialInputValue: 1,
    onDeleteItem: () => {},
    price: "$50.00",
    title: "Product 2",
  },
];

const totalItems = 3;

const button = {
  buttonLabel: "CHECKOUT",
  buttonActionUrl: "/",
};

const orderSummaryProps: OrOrderSummaryProps = {
  title: "Order summary",
  className: "border-0",
  totalPriceLabel: "Order Total",
  totalPrice: "$357",
  orderLabelArray: defaultOrderInfoArray,
  items: defaultItems,
  totalItems: totalItems,
  withCart: true,
  buttonProps: {
    label: button.buttonLabel,
  },
};

const paymentOptionsProps: OrPaymentOptionsProps = {
  title: "Order Details",
  paymentOptions: [
    {
      radioProps: {
        titleClassName: "font-bold",
        title: "Debit/Credit Card",
        checked: true,
        onChange: () => {},
        disabled: false,
        dataTestId: "at-radio",
      },
      images: [
        { src: "/master-card.svg" },
        { src: "/discover.svg" },
        { src: "/amex.svg" },
        { src: "/visa.svg" },
      ],
      buttonProps: { children: "Review Order" },
      formProps: {
        controls: {
          cardNumber: {
            type: "password",
            placeholder: "1234 5678 9012 3456",
            label: "Card Number",
            required: true,
          },
          nameOnCard: {
            type: "password",
            placeholder: "JOHN SMITH",
            label: "Name on Card",
            required: true,
          },
          expirationDate: {
            type: "password",
            placeholder: "MM/YY",
            required: true,
            label: "Expiration Date",
          },
          securityCode: {
            type: "password",
            placeholder: "123",
            required: true,
            label: "Security Code",
            insideIcon: { type: "cvv" },
          },
        },
        columns: OrFormColumn.TWO,
        handleSubmit: () => {},
      },
    },
    {
      radioProps: {
        titleClassName: "font-bold",
        title: "Paypal",
        description:
          "You will be redirected to the PayPal website to complete your purchase securely. When you have finished, you will be returned to this page to review and place your order.",
        checked: true,
        onChange: () => {},
        disabled: false,
        dataTestId: "at-radio",
      },
      images: [{ src: "/paypal.svg" }],
      buttonProps: { children: "Buy With Paypal" },
    },
    {
      radioProps: {
        titleClassName: "font-bold",
        title: "Google pay",
        description:
          "You will be redirected to the Google Pay website to complete your purchase securely. When you have finished, you will be returned to this page to review and place your order.",
        checked: false,
        onChange: () => {},
        disabled: false,
        dataTestId: "at-radio",
      },
      images: [{ src: "/google-pay.svg" }],
      buttonProps: { children: "Buy With Google Pay" },
    },
    {
      radioProps: {
        titleClassName: "font-bold",
        title: "Apple Pay",
        description:
          "You will be redirected to the Apple Pay website to complete your purchase securely. When you have finished, you will be returned to this page to review and place your order.",
        checked: false,
        onChange: () => {},
        disabled: false,
        dataTestId: "at-radio",
      },
      images: [{ src: "/apple-pay.svg" }],
      buttonProps: { children: "Buy With Apple Pay" },
    },
  ],
};

export const defaultProps = {
  copyright:
    "Copyright © 2023. Apply Digital. Tech Accelerator. All rights reserved.",
  paymentOptionsProps,
  orderSummaryProps,
};
