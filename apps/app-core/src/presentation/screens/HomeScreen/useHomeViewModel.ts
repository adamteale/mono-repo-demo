import { useEffect, useState } from "react";

import { useNavigationContext } from "../../context";
import { getPageBySlugUseCase } from "../../../domain/contentful/getPageBySlug/getPageBySlugUseCase";
import { PageProps } from "../../components/page-types";

export const useHomeViewModel = () => {
  const navigate = useNavigationContext();
  const onTapNavigateToProductDetail = () => {
    navigate.navigation.navigateToProductDetail({ id: "1234" });
  };

  const [pageProps, setPageProps] = useState<PageProps | null>();

  useEffect(() => {
    (async () => {
      try {
        const result = await getPageBySlugUseCase.execute("/");
        console.log("Page props:", JSON.stringify(result, null, 2));
        setPageProps(result);
      } catch (error) {
        console.log("Error fetching page:", error);
      }
    })();
  }, []);

  return {
    pageProps,
    onTapNavigateToProductDetail,
  };
};
