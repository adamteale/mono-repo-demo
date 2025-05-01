"use client";

import { useEffect, useMemo, useRef } from "react";
import { Dimensions, FlatList, View } from "react-native";

import { OrCarouselProps } from "../OrCarousel";

import { getStyles } from "./styles";

const { width: screenWidth } = Dimensions.get("window");

const itemSeparator = ({ width }: { width?: number }) => (
  <View style={{ width }} />
);

export function OrCarousel<T>({
  activeBulletColor,
  autoScroll = false,
  centerContent = false,
  data,
  defaultBulletColor,
  initialNumToRender = 10,
  itemVisiblePercentThreshold = 75,
  maxToRenderPerBatch = 10,
  renderItem,
  sideSpaces = 0,
  spacingBetween = 16,
  testID,
  windowSize = 21,
}: OrCarouselProps<T>) {
  const styles = useMemo(
    () => getStyles(activeBulletColor),
    [activeBulletColor]
  );
  const flatListRef = useRef<FlatList<T>>(null);

  const itemWidth =
    data.length > 1
      ? screenWidth - 2 * sideSpaces - spacingBetween
      : screenWidth;

  useEffect(() => {
    if (autoScroll && data.length > 1) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < data.length) {
          flatListRef.current?.scrollToIndex({
            index: currentIndex,
            animated: true,
            viewOffset: sideSpaces,
          });
          currentIndex++;
        } else {
          flatListRef.current?.scrollToIndex({ index: 0, animated: true });
          clearInterval(interval);
        }
      }, 2000);

      return () => clearInterval(interval);
    }

    return () => {};
  }, [autoScroll, data.length]);

  return (
    <View style={styles.carousel} testID={testID}>
      <FlatList
        ref={flatListRef}
        centerContent={centerContent}
        initialNumToRender={initialNumToRender}
        maxToRenderPerBatch={maxToRenderPerBatch}
        windowSize={windowSize}
        horizontal
        data={data}
        viewabilityConfig={{
          itemVisiblePercentThreshold,
        }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate="fast"
        contentContainerStyle={
          data.length === 1 && centerContent ? styles.centeredContent : null
        }
        {...(data.length > 1 && { snapToInterval: itemWidth + spacingBetween })}
        renderItem={({ index, item, separators }) => {
          return (
            <>
              {data.length > 1 && sideSpaces && index === 0
                ? itemSeparator({ width: sideSpaces })
                : null}
              <View style={[styles.innerColumn]}>
                {renderItem({ index, item, separators })}
              </View>
              {data.length > 1 && sideSpaces && index === data.length - 1
                ? itemSeparator({ width: sideSpaces })
                : null}
            </>
          );
        }}
        ItemSeparatorComponent={() => itemSeparator({ width: spacingBetween })}
        keyboardShouldPersistTaps="handled"
      />
    </View>
  );
}
