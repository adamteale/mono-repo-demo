import { Configure, InstantSearch } from "react-instantsearch";
import { liteClient as algoliasearch } from "algoliasearch/lite";

import { createContext, ReactNode, useMemo, useReducer } from "react";
import {
  SearchAction,
  SearchActionTypes,
  SearchContextStatus,
  SearchDispatch,
  SearchState,
} from "./types";
import { environment } from "../config/environment";
import { routing } from "./filter-to-path";
import { useAutocomplete } from "./use-autocomplete";

export const SHOW_SEARCH_RESULTS_IN_CATALOG_PAGE = false;

const SearchBoxContext = createContext<
  | {
      state: SearchState;
      dispatch: SearchDispatch;
    }
  | undefined
>(undefined);
SearchBoxContext.displayName = "SearchBoxContext";

const searchBoxReducer = (
  state: SearchState,
  action: SearchAction
): SearchState => {
  switch (action.type) {
    case SearchActionTypes.START_ACTION: {
      return {
        ...state,
        status: SearchContextStatus.PENDING,
        isResolved: false,
        error: undefined,
      };
    }
    case SearchActionTypes.SEARCH: {
      return {
        ...state,
        status: SearchContextStatus.RESOLVED,
        results: action.payload,
        isResolved: true,
        error: undefined,
      };
    }
    case SearchActionTypes.UPDATE_QUERY: {
      return {
        ...state,
        query: action.payload as string,
      };
    }
    case SearchActionTypes.FAIL_ACTION: {
      return {
        ...state,
        status: SearchContextStatus.REJECTED,
        results: undefined,
        isResolved: false,
        error: action.error,
      };
    }
    case SearchActionTypes.SET_AUTOCOMPLETE_API: {
      return {
        ...state,
        autocomplete: action.payload,
      };
    }
    case SearchActionTypes.SET_AUTOCOMPLETE_STATE: {
      return {
        ...state,
        autocompleteState: action.payload,
      };
    }
    default: {
      console.error("Invalid search action");
      return state;
    }
  }
};

const SearchBoxProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<SearchState, [SearchAction]>(
    searchBoxReducer,
    {
      isResolved: false,
      status: SearchContextStatus.INITIAL,
    }
  );

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const appId = environment.algolia.appId ?? "";
  const apiKey = environment.algolia.apiKey ?? "";
  const indexName = environment.algolia.indexName ?? "";
  const featuredProductIndexName =
    environment.algolia.featuredProductIndexName ?? "";
  const searchClient = algoliasearch(appId, apiKey);

  useAutocomplete(searchClient, featuredProductIndexName, dispatch, state);

  return (
    // @ts-expect-error TODO:remove this when react-instantsearch updates react version to 19
    <InstantSearch
      routing={routing}
      future={{ preserveSharedStateOnUnmount: true }}
      searchClient={searchClient}
      indexName={indexName}
    >
      <Configure hitsPerPage={9} />
      <SearchBoxContext.Provider value={value}>
        {children}
      </SearchBoxContext.Provider>
    </InstantSearch>
  );
};

export { SearchBoxProvider, SearchBoxContext };
