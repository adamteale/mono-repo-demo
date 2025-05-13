import React from "react";

import {
  HeaderMenuItem,
  OrHeaderProps,
  SearchItemDisplayVariants,
} from "@components-library/ecommerce";
import { normalizeFile } from "./file";
import Link from "next/link";
import { getSearchUrl, replacePlaceholder, SLUG_KEY } from "../../utils";
import { normalizeBasketItem } from "../../utils/normalization/basket-item";
import { BasketState } from "../../context/basket/types";
import { getAttributeProperties } from "../../utils/product/get-attribute-properties/get-attribute-properties";
import { normalizeLink } from "./link";
import { normalizeMenuItem } from "./menu-items";
import { PLACEHOLDER_IMAGE_PATH } from "../../utils/normalization/files/constants";
import { OrRichTextRenderer } from "../component-renderers/renderers/or-rich-text.renderer";
import { AtLinkProps, CMSHeader, Target } from "@mono-repo-demo/atomic-library";
import { PRODUCT_VARIATIONS_KEY } from "../types";
import { SearchQueryDto } from "@Domain/contentful/types/search-query.dto";
// import {
//   normalizeSearchResult,
//   // normalizeSearchSuggestion,
//   SearchState,
// } from "@search/algolia";

export const BASKET_TEXT_PLACEHOLDERS = {
  singleItemLabel: "{itemValue}",
  multipleItemsLabel: "{itemsValue}",
};

