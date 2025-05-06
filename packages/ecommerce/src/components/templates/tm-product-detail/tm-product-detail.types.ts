import {
  AtImageProps,
  MlBreadcrumbProps,
  OrCarouselProps,
} from "@mono-repo-demo/atomic-library";
import { OrProductDetailsProps } from "../../organisms";

export interface TmProductDetailProps {
  productDetails: OrProductDetailsProps;
  breadcrumb: MlBreadcrumbProps;
  carouselProps: OrCarouselProps;
  productImages: AtImageProps[];
}
