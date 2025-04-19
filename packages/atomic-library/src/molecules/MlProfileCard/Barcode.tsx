import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, { Rect } from "react-native-svg";

const { width: screenWidth } = Dimensions.get("window");
const padding = 40;

const Barcode = ({ height = 70 }) => {
  const svgWidth = screenWidth - 2 * padding; // Calculate SVG width with padding

  const rects = [
    { x: 0.05, width: 0.01 },
    { x: 0.075, width: 0.025 },
    { x: 0.125, width: 0.01 },
    { x: 0.175, width: 0.005 },
    { x: 0.2, width: 0.015 },
    { x: 0.25, width: 0.01 },
    { x: 0.3, width: 0.025 },
    { x: 0.35, width: 0.005 },
    { x: 0.4, width: 0.02 },
    { x: 0.45, width: 0.01 },
    { x: 0.5, width: 0.03 },
    { x: 0.55, width: 0.005 },
    { x: 0.6, width: 0.015 },
    { x: 0.65, width: 0.01 },
    { x: 0.7, width: 0.025 },
    { x: 0.75, width: 0.005 },
    { x: 0.8, width: 0.02 },
    { x: 0.85, width: 0.01 },
    { x: 0.9, width: 0.015 },
    { x: 0.95, width: 0.01 },
    { x: 0.02, width: 0.008 },
    { x: 0.98, width: 0.008 },
  ];

  return (
    <View style={[styles.container, { paddingHorizontal: padding }]}>
      <Svg width={svgWidth} height={height}>
        {rects.map((rect, index) => (
          <Rect
            key={index}
            x={rect.x * svgWidth}
            y="0"
            width={rect.width * svgWidth}
            height={height * 0.8}
            fill="black"
          />
        ))}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Barcode;
