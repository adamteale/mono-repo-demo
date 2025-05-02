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
    navigateHome: () => {
      router.replace({ pathname: "/(app)/(tabs)/home/home" });
    },
    navigateLogin: () => {
      router.replace({ pathname: "/(auth)/login" });
    },
  };
};
