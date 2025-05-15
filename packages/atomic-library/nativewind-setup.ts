import Svg from "react-native-svg";
import { cssInterop } from "nativewind";

export function setupNativeWindInterop() {
  /*
    This was added to help with styling svgs, but was causing the iOS app to crash when reloading a flatlist with pull to refresh
    Interop Svg to accept className for width, height, and potentially others 
    */

  console.log("Setting up NativeWind CSS Interops...");

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
