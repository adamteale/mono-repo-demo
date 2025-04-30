import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  MlTextfield,
  PriceSmartLogo,
  PriceSmartLogoLarge,
} from "@mono-repo-demo/atomic-library";

import { useNavigationContext } from "../../../../../app-core/src/presentation/context";

type CustomHeaderProps = {
  topInset: number;
};

export function CustomHeader({ topInset }: CustomHeaderProps) {
  const navigation = useNavigationContext();

  const customHeaderHeight = topInset + 60; // Calculate header height

  return (
    <View
      className="bg-[#182958] py-3 px-5 flex-row items-center justify-between gap-2"
      style={{ height: customHeaderHeight, paddingTop: topInset + 10 }}
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* Large Screen Logo */}
      <PriceSmartLogoLarge className="hidden lg:flex" />

      {/* Small Screen Logo and Back Button */}
      <View className="lg:hidden flex-row items-center">
        <TouchableOpacity
          onPress={() => navigation.navigation.navigateBack()}
          className="p-1"
        >
          <Ionicons name="apps-sharp" size={40} color="white" />
        </TouchableOpacity>
        <PriceSmartLogo />
      </View>

      <MlTextfield
        value=""
        onChange={(value) => console.log(value)}
        placeholder="Serach for..."
      />

      {/* Large Screen Menu Items */}
      <View className="hidden lg:flex flex-row gap-2.5 px-10 items-center justify-center">
        <View className="flex-col items-center">
          <Text style={{ fontSize: 40 }}>🇨🇷</Text>
          <Text className="text-white top--2.5">Costa Rica</Text>
        </View>

        <View className="pl-5 flex-row gap-2.5 items-center">
          <Ionicons name="globe-outline" size={30} color="white" />

          <View className="flex-row">
            <View className="flex-col">
              <Text className="text-white">Language</Text>
              <View className="flex-row">
                <Text className="text-white">English</Text>
                <Ionicons
                  name="chevron-down-outline"
                  size={20}
                  color="white"
                  className="ml-1"
                />
              </View>
            </View>
          </View>
        </View>
        <View className="pl-5 flex-row gap-2.5 items-center">
          <Ionicons name="person-circle-outline" size={30} color="white" />
          <View>
            <Text className="text-white">{"Account\nLog In"}</Text>
          </View>
        </View>
        <View className="pl-5 flex-row gap-2.5 items-center">
          <Text className="text-white">Cart</Text>
          <Ionicons name="cart-outline" size={30} color="white" />
        </View>
      </View>
    </View>
  );
}
