import React, { useEffect } from "react";
import { View } from "react-native";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

import {
  OrSidebarMenuItem,
  OrSidebarMenuProps,
  TmLegalSupport,
} from "@mono-repo-demo/atomic-library";
import { TmLegalSupportWrapperProps } from "./tm-legal-support-wrapper.types";
import { BlocksRenderer } from "../../component-renderers";
import { useNavigationContext } from "@Presentation/context";

export const TmLegalSupportWrapper = ({
  template,
}: TmLegalSupportWrapperProps) => {
  // const pathname = useNavigationContext().navigation.currentRoute;
  // const { blocks, menuItems, menuTitle, title } = template;

  // const parsedMenuItems: OrSidebarMenuItem[] = menuItems.map((menuItem) => ({
  //   label: menuItem.titleLabel,
  //   href: menuItem.titleUrl,
  //   isActive: menuItem.titleUrl === pathname,
  //   // linkWrapper: Link,
  //   linkWrapper: undefined,
  // }));

  // const sideBarMenuProps: OrSidebarMenuProps = {
  //   title: menuTitle,
  //   menuItems: parsedMenuItems,
  // };

  return (
    <>
      {/* <TmLegalSupport title={title} menuProps={sideBarMenuProps}>
        <View className="flex flex-col gap-10">
          <BlocksRenderer blocks={blocks ?? []} />
        </View>
      </TmLegalSupport> */}
    </>
  );
};
