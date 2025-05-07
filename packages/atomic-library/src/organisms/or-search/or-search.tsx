// import React, { useEffect, useRef, useState } from "react";
import {
  // OrSearchBarSize,
  OrSearchProps,
} from "./or-search.types";
// import { Results } from "./results/results";
// import { AtTextInput, useIsSmallDesktop } from "@mono-repo-demo/atomic-library";
// import { OrSearchSubmitButton } from "./or-search-submit-button";

export const OrSearch = ({}: // currentQuery,
// onClearButtonClick,
// placeholder = "Search",
// onChange,
// onSubmit,
// resultsTitle,
// results,
// resultsDisplayVariant,
// seeMoreResultsLinkProps,
// seeMoreResultsLabel,
// totalAmountOfResults = 0,
// noResultsFoundLabel,
// suggestionsTitle,
// suggestions,
// suggestionsDisplayVariant,
// seeMoreSuggestionsLinkProps,
// seeMoreSuggestionsLabel,
// showMoreSuggestions = true,
// totalAmountOfSuggestions = 0,
// dataTestId = "",
// searchBarSize = OrSearchBarSize.SMALL,
// showResults = true,
OrSearchProps) => {
  // const [timerId, setTimerId] = useState<NodeJS.Timeout>();
  // const [inputValue, setInputValue] = useState("");
  // const inputRef = useRef<HTMLInputElement>(null);
  // const { showMobileSearchbox, toggleMobileSearchbox } =
  //   useMobileSearchboxContext();
  // const isSmallDesktopViewport = useIsSmallDesktop();
  // useEffect(() => {
  //   // Handle update of the input value with existing currentQuery when viewport changes
  //   // This is to persist the value of the input and the render of the results
  //   if (currentQuery && inputValue !== currentQuery)
  //     setInputValue(currentQuery);
  //   if (isSmallDesktopViewport) inputRef.current?.focus();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSmallDesktopViewport, currentQuery]);
  // useEffect(() => {
  //   // Handle clear refinements
  //   if (!currentQuery) setInputValue("");
  // }, [currentQuery]);
  // const handleOnChangeDebounced = (value: string) => {
  //   if (timerId) clearTimeout(timerId);
  //   setInputValue(value);
  //   setTimerId(setTimeout(() => onChange(value), 250));
  // };
  // const handleOnClearButtonClick = () => {
  //   onClearButtonClick();
  //   setInputValue("");
  // };
  // const handleOnSubmit = (
  //   event:
  //     | React.FormEvent<HTMLFormElement>
  //     | React.MouseEvent<HTMLButtonElement, MouseEvent>
  // ) => {
  //   if (inputValue === "") return;
  //   if (showMobileSearchbox) toggleMobileSearchbox();
  //   onClearButtonClick();
  //   setInputValue("");
  //   onSubmit(event);
  // };
  // return (
  //   <div className="relative">
  //     <form onSubmit={handleOnSubmit}>
  //       <AtTextInput
  //         ref={inputRef}
  //         placeholder={placeholder}
  //         value={inputValue}
  //         handleChange={handleOnChangeDebounced}
  //         className={`${
  //           searchBarSize === OrSearchBarSize.LARGE ? "!h-16" : "!h-14"
  //         }`}
  //         onClearInputClick={handleOnClearButtonClick}
  //         required
  //         showClearButton
  //         clearButtonOptions={{
  //           className: "mr-11",
  //           type: "cancel-circle",
  //         }}
  //         dataTestId={`search-input-${dataTestId}`}
  //       />
  //     </form>
  //     <OrSearchSubmitButton
  //       onSubmit={handleOnSubmit}
  //       searchBarSize={searchBarSize}
  //     />
  //     {currentQuery && (
  //       <Results
  //         query={currentQuery}
  //         showResults={showResults}
  //         resultsTitle={resultsTitle}
  //         results={results}
  //         resultsDisplayVariant={resultsDisplayVariant}
  //         seeMoreResultsLinkProps={seeMoreResultsLinkProps}
  //         seeMoreResultsLabel={seeMoreResultsLabel}
  //         totalAmountOfResults={totalAmountOfResults}
  //         noResultsFoundLabel={noResultsFoundLabel}
  //         suggestionsTitle={suggestionsTitle}
  //         suggestions={suggestions}
  //         suggestionsDisplayVariant={suggestionsDisplayVariant}
  //         seeMoreSuggestionsLinkProps={seeMoreSuggestionsLinkProps}
  //         seeMoreSuggestionsLabel={seeMoreSuggestionsLabel}
  //         showMoreSuggestions={showMoreSuggestions}
  //         totalAmountOfSuggestions={totalAmountOfSuggestions}
  //         dataTestId={`results-container-${dataTestId}`}
  //       />
  //     )}
  //   </div>
  // );
};
