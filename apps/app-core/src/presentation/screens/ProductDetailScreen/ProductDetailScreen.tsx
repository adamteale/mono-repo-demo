import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import { ProductDetailScreenProps } from "./types";
import { getStyles } from "./styles";

export const ProductDetailScreen = ({ id }: ProductDetailScreenProps) => {
  const styles = getStyles();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{`Product Detail Screen: ${id}`}</Text>
      </View>
    </SafeAreaView>
  );
};
