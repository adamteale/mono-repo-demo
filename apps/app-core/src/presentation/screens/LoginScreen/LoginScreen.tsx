import React from "react";
import { View, Text } from "react-native";

import { useAuth } from "@Presentation/context/AuthContext";
import { AtButton, AtButtonVariant } from "@mono-repo-demo/atomic-library";
import { getStyles } from "./styles";

export const LoginScreen = () => {
  const { login } = useAuth();
  const styles = getStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Make your life easier and store your membership card digitally
      </Text>
      <AtButton
        variant={AtButtonVariant.primary}
        onAction={login}
        title="Buy a membership"
      />
      <AtButton
        variant={AtButtonVariant.secondary}
        onAction={login}
        title="Log In"
      />
    </View>
  );
};
