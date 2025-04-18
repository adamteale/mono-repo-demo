import {
  useNavigation,
  useNavigationContainerRef,
  useRootNavigation,
} from "expo-router";
import {
  NavigationContainerRefWithCurrent,
  ParamListBase,
} from "@react-navigation/core";

import { NavigationService } from "./types";
import { HomeNavigationStackScreen } from "../navigators/HomeNavigation/types";
import { ProductDetailScreenProps } from "../../screens/ProductDetailScreen";

export const useNavigationHandler = (): NavigationService => {
  const navigationRef = useNavigationContainerRef();
  return {
    navigationRef: navigationRef,
    navigationIsReady: navigationRef.current?.isReady?.() ?? false,
    navigateBack: () => {
      navigationRef.current?.goBack();
    },
    navigateToProductDetail: (props: ProductDetailScreenProps) => {
      navigationRef.current?.navigate(HomeNavigationStackScreen.ProductDetail, {
        ...props,
      });
    },
  };
};
