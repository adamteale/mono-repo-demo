// import { useContext, useEffect, useRef, useState } from "react";
// // import { useSearchBox as useInstantSearch } from 'react-instantsearch'

// import { SearchActionTypes, UseSearch } from "./types";
// import { SearchBoxContext } from "../";

// import { useRouter } from "next/router";

// export const useSearchBox = (
//   resolveAccessToken: () => Promise<string>
// ): UseSearch => {
//   const context = useContext(SearchBoxContext);

//   // const { refine, clear } = useInstantSearch()

//   const [lastVisitedUrl, setLastVisitedUrl] = useState<string>();
//   const router = useRouter();
//   const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   if (!context) {
//     throw new Error("useSearch must be used within a SearchProvider");
//   }

//   const autocompleteApi = context?.state.autocomplete;
//   const inputProps = autocompleteApi?.getInputProps({ inputElement: null });

//   useEffect(() => {
//     // Refresh query if the page has changed
//     // Useful when user has searched something and clicks on some link in the search-results component
//     const url = router.asPath.split("?")[0];
//     if (!lastVisitedUrl || lastVisitedUrl !== url) {
//       setLastVisitedUrl(url);
//       if (context?.state.query)
//         context.dispatch({
//           type: SearchActionTypes.UPDATE_QUERY,
//           payload: undefined,
//         });
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [router.asPath]);
//   const search: UseSearch["search"] = async ({ text }) => {
//     if (debounceRef.current) {
//       clearTimeout(debounceRef.current);
//     }

//     context.dispatch({ type: SearchActionTypes.UPDATE_QUERY, payload: text });

//     debounceRef.current = setTimeout(() => {
//       if (!text) {
//         context.dispatch({
//           type: SearchActionTypes.SEARCH,
//           payload: undefined,
//         });
//         inputProps?.onChange({ currentTarget: { value: "" } } as any);
//         // clear()
//       } else {
//         inputProps?.onChange({ currentTarget: { value: text } } as any);
//         // refine(text)
//       }
//     }, 250);
//   };
//   return { state: context.state, search };
// };
