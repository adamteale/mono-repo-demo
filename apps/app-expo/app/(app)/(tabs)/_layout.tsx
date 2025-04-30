import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform, useWindowDimensions } from "react-native";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config";

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
  const lgBreakpoint = parseInt(fullConfig.theme.screens.lg, 10); // Assuming lg is defined in pixels
  const isLargeScreen = width >= lgBreakpoint;

  const isWebAndLarge = Platform.OS === "web" && isLargeScreen;

  const getTabBarStyles = () => {
    return {
      display: isWebAndLarge ? "none" : "flex",
    };
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false, // Keep header shown status consistent or manage as needed
        tabBarIcon: ({ color, focused }) => {
          // Add 'focused' parameter
          let iconName: React.ComponentProps<typeof Ionicons>["name"]; // Use correct type
          switch (route.name) {
            case MainTabbarRoutes.Home:
              iconName = focused ? "home" : "home-outline"; // Use active/inactive icons
              break;
            case MainTabbarRoutes.Cart:
              iconName = focused ? "cart" : "cart-outline"; // Use active/inactive icons
              break;
            case MainTabbarRoutes.Menu:
              iconName = "menu"; // No distinct active state needed?
              break;
            case MainTabbarRoutes.Profile:
              // Corrected icon name and added focused state
              iconName = focused ? "person" : "person-outline";
              break;
            default:
              iconName = "alert-circle-outline"; // Provide a default fallback
          }
          // Ensure iconName is assigned before returning
          if (!iconName) return null; // Or return a placeholder icon

          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
        // Use color values directly or resolve from Tailwind config if needed
        tabBarActiveTintColor: fullConfig.theme.colors.blue[500] || "blue", // Example: Accessing blue-500
        tabBarInactiveTintColor: fullConfig.theme.colors.gray[500] || "gray", // Example: Accessing gray-500
        tabBarShowLabel: false,
        tabBarStyle: getTabBarStyles(),
        tabBarIconStyle: {
          // These might need to remain as inline styles if complex
          height: 40,
          width: 50,
        },
      })}
    >
      {/* Keep headerShown consistent across screens if hiding globally */}
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
