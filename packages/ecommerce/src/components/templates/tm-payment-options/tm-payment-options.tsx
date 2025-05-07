import React from "react";

import { OrPaymentOptions } from "../../organisms";
import { TmPaymentOptionsProps } from "./tm-payment-options.types";
import { TmCheckout } from "../tm-checkout";

export const TmPaymentOptions = ({
  orderSummaryProps,
  paymentOptionsProps,
  copyright,
}: TmPaymentOptionsProps) => {
  return (
    <TmCheckout copyright={copyright} orderSummaryProps={orderSummaryProps}>
      <OrPaymentOptions
        {...paymentOptionsProps}
        className="order-2 h-fit xl:order-1 w-full xl:min-w-110 xl:max-w-126"
        dataTestId="or-payment-options"
      />
    </TmCheckout>
  );
};
