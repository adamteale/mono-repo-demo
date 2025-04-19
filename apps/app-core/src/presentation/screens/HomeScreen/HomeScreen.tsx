import React from "react";
import { View, StyleSheet, ScrollView, Text, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  MlBanner,
  MlBannerProps,
  MlProductCard,
  MlToast,
  OrCarousel,
  OrSection,
  ThemeType,
} from "@mono-repo-demo/atomic-library";
import FilterIcon from "@mono-repo-demo/atomic-library/assets/FilterIcon";

import { useHomeViewModel } from "./useHomeViewModel";
import { getStyles } from "./styles";
import styled from "styled-components";
import { useTheme as useStyledTheme } from "styled-components/native";

const renderCarrouselBanner = ({ item }: { item: MlBannerProps }) => (
  <MlBanner {...item} />
);

const ResponsiveBox = styled.div<{ theme?: ThemeType }>`
  width: 300px;
  height: 150px;
  background-color: red;
  margin: 20px;

  @media (max-width: 600px) {
    background-color: blue;
    width: 500px;
  }
`;

export const HomeScreen = () => {
  const { bannerProps, onTapNavigateToProductDetail, productCard } =
    useHomeViewModel();
  const styles = getStyles();
  const theme = useStyledTheme() as ThemeType;
  console.log("theme", theme.breakpoints.desktop);
  const { bottom } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.safeArea}>
      <MlToast title="📍 Pickup at Club Zapote" />
      {/* <View style={styles.breadcrumbSection}>
        <Text>Pricesmart / donuts</Text>
      </View> */}
      {/* <View style={styles.filterSection}>
        <FilterIcon size={40} />
      </View> */}
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.scrollContainer}
        contentInset={{ bottom: bottom + 100 }}
      >
        <ResponsiveBox theme={theme} />
        <View style={{ flex: 1, flexDirection: "row" }}>
          <MlBanner {...bannerProps[0]} />
          <MlBanner {...bannerProps[1]} />
        </View>
        {/* <OrSection>
          <OrCarousel<MlBannerProps>
            autoScroll={true}
            centerContent={false}
            data={bannerProps}
            sideSpaces={0}
            spacingBetween={0}
            testID={`home.banner-carrousel`}
            renderItem={renderCarrouselBanner}
          />
        </OrSection> */}
        <MlProductCard {...productCard} />
        <MlProductCard {...productCard} />
        <MlProductCard {...productCard} />
      </ScrollView>
    </SafeAreaView>
  );
};
