import React from "react";

import { PgPageProps } from "@mono-repo-demo/atomic-library";
import { HeadProps } from "@mono-repo-demo/atomic-library";

// import { BrowserStorage } from "../types/browser-storage";

import {
  // CMSBasket,
  // CMSBlogArticle,
  // CMSCatalog,
  // CMSCheckoutCompleted,
  // CMSContactUs,
  CMSFlex,
  // CMSLegalSupport,
  // CMSLogin,
  // CMSStepper,
} from "@mono-repo-demo/atomic-library";

import { normalizeFooter } from "./normalization/footer";
import { useBasket } from "../context/basket/use-basket";
import {
  SLUG_KEY,
  // getSearchUrl,
  // getStorageState,
  // setStorageState,
} from "../utils";

import {
  PageProps,
  //  ProductPageProps, SearchPageProps
} from "./page-types";
import { TmFlexWrapper } from "./template-wrappers/tm-flex-wrapper/tm-flex-wrapper";
// import { TmProductDetailWrapper } from "./template-wrappers/tm-product-detail-wrapper/tm-product-detail-wrapper";
// import { TmBasketWrapper } from "./template-wrappers/tm-basket-wrapper/tm-basket-wrapper";
// import { TmStepperWrapper } from "./template-wrappers/tm-stepper-wrapper/tm-stepper-wrapper";
// import { TmLoginWrapper } from "./template-wrappers/tm-login-wrapper/tm-login-wrapper";
// import { TmContactUsWrapper } from "./template-wrappers/tm-contact-us-wrapper/tm-contact-us-wrapper";
// import { TmCheckoutCompletedWrapper } from "./template-wrappers/tm-checkout-completed-wrapper/tm-checkout-completed-wrapper";
// import { TmLegalSupportWrapper } from "./template-wrappers/tm-legal-support-wrapper/tm-legal-support-wrapper";
// import { PLACEHOLDER_IMAGE_PATH } from "../utils/normalization/files/constants";
// import { TmBlogArticleWrapper } from "./template-wrappers/tm-blog-article-wrapper/tm-blog-article-wrapper";
// import { resolveAccessToken } from "../../utils/services/customer";

import { useNavigationContext } from "../context";
import { normalizeHead } from "./normalization/head";
import { normalizeHeader } from "./normalization/header";
import { useGlobalContext } from "../context/global";
import // TmCatalogWrapper,
// cardRenderer,
// useSearchBoxResults,
// SearchState,
// SearchContextStatus,
// SearchQueryDto,
"./search-service";
import { SearchQueryDto } from "../../types";

export const STICKBAR_KEY = "stick-bar";

const SHOW_SEARCH_RESULTS_IN_CATALOG_PAGE = false;

const Template = (page: PageProps) => {
  // const router = useNavigationContext().navigation;
  const global = useGlobalContext();

  // console.log("page", router.currentRoute);
  // if (router.currentRoute.startsWith(`/${SLUG_KEY.PRODUCTS}`)) {
  //   const props = page as ProductPageProps;
  //   // key is needed for the page to render correctly with new states when navigation
  //   // occurs between dynamic pages /products/[id]
  //   return (
  //     <TmProductDetailWrapper
  //       product={props?.product}
  //       mayLikeProducts={props.mayLikeProducts}
  //       breadcrumbCatalogLabel={page.fields.title}
  //       key={props?.product?.id}
  //     />
  //   );
  // }

  // // TODO: we should create a tm-search in CMS
  // if (router.asPath.startsWith(`/${SLUG_KEY.SEARCH}`)) {
  //   const rawQuery = router.query ? router.query.query : "";
  //   const parsedQuery = Array.isArray(rawQuery) ? rawQuery.join("") : rawQuery;
  //   const searchPage = page as SearchPageProps;
  //   const template = searchPage.fields.template as CMSCatalog;
  //   return (
  //     <TmCatalogWrapper
  //       template={template}
  //       query={parsedQuery}
  //       key={template.entryTitle}
  //       resolveAccessToken={resolveAccessToken}
  //       cardRenderer={cardRenderer}
  //       slugKey={SLUG_KEY.SEARCH}
  //       placeholderImagePath={PLACEHOLDER_IMAGE_PATH}
  //       isSearchPage
  //       {...global}
  //     />
  //   );
  // }
  // if (page.fields.template.contentTypeId === "tmBasket")
  //   return (
  //     <TmBasketWrapper
  //       key={page.contentTypeId}
  //       template={page.fields.template as CMSBasket}
  //     />
  //   );
  // if (page.fields.template.contentTypeId === "tmCatalog") {
  //   return (
  //     <TmCatalogWrapper
  //       key={page.contentTypeId}
  //       template={page.fields.template as CMSCatalog}
  //       resolveAccessToken={resolveAccessToken}
  //       slugKey={SLUG_KEY.CATALOG}
  //       cardRenderer={cardRenderer}
  //       placeholderImagePath={PLACEHOLDER_IMAGE_PATH}
  //       {...global}
  //     />
  //   );
  // }
  if (page.fields.template.contentTypeId === "tmFlex")
    return (
      <TmFlexWrapper
        key={page.contentTypeId}
        template={page.fields.template as CMSFlex}
        refresh={page.refresh}
      />
    );
  // if (page.fields.template.contentTypeId === "tmStepper")
  //   return (
  //     <TmStepperWrapper
  //       key={page.contentTypeId}
  //       template={page.fields.template as CMSStepper}
  //     />
  //   );
  // if (page.fields.template.contentTypeId === "tmLogin")
  //   return (
  //     <TmLoginWrapper
  //       key={page.contentTypeId}
  //       template={page.fields.template as CMSLogin}
  //     />
  //   );
  // if (page.fields.template.contentTypeId === "tmContactUs")
  //   return (
  //     <TmContactUsWrapper
  //       key={page.contentTypeId}
  //       template={page.fields.template as CMSContactUs}
  //     />
  //   );
  // if (page.fields.template.contentTypeId === "tmCheckoutCompleted") {
  //   return (
  //     <TmCheckoutCompletedWrapper
  //       key={page.contentTypeId}
  //       template={page.fields.template as CMSCheckoutCompleted}
  //     />
  //   );
  // }
  // if (page.fields.template.contentTypeId === "tmLegalSupport") {
  //   return (
  //     <TmLegalSupportWrapper
  //       key={page.contentTypeId}
  //       template={page.fields.template as CMSLegalSupport}
  //     />
  //   );
  // }
  // if (page.fields.template.contentTypeId === "tmBlogArticle") {
  //   return (
  //     <TmBlogArticleWrapper
  //       key={page.contentTypeId}
  //       template={page.fields.template as CMSBlogArticle}
  //     />
  //   );
  // }
};

