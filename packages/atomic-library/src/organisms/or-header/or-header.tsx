import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from "react-native";

// --- ORIGINAL IMPORTS (ASSUMED TO BE RN COMPATIBLE) ---
import { AtLink, MlMedia, MlMediaFit, AtIcon, AtStickBar } from "../..";
import { OrHeaderProps } from "./or-header.types";
import { HeaderItems } from "./header-items";
import { OrSearch } from "../or-search";
import { useStickBar } from "./stickbar/use-stickbar";

export const OrHeader = ({
  brand,
  menuItems,
  searchBox,
  onCloseStickbar,
  stickBarContent,
  isStickBarHidden,
  userIconLink,
}: OrHeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showMobileSearchbox, setShowMobileSearchbox] = useState(false);
  const {
    isHidden,
    stickBarContainerRef,
    getStickBarHeight,
    handleCloseStickBar,
  } = useStickBar(onCloseStickbar, isStickBarHidden);
  const { width } = useWindowDimensions();

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const toggleMobileSearchbox = () => {
    setShowMobileSearchbox((prev) => !prev);
  };
  return (
    <View className="relative bg-[#182958] px-28">
      {stickBarContent && (
        <div
          className={`absolute w-full top-0 right-0 transition duration-1000 ${
            !!isHidden ? "-translate-y-full" : "-translate-y-0"
          }`}
          ref={stickBarContainerRef}
          id="stickBarContainer"
          data-testid="stickBarContainer"
        >
          <AtStickBar
            text={stickBarContent}
            hidden={isHidden}
            onClose={handleCloseStickBar}
          />
        </div>
      )}

      <View className="bg-surface-secondary px-4 py-5 w-full lg:max-w-[90rem] lg:mx-auto">
        {/* Core Row: Logo, Menu Items, Search (Responsive) */}
        <View className="flex-row items-center justify-between">
          {/* 1. Hamburger Icon (Mobile Only) */}
          <TouchableOpacity
            className="xl:hidden p-2"
            onPress={toggleMobileMenu}
          >
            <AtIcon
              type={isMobileMenuOpen ? "cancel" : "bars"}
              className="text-white"
            />
          </TouchableOpacity>

          {/* 2. Logo (Responsive) */}
          {brand?.link && brand.image && (
            //Show the logo on smaller screens, hide on larger, show on XL
            <View className="w-[121px] h-[40px]">
              <MlMedia {...brand.image} fit={MlMediaFit.CONTAIN} />
            </View>
            // <AtLink {...brand.link} className="h-12 w-32 bg-red-500">
            // </AtLink>
          )}

          {/* 3. Menu Items (Desktop Only) */}
          <HeaderItems
            className="hidden xl:flex flex-row items-center gap-x-6"
            menuItems={menuItems}
            activeItem={0}
            setActiveItem={() => console.log("active item")}
          />

          {/* 4. Search (Conditional Rendering - Mobile vs. Desktop) */}
          {/* 4a. Desktop Search Bar (xl+) */}
          {searchBox && (
            <View className="hidden xl:flex">
              <OrSearch {...searchBox} dataTestId="desktop-search" />
            </View>
          )}

          {/* 4b. Mobile Search Icon ( < xl ) */}
          {!showMobileSearchbox && (
            <TouchableOpacity
              onPress={toggleMobileSearchbox}
              className="xl:hidden p-2" // Hide on xl screens
            >
              <AtIcon type="search" className="text-white" />
            </TouchableOpacity>
          )}
        </View>

        {/* 5. Mobile Search Overlay (Conditional Rendering) */}
        {showMobileSearchbox && searchBox && (
          <View className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-50">
            <OrSearch {...searchBox} dataTestId="mobile-search" />
          </View>
        )}
      </View>

      {/* Mobile Menu Overlay (Conditionally Rendered) */}
      {isMobileMenuOpen && (
        <View className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-50">
          {/*HamburgerMenuWrapper
            setActiveItem={setActiveItem}
            activeItem={activeItem}
            topLinks={topLinks}
            menuItems={menuItems}
            isMobileMenuOpen={isMobileMenuOpen}
            handleCloseMenu={handleCloseMobileMenu}
          />*/}
          <Text>Hamburger Menu</Text>
        </View>
      )}
    </View>
  );
};
