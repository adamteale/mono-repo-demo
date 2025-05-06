import { ScrollView, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import { OrHeader, OrFooter } from "../../organisms";
import { LayoutProps } from "./layout.types";

export const Layout = ({ header, footer, children }: LayoutProps) => {
  return (
    <SafeAreaView className="flex-1 bg-[#172554]">
      <View className="flex-1 bg-white">
        {/* <OrHeader {...header} /> */}

        <ScrollView
          horizontal={false}
          className="flex-1"
          keyboardShouldPersistTaps="handled"
        >
          <View className="w-full grow lg:max-w-[90rem] lg:mx-auto lg:px-0">
            {children}
          </View>
        </ScrollView>

        {footer && <OrFooter {...footer} />}
      </View>
    </SafeAreaView>
  );
};
