import React, { useRef, useState } from "react";
import { View } from "react-native";

import {
  AtLink,
  AtStickBar,
  AtDivider,
  AtIcon,
  useClickOutside,
  MlMedia,
  MlMediaFit,
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
  const [isMobileMenuOpen, setMobielMenuOpen] = useState(false);

  const ref = useRef<HTMLHeadElement>(null);
  useClickOutside(ref, () => setActiveItem(-1));

  const handleCloseMenu = () => {
    setActiveItem(-1);
  };

  if (variant === "compact")
    return (
      <header className="relative" ref={ref}>
        <View className="bg-navbar-content-primary">
          <View className="flex flex-row items-center px-6 sm:px-8 md:px-16 xl:px-32 py-6 container">
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
                  className="absolute w-10 h-10 -ml-2"
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
      </header>
    );

  return (
    <header className="relative" ref={ref}>
      {stickBarContent && (
        <View
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
        </View>
      )}

      {!!searchBox && !searchBox.isHidden && (
        <View
          className={searchboxContainerClasses({ showMobileSearchbox })}
          ref={searchRef}
        >
          <View className="xl:container">
            <View className="w-full flex justify-end">
              <button
                type="button"
                className="mb-5"
                onClick={toggleMobileSearchbox}
              >
                <AtIcon type="cancel" className="text-primary" />
              </button>
            </View>
            <OrSearch {...searchBox} dataTestId="nav-mobile" />
          </View>
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
            className="hidden xl:flex justify-end items-center py-3 container"
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
        <View className="bg-surface-secondary relative">
          <View className="py-5 flex justify-between items-center container">
            <View
              className={mobileHamburgerIconAndLogoWrapperClasses({
                isMobileMenuOpen,
              })}
            >
              <AtLink
                className=" cursor-pointer !text-icon-active !hover:text-icon-active"
                iconProps={{ type: isMobileMenuOpen ? "cancel" : "bars" }}
                onClick={() => setMobielMenuOpen(!isMobileMenuOpen)}
                dataTestId="mobile-menu-icon"
              />
              {brand?.link && brand.image && (
                <View className="flex w-fit">
                  <AtLink {...brand.link}>
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
              handleCloseMenu={handleCloseMenu}
            />
            <View className="flex">
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
          {/* Logo and Search End */}
        </View>

        <HamburgerMenuWrapper
          setActiveItem={setActiveItem}
          activeItem={activeItem}
          brand={brand}
          topLinks={topLinks}
          menuItems={menuItems}
          isMobileMenuOpen={isMobileMenuOpen}
          handleCloseMenu={() => setMobielMenuOpen(false)}
        />
      </View>
    </header>
  );
};
