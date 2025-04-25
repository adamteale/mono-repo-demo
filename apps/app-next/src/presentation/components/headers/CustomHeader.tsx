import React from "react";

import {
  StatusBar,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import {
  MlTextfield,
  PriceSmartLogo,
  PriceSmartLogoLarge,
  theme,
} from "@mono-repo-demo/atomic-library";

import getStyles from "./styles";
import { useNavigationHandler } from "../../navigation/useNavigationHandler";

export function CustomHeader() {
  const { top } = useSafeAreaInsets();
  const styles = getStyles(top);
  const navigation = useNavigationHandler();
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
            onPress={() => navigation.navigateBack()}
            style={styles.backButton}
          >
            <Ionicons name="apps-sharp" size={40} color="white" />
          </TouchableOpacity>
          <PriceSmartLogo />
        </View>
      )}

      <MlTextfield
        value=""
        onChange={(value) => console.log(value)}
        placeholder="Search for..."
      />
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