const resolveAccessTokenMock = (): Promise<string> => {
  return Promise.resolve("");
};

export const useContentfulPageToProps = (
  pageProps: PageProps | null | undefined,
  refresh?: {
    onRefresh: () => void;
    refreshing: boolean;
  }
): (PgPageProps & { head: HeadProps }) | null => {
  // const { state: searchState, search } = useSearchBox(resolveAccessTokenMock);
  // const results = useSearchBoxResults();
  // const router = useNavigationContext().navigation;
  const { state, updateBasket, deleteItemFromBasket } = useBasket();

  const basketState = {
    basket: undefined,
    notificationItem: undefined,
    isPending: undefined,
    availableShippingMethods: undefined,
    order: undefined,
  };
  // const {
  //   state: basketState,
  //   updateBasket,
  //   deleteItemFromBasket,
  // } = useBasket();

  /**
   * Shows search results in catalog or search page
   */
  // const showResults =
  //   SHOW_SEARCH_RESULTS_IN_CATALOG_PAGE ||
  //   (!router.currentRoute.includes(`/${SLUG_KEY.SEARCH}`) &&
  //     !router.currentRoute.includes(`/${SLUG_KEY.CATALOG}`));

  const searchOnSubmit = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    // if (
    //   typeof window !== "undefined" &&
    //   searchState.query &&
    //   searchState.query !== ""
    // ) {
    //   router.push(getSearchUrl(searchState.query));
    // }
  };

  // const isStickBarHidden = getStorageState(
  //   STICKBAR_KEY,
  //   BrowserStorage.SESSION_STORAGE
  // );
  const isStickBarHidden = true;
  const onCloseStickbar = () => {
    // setStorageState(STICKBAR_KEY, true, BrowserStorage.SESSION_STORAGE);
  };

  const isPathStartingWithSlugs = (
    path: string,
    slugs: (keyof typeof SLUG_KEY)[]
  ) => {
    return slugs.some((slug) => path.startsWith(`/${SLUG_KEY[slug]}`));
  };

  const search: (query: SearchQueryDto) => Promise<void> = async (query) => {};

  if (!pageProps || !pageProps.fields?.header || !pageProps.fields?.template)
    return null;

  const props: PgPageProps & { head: HeadProps } = {
    // head: normalizeHead(pageProps, environment.baseUrl),
    head: normalizeHead(pageProps, "www.test.com"),
    header: {
      ...normalizeHeader(pageProps.fields?.header, basketState, {
        search,
        updateBasket,
        deleteItemFromBasket,
        searchOnSubmit,
      }),
      isStickBarHidden,
      onCloseStickbar,
      // variant: isPathStartingWithSlugs(router.currentRoute, [
      //   "CHECKOUT",
      //   "LOGIN",
      // ])
      variant: false ? "compact" : "default",
      onArrowButtonClick: () => {
        console.log("arrow button clicked");
      },
    },
    children: <Template refresh={refresh} {...pageProps} />,
    footer: normalizeFooter(pageProps.fields.footer),
  };

  return props;
};
