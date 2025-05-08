import { ScrollView, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { OrHeader, OrFooter } from "../../organisms";
import { LayoutProps } from "./layout.types";

export const Layout = ({ header, footer, children }: LayoutProps) => {
  return (
    <SafeAreaView className="flex-1 bg-[#172554]">
      <View className="flex-1 bg-white">
        {/* <OrHeader {...header} /> */}

        <View className="flex-1">
          <View className="w-full lg:max-w-[90rem] lg:mx-auto h-full flex flex-col">
            <View className="flex-1">{children}</View>
          </View>
        </View>

        {footer && <OrFooter {...footer} />}
      </View>
    </SafeAreaView>
  );
};
