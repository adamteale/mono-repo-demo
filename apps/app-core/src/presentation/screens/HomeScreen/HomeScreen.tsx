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
} from "@mono-repo-demo/atomic-library";
import FilterIcon from "@mono-repo-demo/atomic-library/assets/FilterIcon";

import { useHomeViewModel } from "./useHomeViewModel";
import { getStyles } from "./styles";

const renderCarrouselBanner = ({ item }: { item: MlBannerProps }) => (
  <MlBanner {...item} />
);

export const HomeScreen = () => {
  const { bannerProps, onTapNavigateToProductDetail, productCard } =
    useHomeViewModel();
  const styles = getStyles();

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
        <OrSection>
          <OrCarousel<MlBannerProps>
            autoScroll={true}
            centerContent={false}
            data={bannerProps}
            sideSpaces={0}
            spacingBetween={0}
            testID={`home.banner-carrousel`}
            renderItem={renderCarrouselBanner}
          />
        </OrSection>
        <MlProductCard {...productCard} />
        <MlProductCard {...productCard} />
        <MlProductCard {...productCard} />
      </ScrollView>
    </SafeAreaView>
  );
};
