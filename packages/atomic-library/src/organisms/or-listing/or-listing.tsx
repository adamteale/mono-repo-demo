import { View } from "react-native";
import { OrListingProps } from "./or-listing.types";
import { productListingClasses } from "./or-listing.variants";

// Intended to be used passing a ReactNode of MlCardBlog or MlProductCard as children
export const OrListing = ({
  children,
  filter,
  dataTestId = "product-listing",
}: OrListingProps) => {
  return (
    <View
      className={productListingClasses({ filter })}
      data-testid={dataTestId}
    >
      {children}
    </View>
  );
};
