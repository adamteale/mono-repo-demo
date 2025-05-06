import React from "react";
import { View, Text } from "react-native";

import { useAuth } from "@Presentation/context/AuthContext";
import { AtButton, AtButtonVariants } from "@mono-repo-demo/atomic-library";
import { buttonVariants } from "@mono-repo-demo/atomic-library/src/atoms/at-button/at-button.variants";

export const LoginScreen = () => {
  const { login } = useAuth();

  return (
    <View className="flex-1 w-full bg-[#23376D] justify-center items-center p-10 gap-4">
      <View className="flex flex-col w-full sm:max-w-[576px]">
        <Text className="text-xl mb-5 font-bold text-white text-center ">
          Make your life easier and store your membership card digitally
        </Text>
        <View style={{ paddingBottom: 20 }}>
          <AtButton
            onClick={login}
            className="bg-[#23376D] disabled:opacity-50 border-2 border-white p-4"
            children={
              <Text className="text-white font-bold text-xl">
                Buy a membership
              </Text>
            }
          />
        </View>
        <AtButton
          variant={AtButtonVariants.SECONDARY}
          onClick={login}
          className="bg-white  disabled:opacity-50 border-2 border-white p-4"
          children={
            <Text className="text-[#23376D] font-bold text-xl">Log In</Text>
          }
        />
      </View>
    </View>
  );
};
