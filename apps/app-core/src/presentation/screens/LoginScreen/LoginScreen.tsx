import React from "react";
import { View, Text } from "react-native";

import { useAuth } from "@Presentation/context/AuthContext";
import { AtButton, AtButtonVariants } from "@mono-repo-demo/atomic-library";

export const LoginScreen = () => {
  const { login } = useAuth();

  return (
    <View className="flex-1 w-full bg-[#23376D] justify-center items-center p-10 gap-4">
      <View className="flex flex-col w-full sm:max-w-[576px]">
        <Text className="text-xl mb-5 font-bold text-white text-center text-red-500">
          Make your life easier and store your membership card digitally
        </Text>
        <View style={{ paddingBottom: 20 }}>
          <AtButton
            variant={AtButtonVariants.PRIMARY}
            onClick={login}
            children="Buy a membership"
          />
        </View>
        <AtButton
          variant={AtButtonVariants.SECONDARY}
          onClick={login}
          children="Log In"
        />
      </View>
    </View>
  );
};
