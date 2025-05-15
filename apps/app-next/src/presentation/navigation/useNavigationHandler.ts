import { NavigationService } from "@Presentation/navigation/hooks/types";
import { usePathname, useRouter } from "next/navigation";
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

  const navigateToHome = useCallback(() => {
    router.replace(WebPaths.home);
  }, [router]);

  const navigateToLogin = useCallback(() => {
    router.replace(WebPaths.login);
  }, [router]);

  const navigateToRoute = (route: string) => {
    router.push(route);
  };

  return {
    currentRoute: usePathname(),
    navigateBack,
    navigateToProductDetail,
    navigateToHome,
    navigateToLogin,
    navigateToRoute,
  };
};
