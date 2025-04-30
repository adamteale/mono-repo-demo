import React from "react";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export function CustomHeaderB() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const headerDynamicStyle = {
    height: top + 60,
    paddingTop: top + 10,
  };

  return (
    <View
      className="bg-backgroundPrimary py-4 px-5 flex-row items-center justify-between gap-2"
      style={headerDynamicStyle}
    >
      <StatusBar barStyle="light-content" backgroundColor="#182958" />

      <TouchableOpacity
        accessibilityRole="button"
        onPress={navigation.goBack}
        className="p-[5px]"
      >
        <Ionicons name="arrow-back" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}
