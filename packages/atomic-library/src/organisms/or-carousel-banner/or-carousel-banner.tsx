import React, { useState, useRef, useCallback } from "react";
import { View, ScrollView, FlatList } from "react-native";

import { OrHeroBanner } from "../or-hero-banner";
import { getNavigationArrowConfig } from "../../utils";
import { OrCarouselBannerProps } from "./or-carousel-banner.types";
import { AtControl, AtBullets } from "../../atoms";
import { arrowClasses } from "./or-carousel-banner.variants";

export const OrCarouselBanner = ({
  dataTestId = "or-carousel-banner",
  slides,
  interval = 5000,
  hideIndicators = false,
  enableAutoplay = true,
  disableAutoplayOnInteraction = true,
  pauseAutoplayOnHover = true,
  className,
}: OrCarouselBannerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [controlledScrollIndex, setControlledScrollIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const numberOfSlides: number = slides?.length || 0;
  const [containerWidth, setContainerWidth] = useState(300);
  const flatListRef = useRef<FlatList>(null);

  if (!slides) {
    return null;
  }

  const hideNavigationArrows = () => setShowArrows(false);
  const showNavigationArrows = () => setShowArrows(true);

  const slideTo = (index: number) => {
    // if (scrollViewRef.current) {
    //   scrollViewRef.current.scrollTo({
    //     x: index * containerWidth,
    //     y: 0,
    //     animated: true,
    //   });
    //   setControlledScrollIndex(index);
    //   setActiveIndex(index);
    // }
  };

  const handleBulletClick = useCallback((index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  }, []);

  const handleOnBannerFocus = () => {
    showNavigationArrows();
  };

  const handleOnBannerBlur = () => {
    hideNavigationArrows();
  };

  const slidePrev = () => {
    if (controlledScrollIndex > 0) {
      slideTo(controlledScrollIndex - 1);
    }
  };

  const slideNext = () => {
    if (controlledScrollIndex < numberOfSlides - 1) {
      slideTo(controlledScrollIndex + 1);
    }
  };

  const prevArrow = getNavigationArrowConfig(false, "prev", slidePrev, "left");
  const nextArrow = getNavigationArrowConfig(false, "next", slideNext, "right");

  const atControlClass =
    "hidden border-2 border-transparent focus:border-cta-primary xl:block";

  const handleSlideChange = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  const keyExtractor = useCallback((item, index) => index.toString(), []);

  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        <View className="w-screen max-w-[1440px]">
          <OrHeroBanner
            {...item}
            dataTestId={`${dataTestId}-banner-${index}`}
            isInSlider
            isActive={activeIndex === index}
          />
        </View>
      );
    },
    [activeIndex, dataTestId]
  );

  return (
    <>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={handleSlideChange}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        initialScrollIndex={0}
        decelerationRate="fast"
        data-testid={dataTestId}
        className="bg-white"
      />

      {/* <View className="flex justify-between w-full min-h-full absolute top-0 items-center container">
          <View className={arrowClasses({ showArrows, position: "left" })}>
            <AtControl
              {...prevArrow}
              className={atControlClass}
              label="previous arrow navigation"
            />
          </View>
          <View className={arrowClasses({ showArrows, position: "right" })}>
            <AtControl
              {...nextArrow}
              className={atControlClass}
              label="next arrow navigation"
            />
          </View>
        </View>

        {numberOfSlides > 1 && !hideIndicators && (
          <View className="absolute pb-5 bottom-0 w-full z-10 flex justify-center">
            <AtBullets
              dataTestId={`${dataTestId}-at-control-bullets`}
              bulletsCount={slides.length}
              onClick={handleBulletClick}
              activeBulletIndex={activeIndex}
            />
          </View>
        )} */}
    </>
  );
};
