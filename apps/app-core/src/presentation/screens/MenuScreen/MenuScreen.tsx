import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { MenuScreenProps } from "./types";
import { AtButton } from "@mono-repo-demo/atomic-library";
import { useMenuScreenViewModel } from "./useMenuScreenViewModel";

export const MenuScreen = ({}: MenuScreenProps) => {
  const { onLogoutTapped } = useMenuScreenViewModel();

  return (
    <View className="flex-1 w-full bg-[#23376D] justify-center items-center p-10">
      <View className="flex flex-col w-full sm:max-w-[576px]  gap-4">
        <Text className="text-xl mb-5 font-bold text-white text-center ">
          Menu Screen (Web)
        </Text>
        <AtButton
          onClick={console.log("Web log event")}
          children={<Text className="text-white">Log event (Web)</Text>}
        />
        <AtButton
          onClick={onLogoutTapped}
          children={<Text className="text-white">Logout</Text>}
        />
      </View>
    </View>
  );
};
