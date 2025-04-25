import React from "react";

import { useNavigation } from "expo-router";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import getStyles from "./styles";

export function CustomHeaderB() {
  const { top } = useSafeAreaInsets();

  const styles = getStyles(top);
  const navigation = useNavigation();
  return (
    <View style={styles.customHeader}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={40} color="white" />
      </TouchableOpacity>
    </View>
  );
}
