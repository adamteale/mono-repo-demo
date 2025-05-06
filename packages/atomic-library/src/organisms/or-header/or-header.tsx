import React, { useRef, useState, useEffect } from "react";
// Import SafeAreaView
import { View, SafeAreaView, Platform, StyleSheet } from "react-native";
import { OrHeaderProps } from "./or-header.types";
import { HeaderItems } from "./header-items";
import { HamburgerMenuWrapper } from "./hamburger/hamburger-menu";
import { brandContainerClasses } from "./or-header.variants";
import { useStickBar } from "./stickbar/use-stickbar";
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

  const [dynamicMarginTop, setDynamicMarginTop] = useState(0);

  // Recalculate margin when stick bar state changes
  useEffect(() => {
    const height = getStickBarHeight();
    // Ensure height is a valid number before setting margin
    const validHeight =
      typeof height === "number" && !isNaN(height) ? height : 0;
    setDynamicMarginTop(isHidden || !stickBarContent ? 0 : validHeight);
  }, [isHidden, stickBarContent, getStickBarHeight]);

  return (
    <View className="relative h-20 bg-[#172554]">
      {/* Stick Bar */}
      {stickBarContent && (
        <View
          // Use style for visibility to potentially allow animation later
          style={[styles.stickBarBase, isHidden && styles.stickBarHidden]}
          className="absolute w-full top-0 left-0 right-0 z-50"
          ref={stickBarContainerRef}
          pointerEvents={isHidden ? "none" : "auto"}
        >
          <AtStickBar
            text={stickBarContent}
            hidden={isHidden}
            onClose={handleCloseStickBar}
          />
        </View>
      )}

      {/* Main Header Content Area - Apply dynamic margin */}
      <View style={{ marginTop: dynamicMarginTop }}>
        <View className="bg-neutral-200">
          <View className="w-full max-w-7xl self-center px-4 hidden xl:flex flex-row justify-end items-center py-3">
            {topLinks?.map((link, idx) => {
              const isLast = idx === topLinks.length - 1;
              return (
                <React.Fragment key={`${link.label}-${idx}`}>
                  <AtLink {...link} className="text-primary" />
                  {!isLast && (
                    <AtDivider className="bg-navbar-content-primary h-6 mx-3" />
                  )}
                </React.Fragment>
              );
            })}
          </View>
        </View>

        {/* Main Header Bar */}
        {/* Main Header Bar */}
        <View className="bg-surface-secondary">
          {/* Container with max-width and centering */}
          <View className="w-full max-w-7xl self-center px-4 py-5">
            {/* --- Mobile Layout --- */}
            <View className="flex xl:hidden flex-row items-center justify-between">
              {/* Left Group (Hamburger + Logo) */}
              <View
                className={`flex flex-row items-center ${brandContainerClasses({
                  isMobileMenuOpen,
                })}`}
              >
                <AtLink
                  className="text-icon-active p-2 -ml-2 color-white"
                  iconProps={{ type: isMobileMenuOpen ? "cancel" : "bars" }}
                  onClick={() => setMobielMenuOpen(!isMobileMenuOpen)}
                />
                {brand?.link && brand.image && (
                  <View className="ml-2">
                    {" "}
                    {/* Spacing between icon and logo */}
                    <AtLink
                      {...brand.link}
                      onClick={() => setMobielMenuOpen(false)}
                    >
                      {/* *** CRITICAL: Give image a defined size *** */}
                      <MlMedia
                        {...brand.image}
                        fit={MlMediaFit.CONTAIN}
                        wrapperClassName="h-8 w-auto"
                      />
                    </AtLink>
                  </View>
                )}
              </View>

              {/* Right Group (Placeholder/Icons) */}
              <View className="flex flex-row items-center">
                {/* Example: Add actual icons or adjust placeholder size */}
                <View className="w-8 h-8" /> {/* Placeholder */}
              </View>
            </View>

            {/* --- Desktop Layout --- */}
            <View className="hidden xl:flex flex-row items-center justify-between">
              {/* Left (Logo) */}
              {brand?.link && brand.image && (
                <View>
                  <AtLink {...brand.link}>
                    {/* *** CRITICAL: Give image a defined size *** */}
                    <MlMedia
                      {...brand.image}
                      fit={MlMediaFit.CONTAIN}
                      wrapperClassName="h-10 w-auto"
                    />
                  </AtLink>
                </View>
              )}

              {/* Center (Menu Items) */}
              {/* Let justify-between handle spacing, remove flex-1 from HeaderItems */}
              <HeaderItems
                setActiveItem={setActiveItem}
                activeItem={activeItem}
                className="flex flex-row justify-center items-center gap-10 mx-4" // No flex-1 needed here
                menuItems={menuItems}
              />

              {/* Right (Placeholder/Icons) */}
              <View className="flex flex-row items-center">
                {/* Example placeholder */}
                <View className="w-16 h-10" />
              </View>
            </View>
          </View>
        </View>

        {/* Hamburger Menu Component - Ensure it handles its own positioning/visibility */}
        {/* {isMobileMenuOpen && (
          <HamburgerMenuWrapper
            setActiveItem={setActiveItem}
            activeItem={activeItem}
            topLinks={topLinks}
            menuItems={menuItems}
            isMobileMenuOpen={isMobileMenuOpen}
            handleCloseMenu={() => setMobielMenuOpen(false)}
          />
        )} */}
      </View>
    </View>
  );
};

// Use StyleSheet for things not easily handled by Tailwind or for base styles
const styles = StyleSheet.create({
  safeArea: {
    // Ensure SafeAreaView itself doesn't collapse if content is absolute
    flexShrink: 0,
  },
  stickBarBase: {
    // Base styles for stickbar if needed
  },
  stickBarHidden: {
    // Using opacity or transform is better for animation, but for simple hide:
    display: "none",
  },
});
