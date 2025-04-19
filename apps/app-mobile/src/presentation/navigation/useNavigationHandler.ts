import { useRouter } from "expo-router";

import { NavigationService } from "@Presentation/navigation/hooks/types";
import { ProductDetailScreenProps } from "@Presentation/screens/ProductDetailScreen";
import { RouterHelper } from "./RouterHelper";

export const useNavigationHandler = (): NavigationService => {
  const router = useRouter();

  return {
    navigateBack: () => {
      router.back();
    },
    navigateToProductDetail: (props: ProductDetailScreenProps) => {
      router.push({ pathname: RouterHelper.productDetail, params: props });
    },
  };
};
