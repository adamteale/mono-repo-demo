import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import {
  MlTextfield,
  PriceSmartLogo,
  PriceSmartLogoLarge,
} from "@mono-repo-demo/atomic-library"; // Assuming AtButton is from here if needed

// Removed: import getStyles from "./styles";
import { useNavigationHandler } from "../../navigation/useNavigationHandler";
// Removed: import { theme } from "@atomic-library/src"; // No longer needed for breakpoint

// Note: Tailwind doesn't directly read breakpoints into JS easily without extra setup.
// It's usually simpler to manage the visibility directly with breakpoint classes.

export function CustomHeader() {
  const { top } = useSafeAreaInsets();
  // Removed: const styles = getStyles(top);
  const navigation = useNavigationHandler();
  // Removed: const width = useWindowDimensions().width;
  // Removed: const isLargeScreen = width >= theme.breakpoints.lg;

  // Calculate dynamic styles that depend on safe area
  const headerStyle = {
    height: top + 60,
    paddingTop: top + 10,
  };

  return (
    // Apply base styles and dynamic height/padding
    <View
      className="bg-backgroundPrimary py-4 px-5 flex-row items-center justify-between gap-2" // Converted styles from customHeader
      style={headerStyle} // Keep dynamic styles inline
    >
      <StatusBar barStyle="light-content" backgroundColor="#182958" />{" "}
      {/* Match bg */}
      {/* Large Screen Logo - Hidden below lg, shown above */}
      <PriceSmartLogoLarge className="hidden lg:flex" />
      {/* Small Screen Logo & Back Button - Shown below lg, hidden above */}
      <View className="flex-row items-center lg:hidden">
        <TouchableOpacity
          onPress={() => navigation.navigateBack()}
          className="p-1" // Converted backButton style
        >
          <Ionicons name="apps-sharp" size={40} color="white" />
        </TouchableOpacity>
        <PriceSmartLogo />
      </View>
      {/* Search Field */}
      <MlTextfield
        value=""
        onChange={(value) => console.log(value)}
        placeholder="Search for..."
        // Add necessary props/styling for MlTextfield if needed
      />
      {/* Large Screen Menu Items - Hidden below lg, shown above */}
      <View className="hidden lg:flex flex-row items-center gap-2.5 px-10">
        {/* Country */}
        <View className="flex-col items-center">
          {/* Using inline style for large font size not covered by default Tailwind */}
          <Text style={{ fontSize: 40 }}>🇨🇷</Text>
          {/* Using arbitrary value for precise negative positioning */}
          <Text className="text-white -mt-[10px]">Costa Rica</Text>
        </View>

        {/* Language */}
        <View className="pl-5 flex-row items-center gap-2.5">
          <Ionicons name="globe-outline" size={30} color="white" />
          <View className="flex-col">
            <Text className="text-white">Language</Text>
            <View className="flex-row items-center">
              <Text className="text-white">English</Text>
              <Ionicons
                name="chevron-down-outline"
                size={20}
                color="white"
                className="ml-1" // Converted marginLeft
              />
            </View>
          </View>
        </View>

        {/* Account */}
        <View className="pl-5 flex-row items-center gap-2.5">
          <Ionicons name="person-circle-outline" size={30} color="white" />
          <View>
            <Text className="text-white">{"Account\nLog In"}</Text>
          </View>
        </View>

        {/* Cart */}
        <View className="pl-5 flex-row items-center gap-2.5">
          <Text className="text-white">Cart</Text>
          <Ionicons name="cart-outline" size={30} color="white" />
        </View>
      </View>
    </View>
  );
}
