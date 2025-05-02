import { CMSGlobalConfig, CMSPage } from "@mono-repo-demo/atomic-library";
import { Product } from "./types";

export interface PageProps extends CMSPage {
  globalData?: CMSGlobalConfig | null;
}

export interface ProductPageProps extends PageProps {
  product: Product;
  mayLikeProducts: Product[];
}

export interface SearchPageProps extends PageProps {
  searchString?: string;
}
