// import { createContext, useEffect, useMemo, useReducer } from "react";
// import { getBasket } from "../../services/basket";
// import { getStorageState, removeStorageState } from "../../utils";
// import {
//   refreshTokenCookieName,
//   refreshTokenExpirationDateCookieName,
//   resolveAccessToken,
//   setRefreshTokenCookie,
// } from "../../utils/services/customer";
// import {
//   BasketAction,
//   BasketActionTypes,
//   BasketProviderProps,
//   BasketState,
// } from "./types";
// import { isRequestError } from "../../utils/check-request-error";
// import { useRouter } from "next/router";
// import { getCookie } from "cookies-next";

// export const LOCAL_BASKET_ID = "local-basket-id";
// export const LOCAL_ORDER_IDS = "local-order-ids";

// const BASKET_INITIAL_STATE: BasketState = {
//   // TODO: Add new attributes
//   isPending: false,
// };

// const basketReducer = (
//   state = BASKET_INITIAL_STATE,
//   action: BasketAction
// ): BasketState => {
//   switch (action.type) {
//     case BasketActionTypes.START_ACTION: {
//       return {
//         ...state,
//         isPending: true,
//       };
//     }
//     case BasketActionTypes.UPDATE_BASKET: {
//       return {
//         ...state,
//         isPending: false,
//         basket: action.payload,
//       };
//     }
//     case BasketActionTypes.RESET_BASKET: {
//       return BASKET_INITIAL_STATE;
//     }
//     case BasketActionTypes.SHOW_PRODUCT_NOTIFICATION: {
//       return {
//         ...state,
//         isPending: false,
//         notificationItem: action.payload,
//       };
//     }
//     case BasketActionTypes.HIDE_PRODUCT_NOTIFICATION: {
//       return {
//         ...state,
//         isPending: false,
//         notificationItem: undefined,
//       };
//     }
//     case BasketActionTypes.GET_SHIPPING_METHODS: {
//       return {
//         ...state,
//         isPending: false,
//         availableShippingMethods: action.payload,
//       };
//     }
//     case BasketActionTypes.SET_ORDER: {
//       return {
//         ...state,
//         isPending: false,
//         order: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const BasketContext = createContext<{
//   basketState: BasketState;
//   basketDispatch: React.Dispatch<BasketAction>;
// }>({
//   basketState: BASKET_INITIAL_STATE,
//   basketDispatch: () => ({}),
// });
// BasketContext.displayName = "BasketContext";

// export const BasketProvider = ({ children }: BasketProviderProps) => {
//   const { asPath } = useRouter();
//   const [basketState, basketDispatch] = useReducer(
//     basketReducer,
//     BASKET_INITIAL_STATE
//   );
//   const value = useMemo(() => {
//     return { basketState, basketDispatch };
//   }, [basketState, basketDispatch]);

//   useEffect(() => {
//     const basketDataHandler = async () => {
//       const localBasketId = getStorageState(LOCAL_BASKET_ID);
//       if (!localBasketId) return;

//       const accessToken = await resolveAccessToken();
//       if (!accessToken) return; // TODO: better handling

//       const basketData = await getBasket(localBasketId, accessToken);
//       if (isRequestError(basketData)) {
//         if (basketData.status === 404) {
//           removeStorageState(LOCAL_BASKET_ID);
//         }
//         return;
//       }

//       basketDispatch({
//         type: BasketActionTypes.UPDATE_BASKET,
//         payload: basketData,
//       });
//     };
//     basketDataHandler();
//   }, []);

//   useEffect(() => {
//     const basketTokenRefresh = async () => {
//       if (!getStorageState(LOCAL_BASKET_ID)) {
//         return;
//       }
//       const refreshTokenExpirationDateCookie = getCookie(
//         refreshTokenExpirationDateCookieName
//       );

//       if (!refreshTokenExpirationDateCookie) {
//         return;
//       }

//       // If the refresh token is about to expire and the session is still active, the session will be extended.
//       const parsedRefreshTokenExpirationDate = new Date(
//         refreshTokenExpirationDateCookie
//       );
//       const twoDaysInMs = 24 * 60 * 60 * 1000 * 2;

//       const timeDifference =
//         parsedRefreshTokenExpirationDate.getTime() - new Date().getTime();

//       if (timeDifference <= twoDaysInMs) {
//         const refreshAccessTokenCookie = getCookie(refreshTokenCookieName);
//         setRefreshTokenCookie(refreshAccessTokenCookie);
//       }
//     };
//     basketTokenRefresh();
//   }, [asPath]);

//   return (
//     <BasketContext.Provider value={value}>{children}</BasketContext.Provider>
//   );
// };
