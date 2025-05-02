import { Rating } from "@mono-repo-demo/atomic-library";
import { TmProductDetailProps } from "./tm-product-detail.types";

export const mockRating: Rating = 5;

export const defaultProps: TmProductDetailProps = {
  productDetails: {
    product: {
      brand: "Test Brand",
      name: "Test Product Name",
      id: "Test Product ID",
      price: "1200",
      originalPrice: "1000",
      promotion: "d",
      rating: mockRating,
      stock: 10,
      sku: "Test Product SKU",
    },
    addToBasket: {
      defaultLabel: "Test defaultLabel",
      addedLabel: "Test addedLabel",
      notifyMeLabel: "Test notifyMeLabel",
      notifyMeOnClick: () => {},
      onClick: () => Promise.resolve(true),
      onError: () => {},
    },
  },
  breadcrumb: {
    links: [
      { label: "Home", href: "/" },
      { label: "Category", href: "/category" },
    ],
    className: "",
  },
  carouselProps: {
    title: "Some Carousel",
    children: ["ChildrenCarousel", "ChildrenCarousel2"],
  },
  productImages: [
    { src: "TestSrcImage1", alt: "image1.jpg" },
    { src: "TestSrcImage2", alt: "image2.jpg" },
  ],
};
