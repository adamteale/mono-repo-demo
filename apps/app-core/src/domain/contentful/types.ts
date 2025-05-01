import { CMSGlobalConfig, CMSPage } from "@mono-repo-demo/atomic-library";
import { Product } from "./types/product";

export type IncludeDepth =
  | 0
  | 2
  | 3
  | 4
  | 1
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | undefined;

export interface Page {
  fields: {
    [key: string]: any;
  };
  tags?: string[];
  contentTypeId: string;
  updatedAt: string;
  locale?: string;
}

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

export interface IGetEntriesProps {
  contentTypeId: string;
  query?: {
    [key: string]: any;
  };
}

export interface Entry {
  fields: {
    [key: string]: any;
  };
  tags?: string[];
  contentTypeId: string;
  updatedAt: string;
  locale?: string;
}

export interface EntriesDto {
  total: number;
  skip: number;
  limit: number;
  entries: Entry[];
}

export interface IGetPageBySlugProps {
  contentTypeId?: string;
  slug: string;
}

export interface PageDto extends Entry {}

export interface ErrorDto {
  errors: string[];
}
