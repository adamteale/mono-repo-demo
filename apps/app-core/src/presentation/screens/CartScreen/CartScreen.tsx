import React from "react";
import { SafeAreaView, View } from "react-native";

import { CartScreenProps } from "./types";

import { StyledContainerExample, StyledB, StyledC } from "./styledComponents";
import { useTheme } from "styled-components/native";

import { ThemeType } from "@mono-repo-demo/atomic-library";

export const CartScreen = () => {
  const theme = useTheme() as ThemeType;

  return (
    <SafeAreaView style={{ width: "100%" }}>
      <StyledContainerExample theme={theme}>
        <StyledB theme={theme} />
        <StyledC theme={theme} />
      </StyledContainerExample>
    </SafeAreaView>
  );
};
