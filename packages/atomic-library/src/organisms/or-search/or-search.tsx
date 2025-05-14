import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  View,
  TextInput, // Import for ref typing and potential direct use
  Platform,
  useWindowDimensions, // For replacing useIsSmallDesktop
  Keyboard, // To dismiss keyboard potentially
} from "react-native";

// --- ORIGINAL IMPORTS (ASSUMED TO BE RN COMPATIBLE) ---
import { OrSearchBarSize, OrSearchProps } from "./or-search.types"; // Ensure types compatible
// import { Results } from "./results/results"; // Needs RN version

// import { useMobileSearchboxContext } from '../../utils'; // Assumed RN compatible
import { OrSearchSubmitButton } from "./or-search-submit-button"; // Needs RN version
import { AtTextInput } from "../../atoms";

// --- END ORIGINAL IMPORTS ---

export const OrSearch = ({
  currentQuery,
  onClearButtonClick,
  placeholder = "Search",
  onChange,
  onSubmit,
  resultsTitle,
  results,
  resultsDisplayVariant,
  seeMoreResultsLinkProps,
  seeMoreResultsLabel,
  totalAmountOfResults = 0,
  noResultsFoundLabel,
  suggestionsTitle,
  suggestions,
  suggestionsDisplayVariant,
  seeMoreSuggestionsLinkProps,
  seeMoreSuggestionsLabel,
  showMoreSuggestions = true,
  totalAmountOfSuggestions = 0,
  dataTestId = "",
  searchBarSize = OrSearchBarSize.SMALL,
  showResults = true,
}: OrSearchProps) => {
  // --- STATE & REFS ---
  const [timerId, setTimerId] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null); // Use RN TextInput type
  // const { showMobileSearchbox, toggleMobileSearchbox } = useMobileSearchboxContext();
  const { width } = useWindowDimensions(); // RN way to get dimensions

  // --- CONSTANTS / DERIVED STATE ---
  // Example: Replace useIsSmallDesktop logic. Adjust breakpoint as needed.
  const isSmallScreen = width < 768; // Example breakpoint for "small desktop" equivalent

  // // --- EFFECTS ---
  // // Effect to potentially focus input based on screen size or visibility changes
  // useEffect(() => {
  //   // Handle update of the input value with existing currentQuery
  //   if (currentQuery && inputValue !== currentQuery) {
  //     setInputValue(currentQuery);
  //   }

  //   // Original logic: Focus on small desktop.
  //   // Adaptation: Focus if the mobile search box is shown (might be more relevant in RN context)
  //   // Or keep screen size logic if needed when component mounts on specific screens.
  //   // Let's try focusing when the mobile search box appears:

  //   if (showMobileSearchbox && Platform.OS !== 'web') { // Focusing might be less reliable/needed on web
  //     // Add a small delay to ensure the input is rendered and ready
  //     const focusTimer = setTimeout(() => {
  //       inputRef.current?.focus();
  //     }, 100); // Adjust delay if needed
  //     return () => clearTimeout(focusTimer);
  //   }

  //   // Alternative: Focus based on screen size (closer to original, but maybe less useful)
  //   // if (isSmallScreen) {
  //   //   inputRef.current?.focus();
  //   // }

  // }, [isSmallScreen, currentQuery, showMobileSearchbox]); // Added showMobileSearchbox dependency

  // Effect to clear input value if currentQuery prop is cleared externally
  useEffect(() => {
    if (!currentQuery) {
      setInputValue("");
    }
  }, [currentQuery]);

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [timerId]);

  // --- HANDLERS ---
  const handleOnChangeDebounced = useCallback(
    (value: string) => {
      setInputValue(value); // Update state immediately for responsiveness
      if (timerId) {
        clearTimeout(timerId);
      }
      const newTimerId = setTimeout(() => {
        onChange(value); // Call prop function after debounce
      }, 250);
      setTimerId(newTimerId);
    },
    [timerId, onChange]
  );

  const handleOnClearButtonClick = useCallback(() => {
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
    setInputValue("");
    onClearButtonClick(); // Call prop
    onChange(""); // Also notify parent of cleared value immediately
    inputRef.current?.focus(); // Keep focus after clearing
  }, [onClearButtonClick, onChange, timerId]);

  // Internal submit logic, reusable by TextInput and Button
  const handleInternalSubmit = useCallback(() => {
    if (inputValue.trim() === "") return; // Check trimmed value

    const valueToSubmit = inputValue; // Capture value before clearing

    // if (showMobileSearchbox) {
    //   toggleMobileSearchbox(); // Close mobile overlay if open
    // }

    // Clear internal state immediately
    if (timerId) {
      clearTimeout(timerId);
      setTimerId(null);
    }
    setInputValue("");

    // Call prop callbacks AFTER state updates
    onClearButtonClick(); // Clear external refinements/state
    // onSubmit(valueToSubmit); // Pass the submitted value directly

    // Optionally dismiss keyboard
    Keyboard.dismiss();
  }, [
    inputValue,
    // showMobileSearchbox,
    // toggleMobileSearchbox,
    onClearButtonClick,
    onSubmit,
    timerId,
  ]);

  // Handler for TextInput's onSubmitEditing prop
  const handleTextInputSubmitEditing = () => {
    handleInternalSubmit();
  };

  // Handler for the dedicated submit button's onPress prop
  const handleButtonPressSubmit = () => {
    handleInternalSubmit();
  };

  return (
    <View className="relative">
      <View className="flex-row items-center">
        <View className="flex-1">
          <AtTextInput
            // ref={inputRef}
            placeholder={placeholder}
            value={inputValue}
            // Use onChangeText in React Native
            onChange={(event) => handleOnChangeDebounced(event.target.value)}
            // Apply height class based on searchBarSize
            className={`${
              searchBarSize === OrSearchBarSize.LARGE ? "h-16" : "h-14"
            }`}
            // Prop to trigger internal clear button logic
            onClearInputClick={handleOnClearButtonClick}
            // required -> handled by checking inputValue in submit logic
            // showClearButton -> handled internally by AtTextInput based on value/props
            showClearButton={!!inputValue} // Example: Show clear if there's input
            // clearButtonOptions -> These styles need to be handled INSIDE AtTextInput
            // The `mr-11` logic needs to be applied to the clear button's container within AtTextInput
            // to make space for the submit button if they are overlaid.
            // dataTestId -> accessibilityLabel / testID
            // accessibilityLabel={`search-input-${dataTestId}`}
            dataTestId={`search-input-${dataTestId}`}
            // Handle submission via keyboard (e.g., "Go", "Search")
            // onSubmitEditing={handleTextInputSubmitEditing}
            // Standard RN TextInput props (ensure AtTextInput passes them down)
            // returnKeyType="search"
            // blurOnSubmit={false}
          />
          <View style={{ position: "absolute", right: 0, top: 10 }}>
            <OrSearchSubmitButton
              onSubmit={handleButtonPressSubmit}
              searchBarSize={searchBarSize}
            />
          </View>
        </View>
      </View>

      {/* {currentQuery && showResults && (
        <Results
          query={currentQuery}
          showResults={showResults}
          resultsTitle={resultsTitle}
          results={results}
          resultsDisplayVariant={resultsDisplayVariant}
          seeMoreResultsLinkProps={seeMoreResultsLinkProps}
          seeMoreResultsLabel={seeMoreResultsLabel}
          totalAmountOfResults={totalAmountOfResults}
          noResultsFoundLabel={noResultsFoundLabel}
          suggestionsTitle={suggestionsTitle}
          suggestions={suggestions}
          suggestionsDisplayVariant={suggestionsDisplayVariant}
          seeMoreSuggestionsLinkProps={seeMoreSuggestionsLinkProps}
          seeMoreSuggestionsLabel={seeMoreSuggestionsLabel}
          showMoreSuggestions={showMoreSuggestions}
          totalAmountOfSuggestions={totalAmountOfSuggestions}
          dataTestId={`results-container-${dataTestId}`}
        />
      )} */}
    </View>
  );
};
