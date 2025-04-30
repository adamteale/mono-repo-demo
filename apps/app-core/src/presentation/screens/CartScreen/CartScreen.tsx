import React from "react";
import { SafeAreaView, View } from "react-native";

export const CartScreen = () => {
  return (
    <SafeAreaView className="w-full">
      <View className="flex flex-row w-full md:flex-col">
        <View className="bg-backgroundPrimary h-[400px] min-w-0 flex-1 md:w-full md:max-w-none md:flex-none" />
        <View className="bg-backgroundTertiary h-[400px] flex-1 max-w-[960px] md:w-full md:flex-none" />
      </View>
    </SafeAreaView>
  );
};
