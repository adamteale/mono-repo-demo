import { SearchResult } from "../ml-search.types";

export const handleSearchKeyDown = (
  event: React.KeyboardEvent,
  showResults: boolean,
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>,
  activeIndex: number,
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>,
  results: (string | SearchResult)[],
  handleResultSelect: (result: string | SearchResult, index: number) => void,
  clearInput: () => void
) => {
  const { key } = event;
  const maxIndex = results.length - 1;

  switch (key) {
    case "ArrowDown":
      event.preventDefault();
      if (!showResults) {
        setShowResults(true);
        setActiveIndex(0);
      } else {
        setActiveIndex((prevIndex) => (prevIndex + 1) % results.length);
      }
      break;

    case "ArrowUp":
      event.preventDefault();
      if (!showResults) {
        setShowResults(true);
        setActiveIndex(maxIndex);
      } else {
        setActiveIndex((prevIndex) =>
          prevIndex === 0 ? maxIndex : prevIndex - 1
        );
      }
      break;

    case "ArrowRight":
    case "ArrowLeft":
      if (showResults && activeIndex >= 0) {
        setActiveIndex(-1);
      }
      break;

    case "Enter":
      event.preventDefault();
      if (showResults && activeIndex >= 0) {
        handleResultSelect(results[activeIndex], activeIndex);
      }
      setShowResults(false);
      break;

    case "Escape":
      if (showResults) {
        setShowResults(false);
      } else {
        clearInput();
      }
      break;

    case "Home":
      if (showResults) {
        event.preventDefault();
        setActiveIndex(0);
      }
      break;

    case "End":
      if (showResults) {
        event.preventDefault();
        setActiveIndex(maxIndex);
      }
      break;

    default:
      break;
  }
};