export const normalizeHeader = (
  header: CMSHeader,
  basketState: BasketState,
  {
    search,
    updateBasket,
    deleteItemFromBasket,
    searchOnSubmit,
  }: {
    deleteItemFromBasket: (basketItemId: string) => Promise<void>;
    searchOnSubmit: (
      event:
        | React.FormEvent<HTMLFormElement>
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    search: (query: SearchQueryDto) => Promise<void>;
    updateBasket: (
      basketItemId: string,
      quantity: number,
      showNotification: boolean
    ) => Promise<void>;
  },
  showResults?: boolean
): OrHeaderProps => {
  const basketItemsLabel =
    !basketState.basket?.totalItems || basketState.basket.totalItems <= 0
      ? ""
      : basketState.basket?.totalItems === 1
      ? `${replacePlaceholder(
          header.popUpBasket?.singleItemLabel ?? "({itemValue} item)",
          BASKET_TEXT_PLACEHOLDERS,
          {
            singleItemLabel: basketState.basket?.totalItems,
          }
        )}`
      : `${replacePlaceholder(
          header.popUpBasket?.multipleItemsLabel ?? "({itemsValue} items)",
          BASKET_TEXT_PLACEHOLDERS,
          {
            multipleItemsLabel: basketState.basket?.totalItems,
          }
        )}`;

  const basketProductNotificationColorKey = getAttributeProperties(
    basketState?.notificationItem?.attributes,
    PRODUCT_VARIATIONS_KEY.COLOR
  )?.colorKey;

  const basketProductNotificationSizeName = getAttributeProperties(
    basketState?.notificationItem?.attributes,
    PRODUCT_VARIATIONS_KEY.SIZE
  ).sizeName;

  return {
    basketIconLink: {
      linkWrapper: Link,
      href: header.popUpBasket?.leftButtonActionUrl,
    },
    userIconLink: { linkWrapper: Link, href: header.userIconLink?.actionUrl },
    favoritesIconLink: { linkWrapper: Link, href: "/favorites" },
    brand: {
      link: { href: header.brandUrl, linkWrapper: Link },
      image: {
        imageDesktop: normalizeFile(header.brandImage?.imageDesktop),
        imageTablet: header.brandImage?.imageTablet
          ? normalizeFile(header.brandImage?.imageTablet)
          : undefined,
        imageMobile: header.brandImage?.imageMobile
          ? normalizeFile(header.brandImage?.imageMobile)
          : undefined,
      },
      imageCheckout: {
        imageDesktop: normalizeFile(header.brandImageCheckout?.imageDesktop),
        imageTablet: header.brandImageCheckout?.imageTablet
          ? normalizeFile(header.brandImageCheckout?.imageTablet)
          : undefined,
        imageMobile: header.brandImageCheckout?.imageMobile
          ? normalizeFile(header.brandImageCheckout?.imageMobile)
          : undefined,
      },
    },
    basketTotalItems: basketState.basket?.totalItems ?? 0,
    stickBarContent: header.stickBarContent ? (
      <OrRichTextRenderer
        block={{
          content: header.stickBarContent,
          textAlignment: "center",
          variant: "header-sticky-bar",
        }}
      />
    ) : undefined,
    popUpBasket: header.popUpBasket
      ? {
          leftButton: {
            label: header.popUpBasket?.leftButtonLabel,
            href: header.popUpBasket?.leftButtonActionUrl,
            target: Target.SELF,
            linkWrapper: Link,
          },
          rightButton: {
            label: header.popUpBasket?.rightButtonLabel,
            href: header.popUpBasket?.rightButtonActionUrl,
            target: Target.SELF,
            linkWrapper: Link,
          },
          title: header.popUpBasket?.title ?? "Your Cart",
          subtotalPriceLabel:
            header.popUpBasket?.subTotalPriceLabel ?? "SUBTOTAL: ",
          subtotalPrice: basketState.basket?.totalPrice?.formatted ?? "$0.00",
          itemsLabel: basketItemsLabel,
          items: basketState.basket?.items?.map((item) =>
            normalizeBasketItem({
              item,
              showInputQuantity: false,
              onDeleteItem: () => deleteItemFromBasket(item.basketItemId),
              onQuantityChange: ({ quantity }) => {
                item.quantity !== quantity &&
                  updateBasket(item.basketItemId, quantity, false);
              },
              isDeleteButtonDisabled: basketState.isPending,
              isQuantityInputDisabled: basketState.isPending,
            })
          ),
        }
      : undefined,
    searchBox: {
      onSubmit: searchOnSubmit,
      onChange: (query: any) => search({ text: query }),
      onClearButtonClick: () => search({}),
      placeholder: header?.searchbox?.placeholder ?? "",
      currentQuery: "",
      resultsTitle: header?.searchbox?.resultsTitle,
      resultsDisplayVariant: header?.searchbox
        ?.resultsDisplayVariant as SearchItemDisplayVariants,
      seeMoreResultsLinkProps: {
        href: getSearchUrl(""),
        linkWrapper: Link,
      },
      seeMoreResultsLabel: header?.searchbox?.seeMoreResultsLabel,
      totalAmountOfResults: 0,
      noResultsFoundLabel: header?.searchbox?.noResultsFoundLabel,
      suggestionsTitle: "Featured Products",
      totalAmountOfSuggestions: 0,
      suggestions: undefined,
      suggestionsDisplayVariant: SearchItemDisplayVariants.CARD,
      showMoreSuggestions: false,
      results: [],
      showResults,
    },
    menuItems: header.menuItems
      ?.map(normalizeMenuItem)
      .filter((el): el is HeaderMenuItem => !!el),
    topLinks: header.topLinks
      ?.map(normalizeLink)
      .filter((link): link is AtLinkProps => !!link),
    basketProductNotificationProps: basketState.notificationItem
      ? {
          productName: basketState.notificationItem.name,
          price: basketState.notificationItem.price.formatted,
          quantity: basketState.notificationItem.quantity,
          image: {
            src:
              basketState.notificationItem.image?.src ?? PLACEHOLDER_IMAGE_PATH,
            alt: basketState.notificationItem.image?.alt,
            onErrorSrc: PLACEHOLDER_IMAGE_PATH,
          },
          productVariants: {
            color: basketProductNotificationColorKey
              ? basketProductNotificationColorKey
              : undefined,
            size: basketProductNotificationSizeName
              ? basketProductNotificationSizeName
              : undefined,
          },
          viewBasketButtonProps: {
            label: "View Cart",
            href: header.popUpBasket?.leftButtonActionUrl,
            linkWrapper: Link,
          },
        }
      : undefined,
  };
};
