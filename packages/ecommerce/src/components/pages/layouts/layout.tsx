import { OrFooter } from "@mono-repo-demo/atomic-library";
import { LayoutProps } from "./layout.types";
import { OrHeader } from "../../organisms";
import { MobileSearchboxProvider } from "../../utils";

export const Layout = ({ header, footer, children }: LayoutProps) => {
  return (
    <MobileSearchboxProvider>
      <View className="flex flex-col min-h-screen">
        <OrHeader {...header} />
        <main className="w-full flex-1">{children}</main>
        {footer && <OrFooter {...footer} />}
      </View>
    </MobileSearchboxProvider>
  );
};
