import { NavigationService } from "@Presentation/navigation/hooks/types";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { WebPaths } from "./WebPaths";
import { ProductDetailScreenProps } from "@Presentation/screens/ProductDetailScreen";

export const useNavigationHandler = (): NavigationService => {
  const router = useRouter();

  const navigateBack = useCallback(() => {
    router.back();
  }, [router]);

  const navigateToProductDetail = useCallback(
    (params: ProductDetailScreenProps) => {
      const path = WebPaths.productDetail(params.id);
      router.push(path);
    },
    [router]
  );

  const navigateHome = useCallback(() => {
    router.replace(WebPaths.home);
  }, [router]);

  const navigateLogin = useCallback(() => {
    router.replace(WebPaths.login);
  }, [router]);

  return {
    navigateBack,
    navigateToProductDetail,
    navigateHome,
    navigateLogin,
  };
};
