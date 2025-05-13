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
