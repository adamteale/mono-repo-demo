import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { MainNavigationScreens } from "./types";
import { CartScreen, MenuScreen, ProfileScreen } from "../../../screens";
import { HomeNavigation } from "../HomeNavigation/HomeNavigation";

const Tab = createBottomTabNavigator();

export const MainNavigation = () => {
  const iconSize = 40;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string | undefined;
          switch (route.name) {
            case MainNavigationScreens.Home:
              iconName = "home-outline";
              break;
            case MainNavigationScreens.Cart:
              iconName = "cart-outline";
              break;
            case MainNavigationScreens.Menu:
              iconName = "menu";
              break;
            case MainNavigationScreens.Profile:
              iconName = "id-card-outline";
              break;
          }
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {},
        tabBarIconStyle: {
          height: 50,
          width: 50,
        },
        tabBarItemStyle: {
          paddingTop: 4,
          paddingBottom: 0,
        },
      })}
    >
      <Tab.Screen
        name={MainNavigationScreens.Home}
        options={{ headerShown: false }}
        component={HomeNavigation}
      />
      <Tab.Screen
        name={MainNavigationScreens.Cart}
        options={{ headerShown: false }}
        component={CartScreen}
      />
      <Tab.Screen
        name={MainNavigationScreens.Profile}
        options={{ headerShown: false }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name={MainNavigationScreens.Menu}
        options={{ headerShown: false }}
        component={MenuScreen}
      />
    </Tab.Navigator>
  );
};
