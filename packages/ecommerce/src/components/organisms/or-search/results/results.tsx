import { useCallback, useMemo } from "react";
import { SearchItemDisplayVariants, ResultsProps } from "./results.types";
import { CardSearchItem } from "./search-item-variants/card-search-item/card-search-item";
import { AtLink } from "@mono-repo-demo/atomic-library";
import { useMobileSearchboxContext } from "../../../utils";
import { OrSearchItem } from "../or-search.types";
import { TextSearchItem } from "./search-item-variants/text-search-item/text-search-item";
import { itemsContainerClasses } from "./results.variants";

const DEFAULT_PRICE = "$0.00";
const MAX_DISPLAYED_ITEMS = 4;

export const Results = ({
  query,
  noResultsFoundLabel = "We couldn't find any matches for",
  resultsTitle,
  results,
  resultsDisplayVariant = SearchItemDisplayVariants.CARD,
  totalAmountOfResults,
  seeMoreResultsLabel = "See all results",
  seeMoreResultsLinkProps,
  suggestionsTitle = "Related search",
  suggestions,
  suggestionsDisplayVariant = SearchItemDisplayVariants.CARD,
  totalAmountOfSuggestions,
  seeMoreSuggestionsLabel = "See more suggestions",
  seeMoreSuggestionsLinkProps,
  showMoreSuggestions = true,
  maxItemsPerSection = MAX_DISPLAYED_ITEMS,
  dataTestId,
  showResults = true,
}: ResultsProps) => {
  const hasResults = useMemo(
    () => totalAmountOfResults !== 0,
    [totalAmountOfResults]
  );
  const hasSuggestions = useMemo(
    () => totalAmountOfSuggestions !== 0,
    [totalAmountOfSuggestions]
  );

  const { showMobileSearchbox, toggleMobileSearchbox } =
    useMobileSearchboxContext();

  const onItemClick = useCallback(() => {
    if (showMobileSearchbox) toggleMobileSearchbox();
  }, [showMobileSearchbox, toggleMobileSearchbox]);

  const mapItems = useCallback(
    (
      items: OrSearchItem[] | undefined,
      displayVariant: SearchItemDisplayVariants
    ) => {
      if (!items) return [];

      return items
        ?.map((item, index) => {
          const {
            link,
            name,
            slug,
            price,
            image,
            discountPercentage,
            description,
            originalPrice,
          } = item;

          if (!name || !slug || !link) return null;

          if (displayVariant === SearchItemDisplayVariants.TEXT) {
            return (
              <TextSearchItem
                key={`item-${index}-${slug}`}
                link={link}
                name={name}
                onClick={onItemClick}
              />
            );
          }

          const itemProps = {
            link,
            name,
            price: price ?? DEFAULT_PRICE,
            shortDescription: description,
            discountPercentage,
            originalPrice,
            image,
          };

          return (
            <CardSearchItem
              key={`item-${index}-${slug}`}
              onClick={onItemClick}
              {...itemProps}
            />
          );
        })
        .filter(Boolean)
        .slice(0, maxItemsPerSection);
    },
    [maxItemsPerSection, onItemClick]
  );

  const mappedResults = useMemo(
    () => mapItems(results, resultsDisplayVariant),
    [mapItems, results, resultsDisplayVariant]
  );

  const mappedSuggestions = useMemo(
    () => mapItems(suggestions, suggestionsDisplayVariant),
    [mapItems, suggestions, suggestionsDisplayVariant]
  );

  return (
    <View
      className={`
        xl:absolute xl:right-0 z-20
        mt-2 pt-2 xl:py-6 xl:px-4
        w-full xl:w-[28.375rem]
        bg-surface-primary
        rounded-lg
        xl:shadow
        ${showResults ? "xl:block" : "xl:hidden"}
        `}
      data-testid={dataTestId}
    >
      {hasResults && mappedResults?.length > 0 ? (
        <>
          {resultsTitle && (
            <Text className="block mb-4 text-primary font-bold text-lg leading-5 max-w-max">
              {resultsTitle}
            </Text>
          )}

          <View
            className={`${itemsContainerClasses({
              displayVariant: resultsDisplayVariant,
            })}`}
            data-testid="search-results-container"
          >
            {mappedResults}
          </View>

          <View className="flex flex-col items-center w-full mt-4">
            <AtLink
              {...seeMoreResultsLinkProps}
              className="w-fit"
              onClick={onItemClick}
              dataTestId="see-more-results-link"
            >
              <Text className="text-center font-normal text-sm leading-4 hover:underline">
                {seeMoreResultsLabel} &#40;{totalAmountOfResults}&#41;
              </Text>
            </AtLink>
          </View>
        </>
      ) : (
        <Text
          className={`
          whitespace-normal truncate
          text-base text-primary
          leading-5 w-full`}
        >
          {noResultsFoundLabel}{" "}
          <Text className="font-bold">&ldquo;{query}&rdquo;</Text>
        </Text>
      )}

      {hasSuggestions && mappedSuggestions?.length > 0 && (
        <View className="mt-6">
          {suggestionsTitle && (
            <Text className="block mb-4 text-primary font-bold text-lg leading-5 max-w-max">
              {suggestionsTitle}
            </Text>
          )}

          <View
            className={`${itemsContainerClasses({
              displayVariant: suggestionsDisplayVariant,
            })}`}
            data-testid="search-suggestions-container"
          >
            {mappedSuggestions}
          </View>

          {showMoreSuggestions && (
            <View className="flex flex-col items-center w-full mt-4">
              <AtLink
                {...seeMoreSuggestionsLinkProps}
                onClick={onItemClick}
                className="w-fit"
                dataTestId="see-more-suggestions-link"
              >
                <Text className="text-center font-normal text-sm leading-4 hover:underline">
                  {seeMoreSuggestionsLabel} &#40;{totalAmountOfSuggestions}&#41;
                </Text>
              </AtLink>
            </View>
          )}
        </View>
      )}
    </View>
  );
};
