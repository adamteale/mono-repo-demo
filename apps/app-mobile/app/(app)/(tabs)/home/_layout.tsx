import React from "react";

import { Stack, useNavigation } from "expo-router";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import getStyles from "./styles";
import { PriceSmartLogo, PriceSmartLogoLarge } from "@atomic-library/assets";
import { MlTextfield, theme, ThemeType } from "@atomic-library/index";
import { useTheme } from "styled-components/native";

export enum HomeRoutes {
  Home = "home",
  ProductDetail = "productDetail",
}

export function CustomHeader() {
  const styles = getStyles();
  const navigation = useNavigation();
  const width = useWindowDimensions().width;

  const isLargeScreen = width >= theme.breakpoints.lg;

  return (
    <View style={styles.customHeader}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {isLargeScreen ? (
        <PriceSmartLogoLarge />
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="apps-sharp" size={40} color="white" />
          </TouchableOpacity>
          <PriceSmartLogo />
        </View>
      )}

      <MlTextfield value="" onChange={(value) => console.log(value)} />
      {isLargeScreen && (
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            paddingHorizontal: 40,
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={{ fontSize: 40 }}>🇨🇷</Text>
            <Text style={{ color: "white", top: -10 }}>Costa Rica</Text>
          </View>

          <View
            style={{
              paddingLeft: 20,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Ionicons name="globe-outline" size={30} color="white" />

            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Text style={{ color: "white" }}>Language</Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ color: "white" }}>English</Text>
                  <Ionicons
                    name="chevron-down-outline"
                    size={20}
                    color="white"
                    style={{ marginLeft: 5 }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 20,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Ionicons name="person-circle-outline" size={30} color="white" />
            <View>
              <Text style={{ color: "white" }}>{"Account\nLog In"}</Text>
            </View>
          </View>
          <View
            style={{
              paddingLeft: 20,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Cart</Text>
            <Ionicons name="cart-outline" size={30} color="white" />
          </View>
        </View>
      )}
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
