import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { useAuth } from "@Presentation/context/AuthContext";
import { AtButton } from "@mono-repo-demo/atomic-library";
import { AtButtonVariant } from "@atomic-library/src/atoms/AtButton/types";

export default function LoginScreen() {
  const { login } = useAuth();

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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#23376D",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    gap: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});
