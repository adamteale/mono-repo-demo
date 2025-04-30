import React from "react";

import { Stack } from "expo-router";
import {
  CustomHeader,
  CustomHeaderB,
} from "@app-expo/src/presentation/components";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export enum HomeRoutes {
  Home = "home",
  ProductDetail = "productDetail",
}

export default function HomeStackLayout() {
  const { top } = useSafeAreaInsets();

  return (
    <Stack
      screenOptions={{
        header: () => <CustomHeader topInset={top} />,
      }}
    >
      <Stack.Screen name={HomeRoutes.Home} />
      <Stack.Screen
        name={HomeRoutes.ProductDetail}
        options={{
          header: () => <CustomHeaderB />,
        }}
      />
    </Stack>
  );
}
