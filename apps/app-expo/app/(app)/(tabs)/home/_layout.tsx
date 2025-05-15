import React from "react";

import { Stack } from "expo-router";
import { CustomHeaderB } from "@app-expo/src/presentation/components";

export enum HomeRoutes {
  Home = "index",
  ProductDetail = "productDetail",
}

export default function HomeStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        // header: () => <CustomHeader />,
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
