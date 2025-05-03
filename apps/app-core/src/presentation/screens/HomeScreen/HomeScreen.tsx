import React from "react";
import {
  ScrollView,
  useWindowDimensions,
  Platform,
  ActivityIndicator,
  View,
  Image,
  Text,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AtImage, PgPage } from "@mono-repo-demo/atomic-library";

import { useHomeViewModel } from "./useHomeViewModel";
import { useContentfulPageToProps } from "../../components/use-page-to-props";

export const HomeScreen = () => {
  const { pageProps } = useHomeViewModel();
  const windowWidth = useWindowDimensions().width;

  let dynamicHeight: number | undefined;
  if (Platform.OS !== "web") {
    dynamicHeight = windowWidth / 2;
  }

  const props = pageProps ? useContentfulPageToProps(pageProps) : null;

  let page: React.ReactNode = null;

  if (props) {
    const { children, head, ...rest } = props;
    page = (
      <ScrollView horizontal={false}>
        <PgPage {...rest}>{children}</PgPage>
      </ScrollView>
    );
  } else {
    page = (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />;
      </View>
    );
  }

  return <SafeAreaProvider>{page}</SafeAreaProvider>;
};
