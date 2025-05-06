import { useState, useEffect, useRef } from "react";
import { View } from "react-native";
import { MutableRefObject } from "react";
import { useWindowDimensions } from "react-native";

interface IUseNearScreenProps {
  margin: string; // or number, depending on your needs
}

export const useNearScreen = ({
  margin,
}: IUseNearScreenProps): [boolean, MutableRefObject<View | null>] => {
  const ref = useRef<View | null>(null);
  const [isNearScreen, setNearScreen] = useState(false);
  const { height: windowHeight } = useWindowDimensions();
  let elementBottom: number = 0;
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (!ref.current) return;

      ref.current.measure((x, y, width, height, pageX, pageY) => {
        const elementTop = pageY;
        elementBottom = elementTop + height;

        // Parse the margin string to a number (you might need more robust parsing)
        const marginValue = parseInt(margin, 10) || 0; // Default to 0 if parsing fails

        // Calculate the visible area with the margin
        const visibleTop = windowHeight - marginValue;

        // Check if the element is near the screen
        if (elementBottom <= visibleTop) {
          setNearScreen(true);
        } else {
          setNearScreen(false);
        }
      });

      // Parse the margin string to a number (you might need more robust parsing)
      const marginValue = parseInt(margin, 10) || 0; // Default to 0 if parsing fails

      // Calculate the visible area with the margin
      const visibleTop = windowHeight - marginValue;

      // Check if the element is near the screen
      if (elementBottom <= visibleTop) {
        setNearScreen(true);
      } else {
        setNearScreen(false);
      }
    };

    // Set initial value.
    timeoutId = setTimeout(handleScroll, 100);

    // Listen to scroll events
    // window.addEventListener('scroll', handleScroll);  //Not a RN function

    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [margin, windowHeight]);

  return [isNearScreen, ref];
};
