import React, { useRef, useState } from "react";
import { Button, Text, View } from "react-native";

import {
  AtLink,
  AtStickBar,
  AtDivider,
  AtIcon,
  useClickOutside,
  MlMedia,
  MlMediaFit,
  AtButton,
  MlMenuItem,
} from "@mono-repo-demo/atomic-library";

import { HeaderIcons } from "./icons/header-icons";
import { SearchButton } from "./searchbox/search-button";
import { HamburgerMenuWrapper } from "./hamburger/hamburger-menu";
import { OrHeaderProps } from "./or-header.types";
import { HeaderItems } from "./header-items";
import { useMobileSearchboxContext } from "../../utils";
import { OrSearch } from "../or-search";
import {
  mobileHamburgerIconAndLogoWrapperClasses,
  searchboxContainerClasses,
} from "./or-header.variants";
import { useStickBar } from "./stickbar/use-stickbar";

export const OrHeader = ({
  stickBarContent,
  isStickBarHidden,
  onCloseStickbar,
  brand,
  searchBox,
  favoritesIconLink,
  basketIconLink,
  userIconLink,
  popUpBasket,
  basketProductNotificationProps,
  menuItems,
  topLinks = [],
  basketTotalItems,
  variant = "default",
  onArrowButtonClick,
}: OrHeaderProps) => {
  const { showMobileSearchbox, searchRef, toggleMobileSearchbox } =
    useMobileSearchboxContext();
  const {
    isHidden,
    stickBarContainerRef,
    getStickBarHeight,
    handleCloseStickBar,
  } = useStickBar(onCloseStickbar, isStickBarHidden);
  const [activeItem, setActiveItem] = useState(-1);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const ref = useRef<HTMLHeadElement>(null);
  useClickOutside(ref, () => setActiveItem(-1));

  const handleCloseMenu = () => {
    setActiveItem(-1);
  };

  if (variant === "compact")
    return (
      <View className="relative">
        <View className="bg-navbar-content-primary ">
          <View className="flex flex-row items-center px-6 sm:px-8 md:px-16 xl:px-32 py-6">
            {onArrowButtonClick && (
              <AtLink
                className="relative h-6 w-6"
                onClick={() => {
                  onArrowButtonClick();
                }}
              >
                <AtIcon
                  type="arrow-left"
                  color="secondary"
                  className="absolute w-10 h-10 -ml-2 text-white"
                />
              </AtLink>
            )}

            <View className="w-full flex justify-center">
              {brand?.link && brand.image && (
                <View className="w-28">
                  <AtLink {...brand.link}>
                    <MlMedia
                      {...(brand.imageCheckout
                        ? brand.imageCheckout
                        : brand.image)}
                      fit={MlMediaFit.CONTAIN}
                    />
                  </AtLink>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  return (
    <View className="relative bg-backgroundPrimary">
      {/* {stickBarContent && (
        <View
          className={`absolute w-full top-0 right-0 transition duration-1000 ${
            !!isHidden ? "-translate-y-full" : "-translate-y-0"
          }`}
          id="stickBarContainer"
          data-testid="stickBarContainer"
        >
          <AtStickBar
            text={stickBarContent}
            hidden={isHidden}
            onClose={handleCloseStickBar}
          />
        </View>
      )} */}

      {!!searchBox && !searchBox.isHidden && (
        <View
          className={searchboxContainerClasses({ showMobileSearchbox })}
          // ref={searchRef}
        >
          <View className="xl:container">
            <View className="w-full flex justify-end">
              <AtButton className="mb-5" onClick={() => toggleMobileSearchbox}>
                <AtIcon type="cancel" className="text-primary" />
              </AtButton>
            </View>
            <OrSearch {...searchBox} dataTestId="nav-mobile" />
          </View>
        </View>
      )}

      <View className="relative transition-all duration-1000">
        <View
          className="hidden xl:flex w-full"
          style={{ backgroundColor: "#1C3BA0" }}
        >
          <View className="w-full lg:max-w-[90rem] mx-auto bg-[#fff] xl:flex xl:flex-row justify-end items-center py-3">
            {topLinks?.map((link, idx) => {
              const isLast = idx === topLinks.length - 1;
              return (
                <React.Fragment key={`${link.label}-${idx}`}>
                  <AtLink {...link} textClasses="text-white" />
                  {!isLast && (
                    <AtDivider className="border-l !border-navbar-content-primary h-6 mx-3 border-white" />
                  )}
                </React.Fragment>
              );
            })}

            {topLinks.length > 1 && (
              <AtDivider className="border-l h-6 mx-3 !border-navbar-content-primary border-white" />
            )}

            {/* TODO: Implement - language / currency selector */}
            <MlMenuItem
              className="max-w-max !pr-0"
              labelClassName="text-white"
              size="small"
              label="USD - English"
              isOpen={false}
              showIcon={true}
            />
          </View>
        </View>
        {/* Top Links end */}

        {/* Outer container for max width and centering */}
        <View className="w-full lg:max-w-[90rem] lg:mx-auto">
          {/* Inner container for horizontal padding and flex layout */}
          <View className="py-5 flex flex-row justify-between items-center px-4 sm:px-0 md:px-6 lg:px-8 xl:px-24 xxl:px-32">
            {/* Mobile Hamburger & Logo Wrapper */}
            <View
              className={mobileHamburgerIconAndLogoWrapperClasses({
                isMobileMenuOpen,
              })}
            >
              <AtLink
                className="cursor-pointer !text-icon-active !hover:text-icon-active text-white"
                iconProps={{ type: isMobileMenuOpen ? "cancel" : "bars" }}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                dataTestId="mobile-menu-icon"
                textClasses="text-white"
              />
              {brand?.link && brand.image && (
                <View className="flex flex-row items-center w-fit">
                  <AtLink {...brand.link} textClasses="text-white">
                    <View className="w-[121px] h-[40px]">
                      <MlMedia {...brand.image} fit={MlMediaFit.CONTAIN} />
                    </View>
                  </AtLink>
                </View>
              )}
            </View>

            {/* Desktop Logo */}
            {brand?.link && brand.image && (
              <AtLink
                {...brand.link}
                className="w-[121px] h-[40px] hidden xl:flex"
              >
                <MlMedia {...brand.image} fit={MlMediaFit.CONTAIN} />
              </AtLink>
            )}

            {/* HeaderItems */}
            <HeaderItems
              setActiveItem={setActiveItem}
              activeItem={activeItem}
              className="hidden xl:flex py-4 justify-center gap-10"
              menuItems={menuItems}
              handleCloseMenu={handleCloseMenu}
            />

            {/* Right side Icons & Desktop Search */}
            <View className="flex flex-row items-center">
              {!!searchBox && !searchBox.isHidden && (
                <View className="w-[20.25rem] xl:block hidden">
                  <OrSearch {...searchBox} dataTestId="nav-desktop" />
                </View>
              )}
              <SearchButton
                onClick={toggleMobileSearchbox}
                className="block xl:hidden"
                dataTestId="mobile-search-btn"
              />
              <HeaderIcons
                basketTotalItems={basketTotalItems}
                favoritesIconLink={favoritesIconLink}
                basketIconLink={basketIconLink}
                popUpBasket={popUpBasket}
                basketProductNotification={basketProductNotificationProps}
                userIconLink={userIconLink}
              />
            </View>
          </View>
        </View>

        {/* <HamburgerMenuWrapper
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          brand={brand}
          topLinks={topLinks}
          menuItems={menuItems}
          isMobileMenuOpen={isMobileMenuOpen}
          handleCloseMenu={() => setMobielMenuOpen(false)}
        /> */}
      </View>
    </View>
  );
};
