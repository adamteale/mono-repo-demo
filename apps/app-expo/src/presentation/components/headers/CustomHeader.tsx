import React from "react";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import {
  MlTextfield,
  PriceSmartLogo,
  PriceSmartLogoLarge,
} from "@mono-repo-demo/atomic-library";

import { useNavigationHandler } from "../../navigation/useNavigationHandler";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig);

export function CustomHeader() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigationHandler();
  const { width } = useWindowDimensions();

  const lgBreakpoint = parseInt(fullConfig.theme.screens.lg, 10);
  const isLargeScreen = width >= lgBreakpoint;

  const headerStyle = {
    height: top + 80,
    paddingTop: top + 10,
  };

  return (
    <View
      className="bg-backgroundPrimary py-4 px-5 flex-row items-center justify-between gap-2"
      style={headerStyle}
    >
      <StatusBar barStyle="light-content" backgroundColor="#182958" />

      {isLargeScreen ? (
        <PriceSmartLogoLarge />
      ) : (
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => navigation.navigateBack()}
            className="p-[5px]"
            accessibilityRole="button"
          >
            <Ionicons name="apps-sharp" size={40} color="white" />
          </TouchableOpacity>
          <PriceSmartLogo />
        </View>
      )}

      <MlTextfield
        value=""
        onChange={(value) => console.log(value)}
        placeholder="Search for..."
        accessibilityLabel="Search"
        accessibilityRole="search"
        testID="search-input"
      />

      {isLargeScreen && (
        <View className="flex flex-row items-center gap-2.5 px-10">
          {/* Country */}
          <View className="flex-col items-center">
            <Text className="text-[40px]">🇨🇷</Text>
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
                  className="ml-[5px]"
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
      )}
    </View>
  );
}
