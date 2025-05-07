// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// // import { useCurrentRefinements, useInstantSearch, usePagination, useSearchBox } from 'react-instantsearch'
// import { stringify, parse } from "qs";
// import { Filter } from "./tm-catalog-wrapper.types";

// const CONCATENATE_STRING = "-or-";

// /**
//  * These should come directly from CMS and should not be needed
//  * we're using this map to not break the `common`
//  * implementation which relies on these `keys` for the filters
//  * without algolia to work
//  */
// const algoliaKeyMap = {
//   brand: "variants.brand",
//   size: "variants.size",
//   color: "variants.color.key",
//   price: "variants.price.amount",
//   categories: "categories", // not being used
// };

// const algoliaPathMap = {
//   brands: "variants.brand",
//   size: "variants.size",
//   color: "variants.color.key",
//   price: "variants.price.amount",
//   categories: "categories", // not being used
// };

// export const useQueryParams = (
//   useFiltersAsPath: boolean | undefined,
//   filters: Filter[]
// ) => {
//   // const [query, setQuery] = useState("");
//   // const [extraParams, setExtraParams] = useState<string>("");
//   // const { items } = useCurrentRefinements();
//   // const { currentRefinement: currentPage } = usePagination();
//   // const { setUiState } = useInstantSearch();
//   // const isPageLoaded = useRef(false);

//   /**
//    * This function is used to get the query params from the URL and load them
//    * into what algolia calls the UiState
//    */
//   // useLayoutEffect(() => {
//   //   const params = parse(location.search, { ignoreQueryPrefix: true })
//   //   const hasQueryParams = Object.keys(params).length > 0
//   //   const hasMultiplePaths = location.pathname.split('/').length > 1

//   //   if (!isPageLoaded.current && (hasQueryParams || hasMultiplePaths)) {
//   //     setUiState((prevState) => {
//   //       /**
//   //        * Each UiState corresponds to an index
//   //        * this needs to be refactored if the catalog
//   //        * will support multiple indices queries
//   //        */
//   //       const index = Object.keys(prevState)[0]

//   //       if (!index) return prevState

//   //       let refinements: Record<string, string[]> = {}

//   //       if (useFiltersAsPath) {
//   //         refinements = getRefinementsFromPath()
//   //       } else {
//   //         refinements = getRefinementsFromQueryParams()
//   //       }

//   //       const page = params.page && typeof params.page === 'string' ? parseInt(params.page) : undefined
//   //       const query = params.query && typeof params.query === 'string' ? params.query : undefined
//   //       const sort = params.sort && typeof params.sort === 'string' ? params.sort : undefined
//   //       const order = params.order && typeof params.order === 'string' ? params.order : undefined

//   //       return {
//   //         ...prevState,
//   //         [index]: {
//   //           ...prevState[index],
//   //           page,
//   //           query,
//   //           refinementList: refinements,
//   //         },
//   //       }
//   //     })
//   //   }

//   //   isPageLoaded.current = true

//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, [])

//   useEffect(() => {
//     const activeParams: Record<string, string> = {};

//     items.forEach(({ attribute, refinements }) => {
//       activeParams[attribute] = refinements.map((item) => item.value).join(",");
//     });

//     let queryString = "";

//     if (useFiltersAsPath) {
//       queryString = filtersToPath(activeParams, filters);
//     } else {
//       queryString = "?" + stringify(activeParams);
//     }

//     setQuery(queryString);
//   }, [items, useFiltersAsPath, filters]);

//   // useEffect(() => {
//   //   const params = parse(location.search, { ignoreQueryPrefix: true })
//   //   const query = params.query && typeof params.query === 'string' ? params.query : undefined
//   //   const extraParams: Record<string, string | number> = { page: currentPage + 1 }

//   //   if (query) {
//   //     extraParams.query = query
//   //   }

//   //   const extraParamsQs = stringify(extraParams)
//   //   setExtraParams(extraParamsQs)
//   // }, [currentPage])

//   const finalParams = query.includes("?")
//     ? `${query}&${extraParams}`
//     : `${query}?${extraParams}`;

//   return {
//     queryParams: finalParams,
//     isQueryLoaded: isPageLoaded.current,
//   };
// };

// const getRefinementsFromQueryParams = () => {
//   const queryParams = parse(location.search, { ignoreQueryPrefix: true });
//   const refinements: Record<string, string[]> = {};

//   for (const key of Object.keys(queryParams)) {
//     if (key === "page") continue;
//     if (key === "query") continue;
//     if (key === "sort") continue;

//     /**
//      * Proper validation to see if the refinement is valid
//      * not sure if algolia provides a way to do this
//      *
//      * Probably testing if the key matches to a key provided
//      * in the CMS might be enough
//      */
//     if (typeof queryParams[key] === "string") {
//       //@ts-ignore this should work but ts wont build idk why????
//       refinements[key] = queryParams[key].split(",");
//     }
//   }

//   return refinements;
// };

// const getRefinementsFromPath = () => {
//   const path = location.pathname;
//   const [_, ...keys] = path.split("/").filter(Boolean);
//   const refinements: Record<string, string[]> = {};

//   for (const key of keys) {
//     const [filterKey, value] = key
//       .replaceAll(CONCATENATE_STRING, ",")
//       .split("-");

//     const algoliaKey =
//       algoliaPathMap[filterKey as keyof typeof algoliaPathMap] ?? null;

//     if (!algoliaKey) continue;

//     refinements[algoliaKey] = decodeURIComponent(value).split(",");
//   }

//   return refinements;
// };

// const filtersToPath = (
//   activeFilters: Record<string, string>,
//   filterKeys: Filter[]
// ): string => {
//   if (!activeFilters || !filterKeys) return "";

//   const filtersAsPath = Object.keys(activeFilters)
//     .map((key) => {
//       let finalValue;
//       const filter = activeFilters[key];
//       const mappedKey = algoliaKeyMap[key as keyof typeof algoliaKeyMap] ?? key;
//       const filterKey = filterKeys.find(
//         (f) => f.key === mappedKey || key.includes(f.key.toLowerCase())
//       );

//       if (!filterKey) return undefined;

//       if (filterKey.type === "list-range") {
//         finalValue = filter;
//       } else {
//         finalValue = filter.split(",").join(CONCATENATE_STRING);
//       }

//       const name = filterKey.title.toLowerCase() ?? key;

//       return `${name}-${finalValue}`;
//     })
//     .filter(Boolean);

//   return filtersAsPath.length > 0 ? `/${filtersAsPath.join("/")}` : "";
// };
