import React, { useRef } from "react";
import { View, Text } from "react-native";

import {
  AtDivider,
  AtLink,
  AtLinkProps,
  MlMediaProps,
  MlMenuItem,
  useClickOutside,
} from "@mono-repo-demo/atomic-library";
import { HeaderItems } from "../header-items";
import { HeaderMenuItem } from "../or-header.types";
import { hamburgerMenuContainerClasses } from "../or-header.variants";

export interface HamburgerMenuProps {
  menuItems?: HeaderMenuItem[];
  topLinks?: AtLinkProps[];
  isMobileMenuOpen?: boolean;
  handleCloseMenu?: () => void;
  brand?: {
    link: Pick<AtLinkProps, "href" | "linkWrapper">;
    image: MlMediaProps;
  };
  activeItem: number;
  setActiveItem: (index: number) => void;
}

export const HamburgerMenuWrapper = ({
  menuItems,
  topLinks,
  activeItem,
  isMobileMenuOpen,
  setActiveItem,
  handleCloseMenu,
}: HamburgerMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => handleCloseMenu?.());

  return (
    <View
      // ref={ref}
      className={`${hamburgerMenuContainerClasses({ isMobileMenuOpen })} px-6`}
    >
      <View className="flex flex-col gap-6">
        <HeaderItems
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          menuItems={menuItems}
          isDesktop={false}
          className="pt-4 flex flex-col"
          handleCloseMenu={handleCloseMenu}
        />
        <View className="flex flex-col justify-start items-start gap-6 md:gap-0 md:flex-row md:justify-end md:items-center py-4">
          {topLinks?.map((link, idx) => {
            const isLast = idx === topLinks.length - 1;
            return (
              <React.Fragment key={`${link.label}-${idx}`}>
                <AtLink
                  {...link}
                  onClick={handleCloseMenu}
                  className="text-white hover:text-white"
                  textClasses="text-white"
                />
                {!isLast && (
                  <AtDivider className="border-l !border-secondary h-6 mx-3 hidden " />
                )}
              </React.Fragment>
            );
          })}

          {topLinks && topLinks.length > 1 && (
            <AtDivider className="border-l !border-secondary h-6 mx-3 hidden md:block" />
          )}

          <MlMenuItem
            className="max-w-max !p-0 md:!pr-0 text-white py-4"
            size="small"
            label="USD - English"
            isOpen={false}
            showIcon={true}
            labelClassName="text-white"
          />
        </View>
      </View>
    </View>
  );
};
