import { usePathname, useRouter } from "expo-router";

import { NavigationService } from "@Presentation/navigation/hooks/types";
import { ProductDetailScreenProps } from "@Presentation/screens/ProductDetailScreen";
import { RouterHelper } from "./RouterHelper";

export const useNavigationHandler = (): NavigationService => {
  const router = useRouter();
  console.log("useNavigationHandler 1");
  return {
    currentRoute: usePathname(),
    navigateBack: () => {
      console.log("useNavigationHandler 2");
      router.back();
    },
    navigateToProductDetail: (props: ProductDetailScreenProps) => {
      console.log("useNavigationHandler 3");
      router.push({ pathname: RouterHelper.productDetail, params: props });
    },
    navigateToHome: () => {
      console.log("useNavigationHandler 4");
      router.replace({ pathname: "/(app)/(tabs)/home" });
    },
    navigateToLogin: () => {
      console.log("useNavigationHandler 5");
      router.replace({ pathname: "/(auth)/login" });
    },
    navigateToRoute: (route: string) => {
      console.log("Navigating to route:", route);
    },
  };
};
