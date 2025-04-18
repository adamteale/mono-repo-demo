import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "@Presentation/screens/HomeScreen";
import { HomeNavigationStackScreen } from "./types";
import { ProductDetailScreen } from "../../../screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={HomeNavigationStackScreen.Home}>
      <Stack.Screen name={HomeNavigationStackScreen.Home}>
        {() => <HomeScreen message="Hello from the mobile home screen!" />}
      </Stack.Screen>
      <Stack.Screen
        name={HomeNavigationStackScreen.ProductDetail}
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
