import React from "react";
import { ActivityIndicator, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useHomeViewModel } from "./useHomeViewModel";
import { useContentfulPageToProps } from "../../components/use-page-to-props";
import { PgPage } from "@components-library/ecommerce";

export const HomeScreen = () => {
  const { pageProps, onRefresh, refresh } = useHomeViewModel();

  // Call useContentfulPageToProps unconditionally
  const props = useContentfulPageToProps(pageProps, refresh);

  let page: React.ReactNode = null;

  // Check if props is null after calling the Hook
  if (props) {
    const { children, head, ...rest } = props;
    page = <PgPage {...rest}>{children}</PgPage>;
  } else {
    page = (
      <SafeAreaView className="flex-1 justify-center items-center h-full">
        <ActivityIndicator size="large" color="#182958" />
      </SafeAreaView>
    );
  }

  return <SafeAreaProvider>{page}</SafeAreaProvider>;
};
