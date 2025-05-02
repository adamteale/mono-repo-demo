import { AtLinkProps } from "@mono-repo-demo/atomic-library";
import { Product, ProductSearchResult } from "../../../types";

export interface TmProductDetailWrapperProps {
  product: Product;
  mayLikeProducts?: ProductSearchResult[];
  labels?: {
    description?: string;
    materials?: string;
    care?: string;
    discountPromotion?: string;
    colorVariant?: string;
    sizeVariant?: string;
    addToCartDefault?: string;
  };
  reviewsLink?: Pick<AtLinkProps, "href" | "label" | "linkWrapper">;
  breadcrumbCatalogLabel: string;
}
