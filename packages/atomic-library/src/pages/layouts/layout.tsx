import { View } from "react-native";
import { OrHeader, OrFooter } from "../../organisms";
import { LayoutProps } from "./layout.types";

export const Layout = ({ header, footer, children }: LayoutProps) => {
  return (
    <View className="flex flex-col min-h-screen">
      {/* <OrHeader {...header} /> */}
      <View accessibilityRole="main" className="w-full flex-1">
        {children}
      </View>
      {/* <OrFooter {...footer} /> */}
    </View>
  );
};
