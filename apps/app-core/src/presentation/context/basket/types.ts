import { ShippingMethod } from "../../../types/basket/responses/shipping-method";
import { Basket, BasketItem, CommerceOrder } from "../../../types";

export enum BasketActionTypes {
  UPDATE_BASKET = "@update-basket",
  RESET_BASKET = "@reset-basket",
  SHOW_PRODUCT_NOTIFICATION = "@show-product-notification",
  HIDE_PRODUCT_NOTIFICATION = "@hide-product-notification",
  START_ACTION = "@start-basket-action",
  GET_SHIPPING_METHODS = "@get_shipping_methods",
  SET_ORDER = "@create_order",
}

export type BasketAction =
  | { type: BasketActionTypes.UPDATE_BASKET; payload?: Basket }
  | { type: BasketActionTypes.RESET_BASKET }
  | { type: BasketActionTypes.SHOW_PRODUCT_NOTIFICATION; payload?: BasketItem }
  | { type: BasketActionTypes.HIDE_PRODUCT_NOTIFICATION }
  | { type: BasketActionTypes.START_ACTION }
  | { type: BasketActionTypes.GET_SHIPPING_METHODS; payload?: ShippingMethod[] }
  | { type: BasketActionTypes.SET_ORDER; payload?: CommerceOrder };

export type BasketState = {
  basket?: Basket;
  notificationItem?: BasketItem;
  isPending?: boolean;
  availableShippingMethods?: ShippingMethod[];
  order?: CommerceOrder;
};

export interface BasketProviderProps {
  children: React.ReactNode;
}
