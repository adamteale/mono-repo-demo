// import { LOCAL_BASKET_ID, LOCAL_ORDER_IDS } from '../../../context'
// import {
//   addProductToBasket,
//   updateItemQuantity,
//   deleteItemFromBasket,
//   updateBasketCustomerData,
//   getBasketShippingMethods,
//   setBasketShippingMethod,
//   createBasketOrder,
// } from '../../../services/basket'
// import { resolveAccessToken } from '../customer/auth-token-handler'
// import { getStorageState, setStorageState } from '../../storage-state'
import {
  CreateOrderDto,
  CustomerDataDto,
  SetShippingMethodDto,
} from "../../../types";

export const addToBasket = async (
  productId: string,
  quantity: number,
  variantId?: string
) => {
  // const basketId = getStorageState(LOCAL_BASKET_ID)
  // const accessToken = await resolveAccessToken()
  // const response = await addProductToBasket(productId, quantity, accessToken, basketId, variantId)
  // if (!basketId && response?.basket) {
  //   setStorageState(LOCAL_BASKET_ID, response.basket.id)
  // }
  // return response
};

export const updateBasketItem = async (
  basketItemId: string,
  quantity: number
) => {
  // const basketId = getStorageState(LOCAL_BASKET_ID)
  // const accessToken = await resolveAccessToken()
  // const updatedBasket = await updateItemQuantity(basketItemId, quantity, basketId, accessToken)
  // return updatedBasket
};

export const removeItemFromBasket = async (basketItemId: string) => {
  // const basketId = getStorageState(LOCAL_BASKET_ID)
  // const accessToken = await resolveAccessToken()
  // const updatedBasket = await deleteItemFromBasket(basketId, basketItemId, accessToken)
  // return updatedBasket
};

export const updateCustomerData = async (customerDataDto: CustomerDataDto) => {
  // const basketId = getStorageState(LOCAL_BASKET_ID)
  // const accessToken = await resolveAccessToken()
  // const response = await updateBasketCustomerData(basketId, accessToken, customerDataDto)
  // return response
};

export const getShippingMethods = async () => {
  // const basketId = getStorageState(LOCAL_BASKET_ID)
  // const accessToken = await resolveAccessToken()
  // const response = await getBasketShippingMethods(basketId, accessToken)
  // return response
};

export const setShippingMethod = async (
  shippingMethodDto: SetShippingMethodDto
) => {
  // const basketId = getStorageState(LOCAL_BASKET_ID)
  // const accessToken = await resolveAccessToken()
  // const response = await setBasketShippingMethod(basketId, accessToken, shippingMethodDto)
  // return response
};

export const createOrder = async (createOrderDto: CreateOrderDto) => {
  // const basketId = getStorageState(LOCAL_BASKET_ID)
  // const accessToken = await resolveAccessToken()
  // const response = await createBasketOrder(basketId, accessToken, createOrderDto)
  // if (response && !('errors' in response)) {
  //   const orderIdsString = localStorage.getItem(LOCAL_ORDER_IDS)
  //   let orderIds = []
  //   if (orderIdsString) {
  //     orderIds = JSON.parse(orderIdsString)
  //   }
  //   orderIds.push(response.id)
  //   localStorage.setItem(LOCAL_ORDER_IDS, JSON.stringify(orderIds))
  //   localStorage.removeItem(LOCAL_BASKET_ID)
  // }
  // return response
};
