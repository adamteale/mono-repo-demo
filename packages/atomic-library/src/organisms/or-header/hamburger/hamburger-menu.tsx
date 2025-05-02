import React from "react";
import { HeaderItems } from "../header-items";
import { HeaderMenuItem } from "../or-header.types";
import { AtDivider, AtLink, AtLinkProps } from "../../../atoms";
import { MlMediaProps } from "../../../molecules";
import { containerClasses } from "./hamburguer-menu.variants";

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
  return (
    <View className={containerClasses({ isMobileMenuOpen })}>
      <View className="flex flex-col gap-6">
        <HeaderItems
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          menuItems={menuItems}
          isDesktop={false}
          className="pt-4 flex flex-col"
          handleCloseMenu={handleCloseMenu}
        />
        <View className="py-3">
          <View className="flex flex-col justify-start gap-6 md:gap-0 md:flex-row md:justify-end md:items-center">
            {topLinks?.map((link, idx) => {
              const isLast = idx === topLinks.length - 1;
              return (
                <React.Fragment key={`${link.label}-${idx}`}>
                  <AtLink
                    {...link}
                    onClick={handleCloseMenu}
                    className="text-white hover:text-white"
                  />
                  {!isLast && (
                    <AtDivider className="border-l !border-secondary h-6 mx-3 hidden md:block" />
                  )}
                </React.Fragment>
              );
            })}

            {topLinks && topLinks.length > 1 && (
              <AtDivider className="border-l !border-secondary h-6 mx-3 hidden md:block" />
            )}

            {/* TODO: Implement - language / currency selector */}
            {/* <MlMenuItem
              className="max-w-max !p-0 md:!pr-0 text-white"
              size="small"
              label="USD - English"
              isOpen={false}
              showIcon={true}
            /> */}
          </View>
        </View>
      </View>
    </View>
  );
};
