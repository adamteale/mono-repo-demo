import React from "react";
import {
  View,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  Platform,
  FlatList,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaProvider } from "react-native-safe-area-context"; // Keep this provider

import {
  MlBanner,
  MlBannerProps,
  MlToast,
} from "@mono-repo-demo/atomic-library";

import { useHomeViewModel } from "./useHomeViewModel";
import { getStyles } from "./styles";
import FilterIcon from "@mono-repo-demo/atomic-library/src/assets/FilterIcon";

export const HomeScreen = () => {
  const { bannerProps, onTapNavigateToProductDetail, productCard } =
    useHomeViewModel();
  const styles = getStyles();
  const width = useWindowDimensions().width;

  const { bottom } = useSafeAreaInsets();
  const windowWidth = Dimensions.get("window").width;

  let dynamicHeight: number | undefined;
  if (Platform.OS !== "web") {
    dynamicHeight = windowWidth / 2;
  }

  const renderItem = ({ item }: { item: MlBannerProps }) => {
    const bannerHeight = Math.floor(windowWidth / 2);
    return (
      <View style={[{ width: windowWidth }]}>
        <MlBanner {...item} containerWidth={windowWidth} />
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-backgroundWhite">
        <MlToast title="📍 Pickup at Club Zapote" />
        {/* <View style={styles.breadcrumbSection}>
        <Text>Pricesmart / donuts</Text>
      </View>
      <View style={styles.filterSection}>
        <FilterIcon size={40} />
      </View> */}
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
          <FlatList
            className="w-full bg-white"
            style={{ height: dynamicHeight }}
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
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
