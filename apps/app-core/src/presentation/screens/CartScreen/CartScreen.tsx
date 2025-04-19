import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { CartScreenProps } from "./types";

import styled from "styled-components";
import { useTheme } from "styled-components/native";
import { ThemeType } from "@mono-repo-demo/atomic-library";

// WORKAROUND: It seems that we have to use styled.div (from styled-components) instead of styled.View (form styled-components/native)
// to get the media queries to work.

const LocalResponsiveBox = styled.div`
  width: 300px;
  height: 150px;
  background-color: #000000;
  @media (max-width: 1200px) {
    padding: 80px;
    background-color: #4f4f4f;
  }
  @media (max-width: 800px) {
    padding: 60px;
    background-color: orange;
  }
  @media (max-width: 600px) {
    padding: 40px;
    background-color: yellow;
  }
  @media (max-width: 450px) {
    padding: 20px;
    background-color: red;
  }
`;

export const CartScreen = ({}: CartScreenProps) => {
  const theme = useTheme() as ThemeType;

  // Add a check in case ThemeProvider isn't wrapping correctly somewhere else
  if (!theme) {
    console.error("Theme is missing in TestScreen!");
    return (
      <View>
        <Text>Error: Theme missing</Text>
      </View>
    );
  }

  console.log(
    "Rendering TestScreen, theme desktop breakpoint:",
    theme.breakpoints?.desktop,
    LocalResponsiveBox
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Testing Local Responsive Box:</Text>
      {/* Render the LOCALLY defined component */}
      <LocalResponsiveBox theme={theme} />
      <Text>Testing Local Responsive Box:</Text>
      {/* You can comment out the imported ResponsiveBox for this test */}
      {/* <ResponsiveBox theme={theme} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
