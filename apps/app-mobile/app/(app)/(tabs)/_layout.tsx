import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

enum MainTabbarRoutes {
  Cart = "cart",
  Home = "home",
  Menu = "menu",
  Profile = "profile",
}

export default function TabLayout() {
  const iconSize = 40;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true, // Show headers for tab screens
        tabBarIcon: ({ focused, color, size }) => {
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
        tabBarStyle: {},
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
