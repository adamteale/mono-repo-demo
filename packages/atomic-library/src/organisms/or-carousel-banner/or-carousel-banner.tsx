import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { OrHeroBanner } from "../or-hero-banner";
import { getNavigationArrowConfig } from "../../utils";
import { OrCarouselBannerProps } from "./or-carousel-banner.types";
import { AtControl, AtBullets } from "../../atoms"; // Assuming NativeWind compatible implementations
import { arrowClasses } from "./or-carousel-banner.variants"; // Assuming NativeWind compatible implementations

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

  if (!slides) {
    return null;
  }

  const hideNavigationArrows = () => setShowArrows(false);
  const showNavigationArrows = () => setShowArrows(true);

  const slideTo = (index: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * containerWidth,
        y: 0,
        animated: true,
      });
      setControlledScrollIndex(index);
      setActiveIndex(index);
    }
  };

  const handleBulletClick = (index: number) => {
    slideTo(index);
  };

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

  return (
    <View
      data-testid={dataTestId}
      className={`relative overflow-hidden ${className}`}
    >
      {numberOfSlides > 1 ? (
        <View
          onMouseEnter={showNavigationArrows}
          onMouseLeave={hideNavigationArrows}
          onFocus={handleOnBannerFocus}
          onBlur={handleOnBannerBlur}
          className="flex justify-center"
        >
          <View
            className="flex justify-between w-full min-h-full absolute top-0 items-center container"
            style={{ zIndex: 100 }}
          >
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

          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            className="flex flex-row"
            onMomentumScrollEnd={(event) => {
              const offsetX = event.nativeEvent.contentOffset.x;
              const index = Math.round(offsetX / containerWidth);
              setControlledScrollIndex(index);
              setActiveIndex(index);
            }}
            onLayout={(event) => {
              setContainerWidth(event.nativeEvent.layout.width);
            }}
          >
            {slides?.map((slide, index) => (
              <View key={index} style={{ width: containerWidth }}>
                <OrHeroBanner
                  {...slide}
                  dataTestId={`${dataTestId}-banner-${index}`}
                  isInSlider
                  className="w-full min-w-full"
                  isActive={activeIndex === index}
                />
              </View>
            ))}
          </ScrollView>
          {numberOfSlides > 1 && !hideIndicators && (
            <View className="absolute pb-5 bottom-0 w-full z-10 flex justify-center">
              <AtBullets
                dataTestId={`${dataTestId}-at-control-bullets`}
                bulletsCount={slides.length}
                onClick={handleBulletClick}
                activeBulletIndex={activeIndex}
              />
            </View>
          )}
        </View>
      ) : (
        <OrHeroBanner {...slides[0]} isActive className="w-full min-w-full" />
      )}
    </View>
  );
};
