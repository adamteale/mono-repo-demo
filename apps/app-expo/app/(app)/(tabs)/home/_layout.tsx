import React from "react";

import { Stack } from "expo-router";
import {
  CustomHeader,
  CustomHeaderB,
} from "@app-expo/src/presentation/components";

export enum HomeRoutes {
  Home = "home",
  ProductDetail = "productDetail",
}

export default function HomeStackLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <CustomHeader />,
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
