import React from "react";
import { useContentfulPageToProps } from "./use-page-to-props";
import { PageProps } from "./page-types";
import { GlobalContext } from "../context/global";
import { normalizeGlobalData } from "./normalization/global-data";
import { HeadComponent } from "@mono-repo-demo/atomic-library";
import { PgPage } from "@components-library/ecommerce";
import { useTheme } from "../utils";

export const Page = (page: PageProps) => {
  const props = useContentfulPageToProps(page, "listKey");
  const globalData = normalizeGlobalData(page.globalData);
  const selectedTheme = page?.globalData?.themeVariables;
  console.log("Page", page);
  useTheme(selectedTheme); // Brings theme config from CMS

  // 500 page if no props are obtained for the page
  if (!props) throw new Error();
  const { children, head, ...rest } = props;

  return (
    <GlobalContext.Provider value={globalData}>
      <HeadComponent {...head} />
      <PgPage {...rest}>{children}</PgPage>
    </GlobalContext.Provider>
  );
};
