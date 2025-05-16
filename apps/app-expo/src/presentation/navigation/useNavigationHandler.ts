import { usePathname, useRouter } from "expo-router";

import { NavigationService } from "@Presentation/navigation/hooks/types";
import { ProductDetailScreenProps } from "@Presentation/screens/ProductDetailScreen";
import { RouterHelper } from "./RouterHelper";

export const useNavigationHandler = (): NavigationService => {
  const router = useRouter();
  return {
    currentRoute: usePathname(),
    navigateBack: () => {
      router.back();
    },
    navigateToProductDetail: (props: ProductDetailScreenProps) => {
      router.push({ pathname: RouterHelper.productDetail, params: props });
    },
    navigateToHome: () => {
      router.replace({ pathname: "/(app)/(tabs)/home" });
    },
    navigateToLogin: () => {
      router.replace({ pathname: "/(auth)/login" });
    },
    navigateToRoute: (route: string) => {
      console.log("Navigating to route:", route);
    },
  };
};
