"use client";

import React from "react";
import Link from "next/link";
import { Platform, useWindowDimensions } from "react-native";

import { usePathname } from "next/navigation";
import { Ionicons } from "@expo/vector-icons";

import styled from "styled-components";

import { theme } from "@mono-repo-demo/atomic-library";

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

const TabBarContainer = styled.div<{ $isHidden?: boolean }>`
  display: ${({ $isHidden }) => ($isHidden ? "none" : "flex")};
  flex-direction: row;
  height: 60px;
  background-color: #fff;
  border-top: 1px solid #ccc;
`;

const TabItemLink = styled(Link)`
  // Style the Next.js Link component
  flex: 1;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TabItemPressable = styled.button`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  border-bottom: none;
`;

export default function TabBar() {
  const pathname = usePathname();
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= theme.breakpoints.lg;
  const isHidden = Platform.OS === "web" && isLargeScreen;

  return (
    <TabBarContainer $isHidden={isHidden}>
      {tabRoutes.map((route) => {
        const isActive =
          pathname === route.path || pathname.startsWith(route.path + "/");
        const iconName: IoniconName = isActive ? route.activeIcon : route.icon;
        const color = isActive ? "#173FAB" : "gray";

        return (
          <TabItemLink key={route.name} href={route.path}>
            <TabItemPressable>
              <Ionicons name={iconName} size={iconSize} color={color} />
              {/* <TabLabel style={{ color: color }}>{route.name}</TabLabel> */}
            </TabItemPressable>
          </TabItemLink>
        );
      })}
    </TabBarContainer>
  );
}
