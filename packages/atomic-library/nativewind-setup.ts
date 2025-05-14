import Svg from "react-native-svg";
import { cssInterop } from "nativewind";

export function setupNativeWindInterop() {
  console.log("Setting up NativeWind CSS Interops...");

  // Interop Svg to accept className for width, height, and potentially others
  cssInterop(Svg, {
    className: {
      target: "style", // General styles
      nativeStyleToProp: {
        width: "width", // Map Tailwind w-* to width prop
        height: "height", // Map Tailwind h-* to height prop
        // fill: "fill",
      },
    },
  });
}
