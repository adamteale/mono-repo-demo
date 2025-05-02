import React from "react";
import {
  ScrollView,
  useWindowDimensions,
  Platform,
  ActivityIndicator,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { PgPage } from "@mono-repo-demo/atomic-library";

import { useHomeViewModel } from "./useHomeViewModel";
import { useContentfulPageToProps } from "../../components/use-page-to-props";

export const HomeScreen = () => {
  const { pageProps, onTapNavigateToProductDetail } = useHomeViewModel();
  const windowWidth = useWindowDimensions().width;

  let dynamicHeight: number | undefined;
  if (Platform.OS !== "web") {
    dynamicHeight = windowWidth / 2;
  }

  const props = pageProps ? useContentfulPageToProps(pageProps) : null;
  let page: React.ReactNode = null;
  if (props) {
    const { children, head, ...rest } = props;
    page = <PgPage {...rest}>{children}</PgPage>;
  } else {
    page = <ActivityIndicator size="large" color="#0000ff" />;
  }
  return (
    <SafeAreaProvider>
      <ScrollView>{page}</ScrollView>
    </SafeAreaProvider>
  );
};
