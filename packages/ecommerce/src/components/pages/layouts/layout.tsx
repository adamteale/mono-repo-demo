import React from "react";

import { OrFooter } from "@mono-repo-demo/atomic-library";
import { LayoutProps } from "./layout.types";
import { Text } from "react-native";
import { OrHeader } from "../../organisms";
import { MobileSearchboxProvider } from "../../utils";

export const Layout = ({ header, footer, children }: LayoutProps) => {
  return (
    <Text>layout</Text>
    // <MobileSearchboxProvider>
    //   <View className="flex flex-col min-h-screen">
    //     <OrHeader {...header} />
    //     <main className="w-full flex-1">{children}</main>
    //     {footer && <OrFooter {...footer} />}
    //   </View>
    // </MobileSearchboxProvider>
  );
};
