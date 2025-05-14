import Svg, { Path } from "react-native-svg";
import { cssInterop } from "nativewind";

export function setupNativeWindInterop() {
  console.log("Setting up NativeWind CSS Interop for SVG...");

  // Interop Svg to accept className for width, height, and potentially others
  cssInterop(Svg, {
    className: {
      target: "style", // General styles
      nativeStyleToProp: {
        width: "width", // Map Tailwind w-* to width prop
        height: "height", // Map Tailwind h-* to height prop
        // You could add fill here if you wanted to color the whole Svg background
        // fill: "fill",
      },
    },
  });

  // // Interop Path to accept className for fill, stroke, etc.
  // cssInterop(Path, {
  //   className: {
  //     target: "style", // General styles
  //     nativeStyleToProp: {
  //       fill: "fill", // Map Tailwind fill-* to fill prop
  //       stroke: "stroke", // Map Tailwind stroke-* to stroke prop
  //       // Add other SVG presentation attributes you want to control with Tailwind
  //     },
  //   },
  // });
}
