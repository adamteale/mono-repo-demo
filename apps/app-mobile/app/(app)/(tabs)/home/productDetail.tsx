import React from "react";
import { useLocalSearchParams } from "expo-router";
import {
  ProductDetailScreen,
  ProductDetailScreenProps,
} from "@Presentation/screens/ProductDetailScreen";

export default function ProductDetailRoute() {
  const params = useLocalSearchParams<ProductDetailScreenProps>();
  return <ProductDetailScreen {...params} />;
}
