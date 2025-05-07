import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native"; // Replacing ul and li with View and Text
import { HeaderMenuSubItem } from "./or-header.types";
import { MlMenuItem } from "../../molecules"; // Assuming MlMenuItem is converted

interface HeaderSubItemsProps {
  isActive: boolean;
  items: HeaderMenuSubItem[] | undefined;
  handleCloseMenu?: () => void; // Unused in component
}

const verticalPaddingRem = 3;

export const HeaderSubItems = ({ isActive, items }: HeaderSubItemsProps) => {
  const [contentHeight, setContentHeight] = useState<number | null>(null);
  const contentRef = useRef<View>(null); // Changed useRef type to View

  useEffect(() => {
    //React Native does not have the same height calculations. Use a static value
    setContentHeight(10);
  }, [isActive]);

  const containerClasses =
    "w-full bg-navbar-content-primary transition-max-h ease-out duration-300 overflow-hidden flex flex-row gap-11"; // transition-[max-height] => transition-max-h
  const subItemDesktopClasses =
    "hidden absolute z-10 left-0 bottom-0 translate-y-full shadow xl:block"; // xl styles moved up

  const subItemClasses =
    "container flex-row gap-12 w-full mx-auto flex pt-4 pb-8 xl:pt-12 xl:pb-12";

  const headerSubItemClasses = "flex flex-col gap-6";

  return (
    <View
      ref={contentRef}
      className={`${containerClasses} ${subItemDesktopClasses}`}
      // style={
      //   contentHeight !== null
      //     ? { maxHeight: `${contentHeight}rem` }
      //     : undefined
      // }
      accessible={isActive}
      accessibilityRole="menu"
    >
      {isActive && !!items && (
        <View className={subItemClasses} accessibilityRole="menu">
          {items.map((subItem, idx) => (
            <View
              className={`${headerSubItemClasses}`}
              key={`header-subitem-${idx}`}
            >
              <View>
                <MlMenuItem
                  className="text-white hover:text-white hover:after:bg-neutral" //hover styles may not work
                  // accessibilityRole="menuitem"
                  labelClassName="font-medium"
                  label={subItem.label}
                  showIcon={false}
                  linkProps={subItem.linkProps}
                  isOpen={false}
                />
              </View>
              {subItem.children?.map((child, index) => (
                <View key={`header-subitem-child-${index}`}>
                  <MlMenuItem
                    className="text-white hover:text-white hover:after:bg-neutral" //hover styles may not work
                    // accessibilityRole="menuitem"
                    label={child.label ?? ""}
                    linkProps={child.linkProps}
                    showIcon={false}
                    isOpen={false}
                    size="small"
                  />
                </View>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};
