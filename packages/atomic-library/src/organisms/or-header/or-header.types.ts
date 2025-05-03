import { AtLinkProps, MlMediaProps } from "../..";
import { ReactNode } from "react";
import { OrPopUpBasketProps } from "../or-pop-up-basket";
import { OrPopupProductAddedProps } from "../or-popup-product-added";
import { OrSearchProps } from "../or-search";

export interface BasketIconProps {
  basketRef: React.RefObject<HTMLDivElement | null>;
  linkProps?: AtLinkProps;
  basketTotalQuantity: number;
  isBasketDisplayed: boolean;
  popUpBasket?: OrPopUpBasketProps;
  basketProductNotification?: OrPopupProductAddedProps;
  handleBasketMouseEnter: () => void;
  handleBasketMouseLeave: () => void;
  className?: string;
}

export interface OrHeaderProps {
  brand?: {
    link: Pick<AtLinkProps, "href" | "linkWrapper">;
    image: MlMediaProps;
    imageCheckout?: MlMediaProps;
  };
  stickBarContent?: ReactNode;
  menuItems?: HeaderMenuItem[];
  topLinks?: AtLinkProps[];
  basketIconLink?: AtLinkProps;
  userIconLink?: AtLinkProps;
  favoritesIconLink?: AtLinkProps;
  popUpBasket?: OrPopUpBasketProps;
  basketTotalItems: number;
  basketProductNotificationProps?: OrPopupProductAddedProps;
  searchBox?: OrSearchProps & { isHidden?: boolean };
  isStickBarHidden?: boolean;
  onCloseStickbar?: () => void;
  variant?: "default" | "compact";
  onArrowButtonClick?: () => void;
}

export interface HeaderIconsProps {
  popUpBasket?: OrPopUpBasketProps;
  basketIconLink?: AtLinkProps;
  favoritesIconLink?: AtLinkProps;
  basketProductNotification?: OrPopupProductAddedProps;
  basketTotalItems?: number;
  userIconLink?: AtLinkProps;
}

export interface HeaderMenuItem {
  label: string;
  linkProps?: Pick<AtLinkProps, "href" | "linkWrapper">;
  children?: HeaderMenuSubItem[];
}

export interface HeaderMenuSubItem {
  label: string;
  linkProps?: Pick<AtLinkProps, "href" | "linkWrapper">;
  children?: HeaderMenuSubItemChild[];
}

export interface HeaderMenuSubItemChild {
  label?: string;
  linkProps?: Pick<AtLinkProps, "href" | "linkWrapper">;
}
