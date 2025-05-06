"use client";

import React from "react";
import Link from "next/link";
import { Platform, Pressable, useWindowDimensions, View } from "react-native";

import { usePathname } from "next/navigation";
import { Ionicons } from "@expo/vector-icons";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../tailwind.config";

type IoniconName = React.ComponentProps<typeof Ionicons>["name"];

type TabItemProps = {
  name: string;
  path: string;
  icon: IoniconName;
  activeIcon: IoniconName;
};

const tabRoutes: TabItemProps[] = [
  { name: "Home", path: "/home", icon: "home-outline", activeIcon: "home" },
  { name: "Cart", path: "/cart", icon: "cart-outline", activeIcon: "cart" },
  {
    name: "Profile",
    path: "/profile",
    icon: "person-outline",
    activeIcon: "person",
  },
  { name: "Menu", path: "/menu", icon: "menu", activeIcon: "menu" },
];

const iconSize = 30;

// Resolve the full Tailwind config to access theme values
const fullConfig = resolveConfig(tailwindConfig);

function TabBar() {
  const pathname = usePathname();
  const { width } = useWindowDimensions();

  // Access the breakpoint value directly from the resolved Tailwind config
  const lgBreakpoint = parseInt(fullConfig.theme.screens.lg, 10);
  const isLargeScreen = width >= lgBreakpoint;

  const isHidden = Platform.OS === "web" && isLargeScreen;

  return (
    <View
      className={`
      ${isHidden ? "hidden" : "flex"} {/* Conditionally hide or show */}
      flex-row
      h-[60px]
      bg-white
      border-t border-gray-300 {/* Equivalent to #ccc */}
    `}
    >
      {tabRoutes.map((route) => {
        const isActive =
          pathname === route.path || pathname.startsWith(route.path + "/");
        const iconName: IoniconName = isActive ? route.activeIcon : route.icon;
        const color = isActive ? "#173FAB" : "gray";

        return (
          <Link
            key={route.name}
            href={route.path}
            className="flex-1 no-underline flex items-center justify-center" // Combined styles for Link
          >
            <Pressable className="flex-1 w-full h-full flex items-center justify-center bg-transparent border-none p-0 cursor-pointer">
              <Ionicons name={iconName} size={iconSize} color={color} />
            </Pressable>
          </Link>
        );
      })}
    </View>
  );
}

export default TabBar;
