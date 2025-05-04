import React, { useState, useRef, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { getNavigationArrowConfig } from "../../utils";
import { OrCarouselProps } from "./or-carousel.types";
import { getBreakpoints } from "./or-carousel.breakpoints"; // Assuming this returns screen widths
import { AtButtonSize, AtButtonVariants, AtControl, AtLink } from "../../atoms"; // Make sure these work with react-native and have correct tailwind imports
import { arrowClasses } from "./or-carousel.variants"; // Make sure these work with react-native and have correct tailwind imports

// Swiper isn't available, so we will emulate with a scroll view
// import { Swiper, SwiperSlide } from 'swiper/react'
// import SwiperCore from 'swiper'
// import { Grid, Pagination, Mousewheel } from 'swiper/modules'

const OrCarousel = ({
  title,
  link,
  dataTestId = "carousel",
  className = "",
  wrapperClassName = "",
  children,
  titleContainerClassName = "",
}: OrCarouselProps) => {
  const breakpoints = getBreakpoints();
  const [controlledScrollIndex, setControlledScrollIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [isPrevArrowActive, setIsPrevArrowActive] = useState(false);
  const [isNextArrowActive, setIsNextArrowActive] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const [containerWidth, setContainerWidth] = useState(300); // setting this default

  const prevArrow = getNavigationArrowConfig(
    false,
    "prev",
    () => slidePrev(),
    "left",
    "big"
  );
  const nextArrow = getNavigationArrowConfig(
    false,
    "next",
    () => slideNext(),
    "right",
    "big"
  );

  useEffect(() => {
    revalidateActivateArrows(controlledScrollIndex);
  }, [controlledScrollIndex]);

  useEffect(() => {
    if (children && children.length) {
      revalidateActivateArrows(controlledScrollIndex);
    }
  }, [children]);

  const slidePrev = () => {
    if (controlledScrollIndex > 0) {
      setControlledScrollIndex(controlledScrollIndex - 1);
      scrollViewRef.current?.scrollTo({
        x: (controlledScrollIndex - 1) * containerWidth,
      });
    }
  };

  const slideNext = () => {
    if (controlledScrollIndex < (children?.length || 0) - 1) {
      setControlledScrollIndex(controlledScrollIndex + 1);
      scrollViewRef.current?.scrollTo({
        x: (controlledScrollIndex + 1) * containerWidth,
      });
    }
  };

  const revalidateActivateArrows = (index: number) => {
    setIsPrevArrowActive(index > 0);
    setIsNextArrowActive(index < (children?.length || 0) - 1);
  };

  if (!children) return null;

  return (
    <View
      className={`py-12 md:py-16 ${wrapperClassName}`}
      data-testid={`${dataTestId}-container`}
    >
      <View className={titleContainerClassName}>
        <View className="flex flex-row justify-between items-center xl:max-w-[74rem]">
          {title && (
            <Text className="flex-1 text-primary text-lgx md:text-xl font-bold tracking-0.1">
              {title}
            </Text>
          )}
          {link && (
            <View className="w-fit">
              <AtLink
                {...link}
                buttonStyleProps={{
                  variant: AtButtonVariants.TERTIARY,
                  size: AtButtonSize.LARGE,
                }}
                textClasses="pr-1"
                dataTestId={`${dataTestId}-link`}
              />
            </View>
          )}
        </View>
      </View>

      <View
        data-testid={`${dataTestId}-items`}
        className={`relative pt-7 lg:pt-9 xl:pt-11 ${className}`}
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
        onLayout={(event) => {
          setContainerWidth(event.nativeEvent.layout.width);
        }}
      >
        <View className="grid grid-cols-2 w-full">
          {isPrevArrowActive && (
            <View className={arrowClasses({ showArrows, position: "left" })}>
              <AtControl
                {...prevArrow}
                className="hidden xl:block "
                label="previous arrow navigation"
              />
            </View>
          )}
          {isNextArrowActive && (
            <View className={arrowClasses({ showArrows, position: "right" })}>
              <AtControl
                {...nextArrow}
                className="hidden xl:block"
                label="next arrow navigation"
              />
            </View>
          )}
        </View>

        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          className="flex flex-row py-1 px-1 -mx-1 -mb-1"
          onScroll={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const index = Math.round(offsetX / containerWidth);
            setControlledScrollIndex(index);
          }}
          onMomentumScrollEnd={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const index = Math.round(offsetX / containerWidth);
            setControlledScrollIndex(index);
          }}
        >
          {children?.map((child, index) => (
            <View
              key={`carousel-item-${index}`}
              className="max-w-[17.375rem] lg:max-w-[20rem] px-1"
            >
              {child}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default OrCarousel;
