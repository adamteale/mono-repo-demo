import React from "react";
import { View, ScrollView, Text, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { MlBanner, MlToast, ThemeType } from "@mono-repo-demo/atomic-library";

import { useHomeViewModel } from "./useHomeViewModel";
import { getStyles } from "./styles";
import { useTheme } from "styled-components/native";

export const HomeScreen = () => {
  const { bannerProps, onTapNavigateToProductDetail, productCard } =
    useHomeViewModel();
  const styles = getStyles();
  const theme = useTheme() as ThemeType;
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea}>
      <MlToast title="📍 Pickup at Club Zapote" />
      <View style={styles.breadcrumbSection}>
        <Text>Pricesmart / donuts</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollContainer}
        contentInset={{ bottom: bottom + 100 }}
      >
        <MlBanner {...bannerProps[0]} />
      </ScrollView>
    </SafeAreaView>
  );
};
