"use client";

import { NavigationService } from "@Presentation/navigation/hooks/types";
import { ProductDetailScreenProps } from "@Presentation/screens/ProductDetailScreen";
import { RouterHelper } from "./RouterHelper";
import { useRouter } from "next/router";

export const useNavigationHandler = (): NavigationService => {
  // const router = useRouter();

  return {
    navigateBack: () => {
      // router.back();
    },
    navigateToProductDetail: (props: ProductDetailScreenProps) => {
      // router.push({ pathname: RouterHelper.productDetail, query: props });
    },
    navigateHome: () => {
      // router.replace({ pathname: "/(app)/(tabs)/home/home" });
    },
    navigateLogin: () => {
      // router.replace({ pathname: "/(auth)/login" });
    },
  };
};
