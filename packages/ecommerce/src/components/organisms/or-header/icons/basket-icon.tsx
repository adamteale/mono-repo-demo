import React from "react";
import { View } from "react-native";

import { AtBadge, AtLink } from "@mono-repo-demo/atomic-library";
import { OrPopUpBasket } from "../../or-pop-up-basket";
import { BasketIconProps } from "../or-header.types";
import { OrPopupProductAdded } from "../../or-popup-product-added";

export const BasketIcon = ({
  basketRef,
  linkProps = { href: "/basket" },
  basketTotalQuantity,
  isBasketDisplayed,
  popUpBasket,
  basketProductNotification,
  handleBasketMouseEnter,
  handleBasketMouseLeave,
  className = "",
}: BasketIconProps) => {
  const showPopUpBasket =
    !basketProductNotification && isBasketDisplayed && popUpBasket;
  return (
    <View
      // ref={basketRef}
      className={`${basketProductNotification ? "sm:relative" : ""}`}
    >
      <View
        className={`block relative h-6 ${className}`}
        // onMouseEnter={
        //   popUpBasket?.items?.length ? handleBasketMouseEnter : undefined
        // }
        // onMouseLeave={
        //   popUpBasket?.items?.length ? handleBasketMouseLeave : undefined
        // }
        data-testid="basket-icon"
      >
        {basketTotalQuantity > 0 && (
          <View className="relative">
            <AtBadge
              quantity={basketTotalQuantity}
              className="absolute left-3.5 -bottom-3.5 z-20"
              dataTestId="basket-quantity"
            />
          </View>
        )}

        {!showPopUpBasket && (
          <AtLink
            {...linkProps}
            className="!text-icon-active !hover:text-icon-active"
            iconProps={{ type: "shopping-cart" }}
          />
        )}

        {showPopUpBasket && (
          <View className="relative">
            <AtLink
              {...linkProps}
              className="!text-icon-active !hover:text-icon-active"
              iconProps={{ type: "shopping-cart" }}
            />
            <OrPopUpBasket
              {...popUpBasket}
              isVisible={
                popUpBasket?.items?.length ? popUpBasket.isVisible : false
              }
              dataTestId="pop-up-basket-container"
              className="-right-[3.75rem] sm:-right-[4.25rem] w-screen md:right-0 lg:min-w-[24rem]"
            />
          </View>
        )}
      </View>

      {!!basketProductNotification && (
        <OrPopupProductAdded
          {...basketProductNotification}
          className="absolute inline-block mt-12 right-[2px] min-[350px]:right-5 sm:right-0 z-10 max-w-full sm:max-w-none w-[303px] min-[375px]:w-auto"
        />
      )}
    </View>
  );
};
