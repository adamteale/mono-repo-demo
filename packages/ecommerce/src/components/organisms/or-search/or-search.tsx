import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  View,
  Keyboard,
  TextInput,
  Platform,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { OrSearchBarSize, OrSearchProps } from "./or-search.types";
import { Results } from "./results/results";
import { AtTextInput } from "@mono-repo-demo/atomic-library";
// import { useMobileSearchboxContext } from '../../utils'; // Needs RN implementation
import { OrSearchSubmitButton } from "./or-search-submit-button";

// Placeholder for RN useMobileSearchboxContext
const useMobileSearchboxContext = () => ({
  showMobileSearchbox: false,
  toggleMobileSearchbox: () => {},
});

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
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<TextInput>(null);
  const { width } = useWindowDimensions();

  // Placeholder for RN useMobileSearchboxContext
  const { showMobileSearchbox, toggleMobileSearchbox } =
    useMobileSearchboxContext();

  // RN doesn't have a direct equivalent to isSmallDesktop
  const isSmallDesktopViewport = width < 768; // Example breakpoint

  useEffect(() => {
    if (currentQuery && inputValue !== currentQuery) {
      setInputValue(currentQuery);
    }
    // Focus the input on mount if it's a small screen
    if (isSmallDesktopViewport) {
      inputRef.current?.focus();
    }
  }, [isSmallDesktopViewport, currentQuery]);

  useEffect(() => {
    if (!currentQuery) {
      setInputValue("");
    }
  }, [currentQuery]);

  const handleOnClearButtonClick = useCallback(() => {
    onClearButtonClick();
    setInputValue("");
    // Keep focus after clearing
    inputRef.current?.focus();
  }, [onClearButtonClick]);

  const handleOnSubmit = () => {
    if (inputValue === "") return;

    if (showMobileSearchbox) {
      toggleMobileSearchbox();
    }

    onClearButtonClick();
    setInputValue("");
    // onSubmit(inputValue); // Pass the input value to the onSubmit handler

    Keyboard.dismiss(); // Dismiss the keyboard after submit
  };

  return (
    <View className="relative">
      <View className="flex-row items-center">
        <AtTextInput
          ref={inputRef}
          placeholder={placeholder}
          value={inputValue}
          onChange={() => setInputValue}
          className={`${
            searchBarSize === OrSearchBarSize.LARGE ? "h-16" : "h-1"
          }`}
          // className={`${
          //   searchBarSize === OrSearchBarSize.LARGE ? "h-16" : "h-1"
          // }`}
          onClearInputClick={handleOnClearButtonClick}
          showClearButton={true}
          clearButtonOptions={{
            className: "mr-2", // Reduced margin
            type: "cancel",
          }}
          onSubmit={handleOnSubmit} // Handle submit via keyboard
        />
        <OrSearchSubmitButton
          onSubmit={handleOnSubmit}
          searchBarSize={searchBarSize}
        />
      </View>

      {currentQuery && showResults && (
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
      )}
    </View>
  );
};
