import React, { useState, useRef, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { MlBannerProps } from "@mono-repo-demo/atomic-library"; // Assuming this exists in your React Native context
import { AtButton, AtLink } from "../../atoms"; // Assuming these have React Native implementations

const { width: screenWidth } = Dimensions.get("window");

interface OrCarouselProps {
  title?: string;
  link?: {
    label: string;
    onPress: () => void;
    dataTestId?: string;
  };
  dataTestId?: string;
  className?: string;
  wrapperClassName?: string;
  children?: React.ReactNode[];
  titleContainerClassName?: string;
}

const CARD_WIDTH = 280; // Adjust as needed
const CARD_MARGIN_HORIZONTAL = 16;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 24,
  },
  titleContainer: {
    paddingHorizontal: 16,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  title: {
    flex: 1,
    color: "#007bff", // Example primary color
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 0.1,
  },
  linkContainer: {
    width: "auto",
  },
  carouselContainer: {
    marginTop: 14,
  },
  itemContainer: {
    width: CARD_WIDTH,
    marginHorizontal: CARD_MARGIN_HORIZONTAL,
  },
  arrowContainer: {
    position: "absolute",
    top: "50%",
    transform: [{ translateY: -20 }],
    zIndex: 10,
    padding: 8,
  },
  arrowLeft: {
    left: 8,
  },
  arrowRight: {
    right: 8,
  },
  arrowButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  arrowText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export const OrCarousel = ({
  title,
  link,
  dataTestId = "carousel",
  className = "",
  wrapperClassName = "",
  children,
  titleContainerClassName = "",
}: OrCarouselProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showArrows, setShowArrows] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (children && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, animated: false });
      setCurrentIndex(0);
    }
  }, [children]);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(
      offsetX / (CARD_WIDTH + CARD_MARGIN_HORIZONTAL * 2)
    );
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    if (scrollViewRef.current && currentIndex > 0) {
      scrollViewRef.current.scrollTo({
        x: (currentIndex - 1) * (CARD_WIDTH + CARD_MARGIN_HORIZONTAL * 2),
        animated: true,
      });
    }
  };

  const goToNext = () => {
    if (scrollViewRef.current && currentIndex < (children?.length || 0) - 1) {
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * (CARD_WIDTH + CARD_MARGIN_HORIZONTAL * 2),
        animated: true,
      });
    }
  };

  const onContentSizeChange = (w: number) => {
    setContentWidth(w);
  };

  if (!children || children.length === 0) {
    return null;
  }

  const showLeftArrow = showArrows && currentIndex > 0;
  const showRightArrow = showArrows && currentIndex < children.length - 1;

  return (
    <View
      style={[styles.wrapper, wrapperClassName]}
      data-testid={`${dataTestId}-container`}
    >
      <View style={[styles.titleContainer, titleContainerClassName]}>
        <View style={styles.titleRow}>
          {title && <Text style={styles.title}>{title}</Text>}
          {link && (
            <View style={styles.linkContainer}>
              <AtLink
                label={link.label}
                onPress={link.onPress}
                buttonStyle="tertiary" // Assuming a React Native style mapping
                buttonSize="large" // Assuming a React Native size mapping
                textStyle={{ paddingRight: 8 }} // Example style
                dataTestId={`${dataTestId}-link`}
              />
            </View>
          )}
        </View>
      </View>
      <View
        style={styles.carouselContainer}
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        {showLeftArrow && (
          <TouchableOpacity
            style={[styles.arrowContainer, styles.arrowLeft]}
            onPress={goToPrevious}
          >
            <View style={styles.arrowButton}>
              <Text style={styles.arrowText}>{"<"}</Text>
            </View>
          </TouchableOpacity>
        )}
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + CARD_MARGIN_HORIZONTAL * 2}
          decelerationRate="fast"
          contentContainerStyle={{ paddingHorizontal: CARD_MARGIN_HORIZONTAL }}
          onScroll={handleScroll}
          onContentSizeChange={onContentSizeChange}
          scrollEventThrottle={16}
          style={{ paddingVertical: 8 }}
        >
          {children.map((child, index) => (
            <View key={`carousel-item-${index}`} style={styles.itemContainer}>
              {child}
            </View>
          ))}
        </ScrollView>
        {showRightArrow && (
          <TouchableOpacity
            style={[styles.arrowContainer, styles.arrowRight]}
            onPress={goToNext}
          >
            <View style={styles.arrowButton}>
              <Text style={styles.arrowText}>{">"}</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
