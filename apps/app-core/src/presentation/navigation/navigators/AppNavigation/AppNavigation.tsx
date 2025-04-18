import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppNavigationRoutes } from "./types";
import { MainNavigation } from "../MainNavigation/MainNavigation";
import { useNavigationHandler } from "../../hooks/useNavigationHandler";

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const navigation = useNavigationHandler();

  return (
    // <NavigationContainer ref={navigation.navigationRef}>
    <Stack.Navigator
      initialRouteName={AppNavigationRoutes.MainNavigation}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={AppNavigationRoutes.MainNavigation}
        options={{ headerShown: false }}
        component={MainNavigation}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};
