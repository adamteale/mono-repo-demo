import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform, useWindowDimensions } from "react-native";
import { theme } from "@atomic-library/src";

enum MainTabbarRoutes {
  Cart = "cart",
  Home = "home",
  Menu = "menu",
  Profile = "profile",
}

export default function TabLayout() {
  const iconSize = 40;
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= theme.breakpoints.lg;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ color }) => {
          let iconName: string | undefined;
          switch (route.name) {
            case MainTabbarRoutes.Home:
              iconName = "home-outline";
              break;
            case MainTabbarRoutes.Cart:
              iconName = "cart-outline";
              break;
            case MainTabbarRoutes.Menu:
              iconName = "menu";
              break;
            case MainTabbarRoutes.Profile:
              iconName = "id-card-outline";
              break;
          }
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel: false,
        tabBarStyle: {
          display: Platform.OS === "web" && isLargeScreen ? "none" : "flex",
        },
        tabBarIconStyle: {
          height: 40,
          width: 50,
        },
      })}
    >
      <Tabs.Screen
        name={MainTabbarRoutes.Home}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name={MainTabbarRoutes.Cart}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name={MainTabbarRoutes.Profile}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name={MainTabbarRoutes.Menu}
        options={{ headerShown: false }}
      />
    </Tabs>
  );
}
