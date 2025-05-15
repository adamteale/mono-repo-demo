import { useEffect, useState } from "react";

import { getPageBySlugUseCase } from "@Domain/contentful/getPageBySlug/getPageBySlugUseCase";
import { useNavigationContext } from "../../context";
import { PageProps } from "../../components/page-types";

export const useHomeViewModel = () => {
  const navigate = useNavigationContext();
  const onTapNavigateToProductDetail = () => {
    navigate.navigation.navigateToProductDetail({ id: "1234" });
  };

  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [pageProps, setPageProps] = useState<PageProps | null>();

  const onRefresh = () => {
    (async () => {
      try {
        setRefreshing(true);
        const result = await getPageBySlugUseCase.execute("/");
        setPageProps(result);
      } catch (error) {
        console.log("Error fetching page:", error);
      } finally {
        setRefreshing(false);
        console.log("refreshed page");
      }
    })();
  };

  const refresh = {
    onRefresh: onRefresh,
    refreshing: refreshing,
  };

  useEffect(() => {
    onRefresh();
  }, []);

  return {
    onRefresh,
    pageProps,
    onTapNavigateToProductDetail,
    refresh,
  };
};
