import React from "react";
import Link from "next/link";

import { useBasket } from "../../../context/basket/use-basket";
import { normalizeBasketItem } from "../../../utils/normalization/basket-item";
import { TmBasketWrapperProps } from "./tm-basket-wrapper.types";
import {
  MlCardBasketProps,
  OrOrderSummaryProps,
  TmBasket,
} from "@components-library/ecommerce";
import { useNormalizeCarousel } from "../../normalization/carousel";
import { getShippingPriceLabel } from "../../../utils/basket/get-shipping-price-label";

export const TmBasketWrapper = ({ template }: TmBasketWrapperProps) => {
  const carouselProps = useNormalizeCarousel(template.bottomContent);

  const { state, updateBasket, deleteItemFromBasket } = useBasket();
  const { basket, isPending } = state;

  const checkoutButtonProps = {
    label: template.orderSummaryLabels?.buttonLabel || "",
    href: template.orderSummaryLabels?.buttonActionUrl,
    linkWrapper: undefined,
    // linkWrapper: Link,
  };

  const emptyBasketProps = {
    title: template.emptyBasketLabels?.title,
    subtitle: template.emptyBasketLabels?.subtitle,
    buttonProps: {
      label: template.emptyBasketLabels?.buttonLabel,
      href: template.emptyBasketLabels?.buttonActionUrl,
      linkWrapper: undefined,
      // linkWrapper: Link,
    },
  };

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
      //       basket?.items
      //         .reduce((acc, item) => {
      //           if (item.totalOriginalPrice) {
      //             acc +=
      //               item.totalOriginalPrice.amount - item.totalPrice.amount;
      //           }
      //           return acc;
      //         }, 0)
      //         .toFixed(2) || "$0.00",
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
      //   value: getShippingPriceLabel(state, template),
      //   tooltipContent: template.orderSummaryInfo?.shippingTooltipContent,
      // },
    ],
    totalPrice: "0.00",
    // totalPrice: basket?.totalPrice?.formatted || "0.00",
    buttonProps: checkoutButtonProps,
    ...template.orderSummaryLabels,
  };

  const basketItems: MlCardBasketProps[] | undefined = [];

  return (
    <TmBasket
      items={basketItems}
      // totalItems={basket?.totalItems}
      totalItems={1}
      basketItemsLabels={template.basketItemsLabels}
      emptyBasketLabels={emptyBasketProps}
      orderSummaryProps={orderSummaryProps}
      carouselProps={carouselProps}
    />
  );
};
