import React from "react";

import { Stack, useNavigation } from "expo-router";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { MlTextfield } from "@atomic-mobile/src";
import { PriceSmartLogo } from "@atomic-mobile/assets";

import getStyles from "./styles";

export enum HomeRoutes {
  Home = "home",
  ProductDetail = "productDetail",
}

export function CustomHeader() {
  const styles = getStyles();
  const navigation = useNavigation();
  return (
    <View style={styles.customHeader}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="apps-sharp" size={40} color="white" />
      </TouchableOpacity>
      <PriceSmartLogo />
      <MlTextfield value="" onChange={(value) => console.log(value)} />
    </View>
  );
}

function CustomHeaderB() {
  const styles = getStyles();
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

export default function HomeStackLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <Stack.Screen name={HomeRoutes.Home} />
      <Stack.Screen
        name={HomeRoutes.ProductDetail}
        options={{
          header: () => <CustomHeaderB />,
        }}
      />
    </Stack>
  );
}
