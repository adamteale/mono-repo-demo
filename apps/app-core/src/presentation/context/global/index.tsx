import { createContext, useContext } from "react";
import { Filter } from "../../components/search-service";

export interface GlobalConfig {
  filters?: Filter[];
  sortByFilterOptions?: {
    label: string;
    order: "ascendant" | "descendant";
    sort: "price" | "name";
  }[];
  catalogLabels?: {
    sortByLabel?: string;
    resultCountLabel?: string;
    seeMoreLabel?: string;
    filterTitle?: string;
    filterModalOpenFiltersLabel?: string;
    filterModalShowResultsLabel?: string;
    filterModalTitle?: string;
    filterModalCloseIconLabel?: string;
    homeBreadcrumbLabel?: string;
    searchTitle?: string;
    noResultLabel?: string;
  };
  colorPickerLabels?: {
    beige: string;
    black: string;
    blue: string;
    brown: string;
    gold: string;
    green: string;
    grey: string;
    lightBlue: string;
    oliv: string;
    orange: string;
    petrol: string;
    pink: string;
    purple: string;
    red: string;
    silver: string;
    turquoise: string;
    white: string;
    yellow: string;
  };
}

export const GlobalContext = createContext<GlobalConfig | undefined>(undefined);
GlobalContext.displayName = "GlobalContext";

export const useGlobalContext = () => useContext(GlobalContext) ?? {};
