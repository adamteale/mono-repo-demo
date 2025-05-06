import React from "react";
import {
  ScrollView,
  Dimensions,
  Platform,
  ActivityIndicator,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { PgPage } from "@mono-repo-demo/atomic-library";

import { useHomeViewModel } from "./useHomeViewModel";
import { useContentfulPageToProps } from "../../components/use-page-to-props";

export const HomeScreen = () => {
  const { pageProps } = useHomeViewModel();

  const props = pageProps ? useContentfulPageToProps(pageProps) : null;

  let page: React.ReactNode = null;

  if (props) {
    const { children, head, ...rest } = props;
    page = (
      <ScrollView horizontal={false} className="bg-white">
        <View className="lg:max-w-[90rem] lg:mx-auto">
          <PgPage {...rest}>{children}</PgPage>
        </View>
      </ScrollView>
    );
  } else {
    page = (
      <View className="flex-1 justify-center items-center h-full">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return <SafeAreaProvider>{page}</SafeAreaProvider>;
};
