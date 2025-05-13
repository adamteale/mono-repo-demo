import React from "react";
import { View } from "react-native";

import { MlMenuItem } from "@mono-repo-demo/atomic-library";
import { HeaderMenuItem } from "./or-header.types";
import { HeaderSubItems } from "./header.sub-items";
import { menuItemClasses, menuItemLabelClasses } from "./or-header.variants";

interface HeaderItemsProps {
  menuItems?: HeaderMenuItem[];
  isDesktop?: boolean;
  className?: string;
  handleCloseMenu?: () => void;
  activeItem: number;
  setActiveItem: (index: number) => void;
}

export const HeaderItems = ({
  menuItems,
  activeItem,
  setActiveItem,
  className = "", // This className is passed from the parent OrHeader
  isDesktop = true,
  handleCloseMenu,
}: HeaderItemsProps) => {
  if (!menuItems) return null;

  const handleItemClick = (index: number) => {
    setActiveItem(activeItem === index ? -1 : index);
  };

  return (
    // Apply flex-row to this View
    <View
      aria-label="Global Navigation"
      // The className passed from OrHeader already includes "hidden xl:flex flex-row ..."
      // So, the `flex-row` should already be there if passed correctly.
      // If it's NOT working, it means the `className` prop might not contain it,
      // or something else is overriding it.
      className={`flex-row ${className}`} // Explicitly add flex-row here for safety/clarity
    >
      {menuItems.map((item, idx) => {
        const isMenuOpen = activeItem === idx;
        let onClick;
        let showIcon = false;
        let linkProps = item.linkProps;

        if (!!item.children) {
          onClick = () => handleItemClick(idx);
          showIcon = true;
          linkProps = undefined;
        } else if (!!linkProps?.href) {
          onClick = handleCloseMenu;
        }

        return (
          <View key={`header-item-${idx}`} className="items-center">
            {/* Added items-center if MlMenuItem and HeaderSubItems should be centered vertically relative to each other,
                though typically HeaderSubItems would be an absolutely positioned dropdown. */}
            <MlMenuItem
              className={menuItemClasses({
                isDesktopMenuOpen: isMenuOpen && isDesktop,
                isFirstItem: idx === 0,
              })}
              label={item.label}
              labelClassName={`${menuItemLabelClasses({
                isDesktop,
                isMenuOpen,
              })} text-white`}
              linkProps={linkProps}
              onClick={onClick}
              showIcon={isDesktop ? false : showIcon}
              isOpen={isMenuOpen}
              ariaControls={`header-subitem-${idx}`}
              size="medium"
            />
            {/* HeaderSubItems are usually displayed as a dropdown,
                so their layout is typically absolute and not part of this primary row flow.
                The `isActive` prop controls its visibility. */}
            <HeaderSubItems
              isActive={isMenuOpen}
              items={item.children}
              handleCloseMenu={handleCloseMenu}
            />
          </View>
        );
      })}
    </View>
  );
};
