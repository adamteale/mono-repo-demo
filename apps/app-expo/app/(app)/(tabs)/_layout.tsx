import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform, useWindowDimensions, ViewStyle } from "react-native";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@mono-repo-demo/tailwind-config";

enum MainTabbarRoutes {
  Cart = "cart",
  Home = "home",
  Menu = "menu",
  Profile = "profile",
}

// Resolve the full Tailwind config to access theme values
const fullConfig = resolveConfig(tailwindConfig);

export default function TabLayout() {
  const iconSize = 40;
  const { width } = useWindowDimensions();

  // Access the breakpoint value directly from the resolved Tailwind config
  const lgBreakpoint = parseInt(fullConfig.theme.screens.md, 10); // Assuming lg is defined in pixels
  const isLargeScreen = width >= lgBreakpoint;

  const isWebAndLarge = Platform.OS === "web" && isLargeScreen;

  const getTabBarStyles = () => {
    return {
      display: isWebAndLarge ? "none" : "flex",
    };
  };

  console.log("----TabLayout");

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false, // Keep header shown status consistent or manage as needed
        tabBarIcon: ({ color, focused }) => {
          // Add 'focused' parameter
          let iconName: React.ComponentProps<typeof Ionicons>["name"];
          switch (route.name) {
            case MainTabbarRoutes.Home:
              iconName = focused ? "home" : "home-outline";
              break;
            case MainTabbarRoutes.Cart:
              iconName = focused ? "cart" : "cart-outline";
              break;
            case MainTabbarRoutes.Menu:
              iconName = "menu";
              break;
            case MainTabbarRoutes.Profile:
              // Corrected icon name and added focused state
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "alert-circle-outline"; // Provide a default fallback
          }
          // Ensure iconName is assigned before returning
          if (!iconName) return null;

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: "#182958",
        tabBarInactiveTintColor: "#888",
        tabBarShowLabel: false,
        tabBarStyle: getTabBarStyles() as ViewStyle,
        tabBarIconStyle: {
          // These might need to remain as inline styles if complex
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
