import React from "react";

import { OrOrderDetail } from "../../organisms";
import { TmOrderDetailProps } from "./tm-order-detail.types";
import { TmCheckout } from "../tm-checkout";

export const TmOrderDetail = ({
  copyright,
  orderDetailProps,
  orderSummaryProps,
}: TmOrderDetailProps) => {
  return (
    <TmCheckout copyright={copyright} orderSummaryProps={orderSummaryProps}>
      <OrOrderDetail
        {...orderDetailProps}
        className="order-2 xl:order-1 w-full xl:min-w-110 xl:max-w-126"
        dataTestId="or-order-detail"
      />
    </TmCheckout>
  );
};
