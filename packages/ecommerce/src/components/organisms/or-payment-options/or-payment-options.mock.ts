import { OrFormColumn } from "@mono-repo-demo/atomic-library";
import { OrPaymentOptionsProps } from "./or-payment-options.types";

export const defaultProps: OrPaymentOptionsProps = {
  title: "Order Options",
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
          },
          nameOnCard: {
            type: "password",
            placeholder: "JOHN SMITH",
            label: "Name on Card",
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
      buttonProps: { children: "Pay With Paypal" },
    },
    {
      radioProps: {
        titleClassName: "font-bold",
        title: "Apple Pay",
        description: "",
        checked: false,
        onChange: () => {},
        disabled: false,
        dataTestId: "at-radio",
      },
      images: [{ src: "/apple-pay.svg" }],
      buttonProps: { children: "" },
    },
  ],
};
