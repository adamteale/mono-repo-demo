import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";

import { OrHeroBanner, OrHeroBannerProps } from "../or-hero-banner"; // Assuming this has a NativeWind-compatible implementation
import { AtControl, AtBullets } from "../../atoms"; // Assuming these have NativeWind-compatible implementations

const { width: screenWidth } = Dimensions.get("window");

interface OrCarouselBannerProps {
  dataTestId?: string;
  slides?: OrHeroBannerProps[];
  interval?: number;
  hideIndicators?: boolean;
  enableAutoplay?: boolean;
  disableAutoplayOnInteraction?: boolean;
  pauseAutoplayOnHover?: boolean;
  className?: string;
}

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
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplayTimer, setAutoplayTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isAutoplayActive, setIsAutoplayActive] = useState(enableAutoplay);
  const [showArrows, setShowArrows] = useState(false);

  const numberOfSlides = slides?.length || 0;

  useEffect(() => {
    if (slides && slides.length > 1 && isAutoplayActive) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => stopAutoplay(); // Cleanup on unmount
  }, [slides, isAutoplayActive, interval]);

  const startAutoplay = () => {
    stopAutoplay();
    const timer = setTimeout(() => {
      if (scrollViewRef.current && slides) {
        const nextIndex = (currentIndex + 1) % slides.length;
        scrollToIndex(nextIndex);
      }
    }, interval);
    setAutoplayTimer(timer);
  };

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearTimeout(autoplayTimer);
      setAutoplayTimer(null);
    }
  };

  const scrollToIndex = (index: number, animated: boolean = true) => {
    if (scrollViewRef.current && slides) {
      scrollViewRef.current.scrollTo({
        x: index * screenWidth,
        y: 0,
        animated,
      });
      setCurrentIndex(index);
    }
  };

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setCurrentIndex(index);
  };

  const handleBulletClick = (index: number) => {
    scrollToIndex(index);
    if (disableAutoplayOnInteraction) {
      setIsAutoplayActive(false);
    }
  };

  const handleMouseEnter = () => {
    if (pauseAutoplayOnHover) {
      stopAutoplay();
    }
    setShowArrows(true);
  };

  const handleMouseLeave = () => {
    if (pauseAutoplayOnHover && enableAutoplay) {
      startAutoplay();
    }
    setShowArrows(false);
  };

  const handleFocus = () => {
    stopAutoplay();
    setShowArrows(true);
  };

  const handleBlur = () => {
    if (enableAutoplay) {
      startAutoplay();
    }
    setShowArrows(false);
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
      if (disableAutoplayOnInteraction) {
        setIsAutoplayActive(false);
      }
    }
  };

  const goToNext = () => {
    if (currentIndex < numberOfSlides - 1) {
      scrollToIndex(currentIndex + 1);
      if (disableAutoplayOnInteraction) {
        setIsAutoplayActive(false);
      }
    }
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  const showLeftArrow = showArrows && numberOfSlides > 1 && currentIndex > 0;
  const showRightArrow =
    showArrows && numberOfSlides > 1 && currentIndex < numberOfSlides - 1;

  return (
    <View className={`overflow-hidden ${className}`} data-testid={dataTestId}>
      <View
        className="flex justify-center items-center"
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        // onFocus={handleFocus}
        // onBlur={handleBlur}
      >
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          onMomentumScrollEnd={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const index = Math.round(offsetX / screenWidth);
            setCurrentIndex(index);
          }}
          scrollEventThrottle={16}
          className="w-full"
        >
          {slides.map((slide, index) => (
            <View key={index} className="w-full">
              <OrHeroBanner
                {...slide}
                dataTestId={`${dataTestId}-banner-${index}`}
                isActive={currentIndex === index}
              />
            </View>
          ))}
        </ScrollView>
        {numberOfSlides > 1 && !hideIndicators && (
          <View className="absolute bottom-5 w-full z-10 flex justify-center items-center flex-row">
            {slides.map((_, index) => (
              <TouchableOpacity
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                }`}
                onPress={() => handleBulletClick(index)}
                testID={`${dataTestId}-bullet-${index}`}
              />
            ))}
          </View>
        )}
        {showLeftArrow && (
          <TouchableOpacity
            className={"absolute top-1/2 left-4 z-10 -translate-y-1/2"}
            onPress={goToPrevious}
          >
            <Text className={"text-white text-xl font-bold"}>{"<"}</Text>
          </TouchableOpacity>
        )}
        {showRightArrow && (
          <TouchableOpacity
            className={"absolute top-1/2 right-4 z-10 -translate-y-1/2"}
            onPress={goToNext}
          >
            <Text className={"text-white text-xl font-bold"}>{">"}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
