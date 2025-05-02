import {
  addToBasket,
  createOrder,
  getShippingMethods,
  removeItemFromBasket,
  setShippingMethod,
  updateBasketItem,
  updateCustomerData,
} from "../../utils/services/basket";
import { useCallback, useContext, useState, useEffect } from "react";
import { BasketActionTypes } from "./types";
import { BasketContext } from ".";
import {
  CreateOrderDto,
  CustomerDataDto,
  SetShippingMethodDto,
} from "../../types";
// import { useRouter } from 'next/router'

export const useBasket = () => {
  const { basketState, basketDispatch } = useContext(BasketContext);

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      basketDispatch({ type: BasketActionTypes.HIDE_PRODUCT_NOTIFICATION });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addProductToBasket = useCallback(
    async (
      productId: string,
      quantity: number,
      sku: string,
      variantId?: string
    ) => {
      basketDispatch({ type: BasketActionTypes.START_ACTION });
      const response = await addToBasket(productId, quantity, variantId);
      if (response?.basket)
        basketDispatch({
          type: BasketActionTypes.UPDATE_BASKET,
          payload: response.basket,
        });
      if (response?.itemAdded) {
        const addedItem = response.basket.items.find(
          (item) => item.sku === sku
        );

        if (typeof window !== "undefined") window.scrollTo(0, 0);

        if (timeoutId) clearTimeout(timeoutId);

        basketDispatch({
          type: BasketActionTypes.SHOW_PRODUCT_NOTIFICATION,
          payload: addedItem,
        });

        const id = setTimeout(() => {
          basketDispatch({ type: BasketActionTypes.HIDE_PRODUCT_NOTIFICATION });
          setTimeoutId(undefined);
        }, 4000);
        setTimeoutId(id);
        return true;
      }
      return false;
    },
    [basketDispatch, timeoutId]
  );

  const updateBasket = async (
    basketItemId: string,
    quantity: number,
    showNotification = true
  ) => {
    basketDispatch({ type: BasketActionTypes.START_ACTION });
    const updatedBasket = await updateBasketItem(basketItemId, quantity);
    if (updatedBasket) {
      basketDispatch({
        type: BasketActionTypes.UPDATE_BASKET,
        payload: updatedBasket,
      });
      const updatedItem = updatedBasket.items.find(
        (item) => item.basketItemId === basketItemId
      );
      if (showNotification) {
        basketDispatch({
          type: BasketActionTypes.SHOW_PRODUCT_NOTIFICATION,
          payload: updatedItem,
        });
        setTimeout(() => {
          basketDispatch({ type: BasketActionTypes.HIDE_PRODUCT_NOTIFICATION });
        }, 5000);
      }
    }
  };

  const deleteItemFromBasket = async (basketItemId: string) => {
    basketDispatch({ type: BasketActionTypes.START_ACTION });
    const updatedBasket = await removeItemFromBasket(basketItemId);
    if (updatedBasket) {
      basketDispatch({
        type: BasketActionTypes.UPDATE_BASKET,
        payload: updatedBasket,
      });
    }
  };

  const updateBasketCustomerData = async (customerData: CustomerDataDto) => {
    basketDispatch({ type: BasketActionTypes.START_ACTION });
    const response = await updateCustomerData(customerData);

    if (response && !("errors" in response)) {
      basketDispatch({
        type: BasketActionTypes.UPDATE_BASKET,
        payload: response,
      });
      return {
        basket: response,
        errors: null,
      };
    }
    return {
      basket: null,
      errors: response?.errors,
    };
  };

  const getBasketShippingMethods = async () => {
    basketDispatch({ type: BasketActionTypes.START_ACTION });
    const response = await getShippingMethods();

    if (response && !("errors" in response)) {
      basketDispatch({
        type: BasketActionTypes.GET_SHIPPING_METHODS,
        payload: response,
      });
      return {
        basket: response,
        errors: null,
      };
    }

    return {
      basket: null,
      errors: response?.errors,
    };
  };

  const setBasketShippingMethod = async (
    shippingMethod: SetShippingMethodDto
  ) => {
    basketDispatch({ type: BasketActionTypes.START_ACTION });
    const response = await setShippingMethod(shippingMethod);

    if (response && !("errors" in response)) {
      basketDispatch({
        type: BasketActionTypes.UPDATE_BASKET,
        payload: response,
      });
      return {
        basket: response,
        errors: null,
      };
    }

    return {
      basket: null,
      errors: response?.errors,
    };
  };

  const setBasketOrder = async (createOrderDto: CreateOrderDto) => {
    basketDispatch({ type: BasketActionTypes.START_ACTION });
    const response = await createOrder(createOrderDto);

    if (response && !("errors" in response)) {
      basketDispatch({
        type: BasketActionTypes.SET_ORDER,
        payload: response,
      });
      basketDispatch({
        type: BasketActionTypes.RESET_BASKET,
      });
      return {
        basket: response,
        errors: null,
      };
    }

    return {
      basket: null,
      errors: response?.errors,
    };
  };

  return {
    state: basketState,
    addProductToBasket,
    updateBasket,
    updateBasketCustomerData,
    deleteItemFromBasket,
    getBasketShippingMethods,
    setBasketShippingMethod,
    setBasketOrder,
  };
};
