import React, { useEffect, useRef, useState } from "react";

import { View, Text } from "react-native";

import { MlMenuItem } from "@mono-repo-demo/atomic-library";
import { HeaderMenuSubItem } from "./or-header.types";

interface HeaderSubItemsProps {
  isActive: boolean;
  items: HeaderMenuSubItem[] | undefined;
  handleCloseMenu?: () => void;
}

const verticalPaddingRem = 3;

export const HeaderSubItems = ({
  isActive,
  items,
  handleCloseMenu,
}: HeaderSubItemsProps) => {
  const [contentHeight, setContentHeight] = useState<null | number>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isActive && contentRef.current) {
      const heightInRem = contentRef.current.scrollHeight / 16;
      setContentHeight(heightInRem + verticalPaddingRem);
      setShouldRender(true);
    } else {
      setIsAnimating(true);
      setContentHeight(0);
    }
  }, [isActive]);

  const handleTransitionEnd = () => {
    if (!isActive) {
      setIsAnimating(false);
      setShouldRender(false);
    }
  };

  const containerClasses =
    "w-full bg-navbar-content-primary transition-[max-height] ease-out duration-300 overflow-hidden flex flex-row gap-11";
  const subItemDesktopClasses =
    "xl:block xl:absolute xl:z-10 xl:left-0 xl:bottom-0 xl:translate-y-full xl:shadow";

  const subItemClasses =
    "xl:container flex-row gap-12 w-full mx-auto flex pt-4 pb-8 xl:pt-12 xl:pb-12";

  const headerSubItemClasses = "flex flex-col gap-6";

  return (
    <View
      // ref={contentRef}
      className={`${containerClasses} ${subItemDesktopClasses}`}
      style={
        {
          // maxHeight: `${contentHeight}rem`,
          // transitionProperty: "max-height",
        }
      }
      // onTransitionEnd={handleTransitionEnd}
    >
      {(isActive || isAnimating || shouldRender) && !!items && (
        <View className={subItemClasses} role="menu">
          {items.map((subItem, idx) => (
            <ul
              className={`${headerSubItemClasses}`}
              key={`header-subitem-${idx}`}
            >
              <li>
                <MlMenuItem
                  className="text-white hover:text-white hover:after:bg-secondary"
                  role="menuitem"
                  labelClassName="font-medium"
                  label={subItem.label}
                  showIcon={false}
                  linkProps={subItem.linkProps}
                  isOpen={false}
                  onClick={() => {
                    if (handleCloseMenu) {
                      handleCloseMenu();
                    }
                  }}
                />
              </li>
              {subItem.children?.map((child, index) => (
                <li key={`header-subitem-child-${index}`}>
                  <MlMenuItem
                    className="text-white hover:text-white hover:after:bg-secondary"
                    role="menuitem"
                    label={child.label ?? ""}
                    linkProps={child.linkProps}
                    showIcon={false}
                    isOpen={false}
                    size="small"
                    onClick={() => {
                      if (handleCloseMenu) {
                        handleCloseMenu();
                      }
                    }}
                  />
                </li>
              ))}
            </ul>
          ))}
        </View>
      )}
    </View>
  );
};
