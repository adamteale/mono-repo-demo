import React, { useState, useRef, useEffect, useCallback } from "react";
import { View, Pressable, Text } from "react-native";
import { AtRatingProps, Rating } from "./at-rating.types";
import { AtIcon } from "../at-icon"; // Assuming AtIcon is compatible with React Native

enum KeyboardEventCodes {
  ARROW_DOWN = "ArrowDown",
  ARROW_RIGHT = "ArrowRight",
  ARROW_UP = "ArrowUp",
  ARROW_LEFT = "ArrowLeft",
  SPACE = " ",
  ENTER = "Enter",
}

export const AtRating = ({
  stars = 5,
  initialRating = 0,
  onChange,
}: AtRatingProps) => {
  const [hoveredRating, setHoveredRating] = useState(-1);
  const [selectedRatingIndex, setSelectedRatingIndex] = useState(
    initialRating - 1
  );

  // const containerRef = useRef<View>(null); // Changed to View
  // const starRefs = useRef<(React.ElementRef<typeof Pressable> | null)[]>([]); // Fixed type for Pressable

  // useEffect(() => {
  //   starRefs.current = Array(stars).fill(null);
  // }, [stars]);

  const handleRatingSelected = useCallback(
    (index: number) => {
      let selectedRating;

      if (index === selectedRatingIndex) {
        setSelectedRatingIndex(-1);
        selectedRating = 0;
      } else {
        setSelectedRatingIndex(index);
        selectedRating = index + 1;
      }

      //Focus handling is difficult in react-native
      /*if (index === -1 && containerRef.current) {
      containerRef.current.focus();
    } else if (index >= 0 && starRefs.current[index].current) {
      starRefs.current[index].current?.focus();
    }*/

      if (onChange) {
        onChange({ selectedRating: selectedRating as Rating });
      }
    },
    [selectedRatingIndex, onChange]
  ); // Added dependencies for useCallback

  const selectNextElement = useCallback(() => {
    let nextOption;

    if (selectedRatingIndex === stars - 1) {
      nextOption = -1;
    } else {
      nextOption = selectedRatingIndex + 1;
    }

    handleRatingSelected(nextOption);
  }, [selectedRatingIndex, stars, handleRatingSelected]); // Added dependencies for useCallback

  const selectPreviousElement = useCallback(() => {
    let nextOption;

    if (selectedRatingIndex === -1) {
      nextOption = stars - 1;
    } else {
      nextOption = selectedRatingIndex - 1;
    }

    handleRatingSelected(nextOption);
  }, [selectedRatingIndex, stars, handleRatingSelected]); // Added dependencies for useCallback

  const handleKeyDown = (event: any) => {
    // KeyboardEvent is react-web specific
    // React Native has limited keyboard support. You'd typically use a different approach
    // for navigation (e.g., accessibility features or custom navigation logic).

    if (Object.values(KeyboardEventCodes).includes(event.key as any)) {
      event.stopPropagation();
      event.preventDefault();
    }

    if (
      [KeyboardEventCodes.ARROW_DOWN, KeyboardEventCodes.ARROW_RIGHT].includes(
        event.key as any
      )
    ) {
      selectNextElement();
    } else if (
      [KeyboardEventCodes.ARROW_UP, KeyboardEventCodes.ARROW_LEFT].includes(
        event.key as any
      )
    ) {
      selectPreviousElement();
    }
  };

  const ratingStars = Array(stars).fill(0);

  return (
    <View
      className="flex flex-row justify-center items-center gap-0.5 w-fit"
      // ref={containerRef}
      //tabIndex={selectedRatingIndex === -1 ? 0 : -1}  // tabIndex is web-specific
      //onKeyDown={handleKeyDown} // Keydown on react native is handled differently
      accessible={true}
      accessibilityRole="adjustable"
      accessibilityValue={{ now: selectedRatingIndex + 1, max: stars, min: 0 }}
      accessibilityHint="Select a rating between 1 and 5"
    >
      {ratingStars.map((rating, index) => (
        <Pressable
          key={index}
          // ref={(el) => (starRefs.current[index] = el)} // Use callback ref
          onPress={() => handleRatingSelected(index)}
          className="relative"
          // onMouseEnter={() => setHoveredRating(index)}
          // onMouseLeave={() => setHoveredRating(-1)}
          //tabIndex={selectedRatingIndex === index ? 0 : -1}  // tabIndex is web-specific
          accessible={true}
          accessibilityLabel={`Rating ${index + 1}`}
          accessibilityHint="Tap to select this rating"
        >
          <AtIcon type="rating" color="tertiary" dataTestId="rating-icon" />
          {((hoveredRating === -1 && index <= selectedRatingIndex) ||
            index <= hoveredRating) && (
            <AtIcon
              type="rating-full"
              color="tertiary"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              dataTestId="rating-full-icon"
            />
          )}
        </Pressable>
      ))}
    </View>
  );
};
