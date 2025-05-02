import React, { useRef, useState } from "react";

import { OrHeaderProps } from "./or-header.types";
import { HeaderItems } from "./header-items";
import { HamburgerMenuWrapper } from "./hamburger/hamburger-menu";
import { brandContainerClasses } from "./or-header.variants";
import { useStickBar } from "./stickbar/use-stickbar";
import { useClickOutside } from "../../utils";
import { AtDivider, AtLink, AtStickBar } from "../../atoms";
import { MlMedia, MlMediaFit } from "../../molecules";

export const OrHeader = ({
  stickBarContent,
  isStickBarHidden,
  onCloseStickbar,
  brand,
  menuItems,
  topLinks = [],
}: OrHeaderProps) => {
  const [activeItem, setActiveItem] = useState(-1);
  const [isMobileMenuOpen, setMobielMenuOpen] = useState(false);
  const {
    isHidden,
    stickBarContainerRef,
    getStickBarHeight,
    handleCloseStickBar,
  } = useStickBar(onCloseStickbar, isStickBarHidden);

  const ref = useRef<HTMLHeadElement>(null);
  useClickOutside(ref, () => setActiveItem(-1));

  return (
    <header className="relative" ref={ref}>
      {stickBarContent && (
        <View
          className={`absolute w-full transition duration-1000 top-0 right-0 z-50 ${
            !!isHidden ? "-translate-y-full" : "-translate-y-0"
          }`}
          ref={stickBarContainerRef}
          id="stickBarContainer"
        >
          <AtStickBar
            text={stickBarContent}
            hidden={isHidden}
            onClose={handleCloseStickBar}
          />
        </View>
      )}

      <View
        className={`relative transition-all duration-1000`}
        style={{
          marginTop: isHidden || !stickBarContent ? "0px" : getStickBarHeight(),
        }}
      >
        {/* Top Links */}
        <View className="bg-neutral-200">
          <nav
            id="Courtesy Navigation"
            className="container hidden xl:flex justify-end items-center py-3"
          >
            {topLinks?.map((link, idx) => {
              const isLast = idx === topLinks.length - 1;
              return (
                <React.Fragment key={`${link.label}-${idx}`}>
                  <AtLink {...link} className="text-primary" />
                  {!isLast && (
                    <AtDivider className="border-l !border-navbar-content-primary h-6 mx-3" />
                  )}
                </React.Fragment>
              );
            })}

            {topLinks.length > 1 && (
              <AtDivider className="border-l h-6 mx-3 !border-navbar-content-primary" />
            )}

            {/* TODO: Implement - language / currency selector */}
            {/* <MlMenuItem 
              className="max-w-max !pr-0" 
              size="small" 
             label="USD - English" 
             isOpen={false} 
              showIcon={true} 
            /> */}
          </nav>
        </View>
        {/* Top Links end */}

        {/* Logo, Items and Search */}
        <View className="bg-surface-secondary">
          <View className="container mx-auto py-5 flex justify-between items-center">
            <View className={brandContainerClasses({ isMobileMenuOpen })}>
              <AtLink
                className=" cursor-pointer !text-icon-active !hover:text-icon-active"
                iconProps={{ type: isMobileMenuOpen ? "cancel" : "bars" }}
                onClick={() => setMobielMenuOpen(!isMobileMenuOpen)}
              />
              {brand?.link && brand.image && (
                <View className="flex w-fit">
                  <AtLink
                    {...brand.link}
                    onClick={() => setMobielMenuOpen(false)}
                  >
                    <MlMedia {...brand.image} fit={MlMediaFit.CONTAIN} />
                  </AtLink>
                </View>
              )}
            </View>
            {brand?.link && brand.image && (
              <View className="xl:flex hidden w-fit">
                <AtLink {...brand.link}>
                  <MlMedia {...brand.image} fit={MlMediaFit.CONTAIN} />
                </AtLink>
              </View>
            )}
            <HeaderItems
              setActiveItem={setActiveItem}
              activeItem={activeItem}
              className="hidden xl:flex py-4 justify-center gap-10"
              menuItems={menuItems}
            />
            <View />
          </View>
        </View>
        {/* Logo and Search End */}

        <HamburgerMenuWrapper
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          topLinks={topLinks}
          menuItems={menuItems}
          isMobileMenuOpen={isMobileMenuOpen}
          handleCloseMenu={() => setMobielMenuOpen(false)}
        />
      </View>
    </header>
  );
};
