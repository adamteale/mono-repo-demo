import React from "react";
import { View } from "react-native";

import { CartScreenProps } from "./types";

import { StyledA, StyledB, StyledC } from "./styledComponents";

export const CartScreen = ({}: CartScreenProps) => {
  return (
    <View style={{ width: "100%" }}>
      <StyledA>
        <StyledB />
        <StyledC />
      </StyledA>
    </View>
  );
};
