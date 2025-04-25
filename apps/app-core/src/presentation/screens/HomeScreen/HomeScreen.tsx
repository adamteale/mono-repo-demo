import React from "react";
import {
  View,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import {
  MlBanner,
  MlBannerProps,
  MlToast,
  ThemeType,
} from "@mono-repo-demo/atomic-library";

import { useHomeViewModel } from "./useHomeViewModel";
import { getStyles } from "./styles";
import { useTheme } from "styled-components/native";
import FilterIcon from "@mono-repo-demo/atomic-library/assets/FilterIcon";
import { StyledNativeFlatList } from "./components/StyledFlatList.web";

export const HomeScreen = () => {
  const { bannerProps, onTapNavigateToProductDetail, productCard } =
    useHomeViewModel();
  const styles = getStyles();
  const theme = useTheme() as ThemeType;
  const width = useWindowDimensions().width;

  const { bottom } = useSafeAreaInsets();
  const windowWidth = Dimensions.get("window").width;

  const renderItem = ({ item }: { item: MlBannerProps }) => {
    const bannerHeight = Math.floor(windowWidth / 2);
    return (
      <View style={[{ width: windowWidth }]}>
        <MlBanner {...item} theme={theme} containerWidth={windowWidth} />
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background.white }}>
      <MlToast title="📍 Pickup at Club Zapote" />
      {/* <View style={styles.breadcrumbSection}>
        <Text>Pricesmart / donuts</Text>
      </View>
      <View style={styles.filterSection}>
        <FilterIcon size={40} />
      </View> */}
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <StyledNativeFlatList
          theme={theme}
          pagingEnabled={true}
          scrollEnabled={true}
          bounces={false}
          horizontal={true}
          data={bannerProps}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: MlBannerProps, index: number) =>
            `banner-${index}`
          }
        />

        {/* <OrSection> */}
        {/* <OrCarousel<MlBannerProps>
        autoScroll={true}
        centerContent={false}
        data={bannerProps}
        sideSpaces={0}
        spacingBetween={0}
        testID={`home.banner-carrousel`}
        renderItem={({ item }: { item: MlBannerProps }) => <MlBanner {...item} />}
          /> */}
        {/* </OrSection> */}
      </ScrollView>
    </View>
  );
};
