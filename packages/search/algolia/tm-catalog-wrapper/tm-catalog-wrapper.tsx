import { Fragment, useEffect, useMemo, useState } from "react";
import { TmCatalogWrapperProps } from "./tm-catalog-wrapper.types";

// import {
//   useClearRefinements,
//   useHits,
//   useInstantSearch,
//   usePagination,
//   useRefinementList,
//   useSearchBox,
// } from "react-instantsearch";

import {
  AtImageProps,
  CustomFilter,
  DropdownFilter,
  FilterOption,
} from "@mono-repo-demo/atomic-library";
import {
  EcommerceFilter,
  MlColorPickerColorVariation,
  MlProductCard,
  TmCatalog,
  TmCatalogProps,
} from "@components-library/ecommerce";

import { replacePlaceholder } from "./utils/replacePlaceholder";
import {
  CATALOG_TEXT_PLACEHOLDERS,
  defaultFilterButtonLabel,
  defaultHomeLabel,
  defaultResultCountLabel,
  defaultSearchTitle,
  defaultShowResultsLabel,
} from "./utils/config";
import Link from "next/link";
import { AlgoliaHit } from "../types";
import { useQueryParams } from "./use-query-params";
import { AlgoliaFilter } from "./filters";
import { BreadcrumbJsonLd, generateBreadcrumb } from "./utils/breadcrumb";
import { normalizeSortOptions } from "./utils/normalize-sort";
import { AlgoliaSort } from "./sort";

/**
 * This should come directly from CMS and should not be needed
 * we're using this map to not break the `common`
 * implementation which relies on these `keys` for the filters
 * without algolia to work
 */
const algoliaKeyMap = {
  brand: "variants.brand",
  size: "variants.size",
  color: "variants.color.key",
  price: "variants.price.amount",
  categories: "categories",
};

const itemsPerPage = 9;

const CATEGORY_REFIMENT_LIMIT = 50;

type NormalizedFilter = DropdownFilter<EcommerceFilter | CustomFilter> & {
  key: string;
  refine?: (value: unknown) => void;
  clear?: () => void;
};

export const TmCatalogWrapper = ({
  template,
  query,
  cardRenderer,
  catalogLabels,
  sortByFilterOptions,
  colorPickerLabels,
  slugKey,
  filters,
  placeholderImagePath,
  isSearchPage = false,
}: TmCatalogWrapperProps) => {
  const [queryCleared, setQueryCleared] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [needRefresh, setNeedRefresh] = useState(true);
  const { category, useFiltersAsPath } = template;
  const [normalizedFilters, setNormalizedFilters] = useState<
    Record<string, NormalizedFilter>
  >({});
  const [currentSort, setCurrentSort] = useState<string>("");
  const [sortValue, setSortValue] = useState<number>(-1);
  const { refine: clearRefinements } = useClearRefinements({
    excludedAttributes: [algoliaKeyMap.categories],
  });
  const { refine: clearCategoryRefinements } = useClearRefinements({
    includedAttributes: [algoliaKeyMap.categories],
  });
  const { refine: applyCategory, items: algoliaCategories } = useRefinementList(
    {
      attribute: algoliaKeyMap.categories,
      limit: CATEGORY_REFIMENT_LIMIT,
    }
  );
  const { query: algoliaQuery, clear } = useSearchBox();

  const sortOptions = useMemo(
    () => normalizeSortOptions(sortByFilterOptions),
    [sortByFilterOptions]
  );

  const handleClearAllFilters = () => {
    clearRefinements();
    Object.values(normalizedFilters)?.forEach((filter) => {
      if (filter.clear) filter.clear();
    });
  };

  const setFilter = (
    filter: DropdownFilter<EcommerceFilter | CustomFilter> & { key: string }
  ) => {
    setNormalizedFilters((prev) => {
      return {
        ...prev,
        [filter.key]: filter,
      };
    });
  };

  const { queryParams, isQueryLoaded } = useQueryParams(
    useFiltersAsPath,
    filters ?? []
  );

  useEffect(() => {
    if (algoliaCategories.length && !firstLoad) {
      setNeedRefresh(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [algoliaCategories.length]);

  useEffect(() => {
    if (category) {
      clearCategoryRefinements();

      const activeCategory = algoliaCategories.find(
        (c) => c.value === category.reference
      );

      if (activeCategory) {
        applyCategory(activeCategory.value);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, needRefresh]);

  useEffect(() => {
    if (!isQueryLoaded || isSearchPage) return;

    if (!queryParams.includes("query") && !queryCleared) {
      setQueryCleared(true);
      clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams, queryCleared, isQueryLoaded, isSearchPage]);

  useEffect(() => {
    if (!isQueryLoaded) return;

    setFirstLoad(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams, isQueryLoaded]);

  const { status } = useInstantSearch();
  const {
    refine: goToPage,
    nbHits,
    nbPages,
    currentRefinement: currentPage,
  } = usePagination();
  const { items } = useHits<AlgoliaHit>();

  const lower = currentPage * itemsPerPage + 1;
  const upper = (currentPage + 1) * itemsPerPage;

  const textReplacement = {
    totalResults: nbHits ?? 0,
    pagination: `${lower} - ${upper > nbHits ? nbHits : upper}`,
    searchQuery: algoliaQuery || "",
  };
  const replaceText = (text: string) =>
    replacePlaceholder(text, CATALOG_TEXT_PLACEHOLDERS, textReplacement);

  const title = algoliaQuery
    ? replaceText(catalogLabels?.searchTitle ?? defaultSearchTitle)
    : category?.title;

  const filterModalShowResultsLabel = replaceText(
    catalogLabels?.filterModalShowResultsLabel ?? defaultShowResultsLabel
  );
  const filterModalOpenFiltersLabel = replaceText(
    catalogLabels?.filterModalOpenFiltersLabel ?? defaultFilterButtonLabel
  );
  const filterModalTitle = replaceText(
    catalogLabels?.filterModalTitle ?? defaultFilterButtonLabel
  );
  const resultCountsText = (
    catalogLabels?.resultCountLabel ?? defaultResultCountLabel
  )
    .split(" ")
    .map((text, index) => {
      if (text === CATALOG_TEXT_PLACEHOLDERS.pagination)
        return <strong key={index}>{textReplacement.pagination} </strong>;
      if (text === CATALOG_TEXT_PLACEHOLDERS.totalResults)
        return <strong key={index}>{textReplacement.totalResults} </strong>;
      return <Fragment key={index}>{text} </Fragment>;
    });

  const handleChangePage = (pageNumber: number) => {
    // algolia uses zero based pagination
    goToPage(pageNumber - 1);
  };
  const handleSortByChange = (index: number) => {
    setSortValue(index);
  };
  const handleFilter = (key: string, option: FilterOption) => {
    const fn = normalizedFilters[key]?.refine;
    if (fn) fn(option);
  };

  const sortByProps: TmCatalogProps["sortByProps"] = {
    type: "selector",
    title:
      sortByFilterOptions?.[sortValue]?.label ??
      catalogLabels?.sortByLabel ??
      title,
    options:
      sortByFilterOptions?.map((option) => ({
        label: option.label,
        selected: currentSort === option.label,
      })) ?? [],
    onClick: handleSortByChange,
  };

  const productCards = <>{items.map((item) => cardRenderer?.(item))}</>;

  const breadcrumbLinks = generateBreadcrumb(
    defaultHomeLabel,
    slugKey,
    category
  );

  return (
    <>
      {filters?.map((filter) => {
        if (!filter || !filter.key) return null;

        return (
          <AlgoliaFilter
            colorPickerLabels={colorPickerLabels}
            key={filter.key}
            attribute={
              algoliaKeyMap[filter.key as keyof typeof algoliaKeyMap] ??
              filter.key
            }
            title={filter.title}
            type={filter.type}
            setFilter={setFilter}
          />
        );
      })}

      {sortOptions && sortOptions.length > 0 && (
        <AlgoliaSort
          items={sortOptions}
          setCurrentSort={setCurrentSort}
          value={sortValue}
        />
      )}

      <TmCatalog
        {...catalogLabels}
        breadcrumb={{ links: breadcrumbLinks }}
        isLoading={status === "loading" || status === "stalled"}
        hasResults={items.length > 0}
        title={title}
        filters={Object.values(normalizedFilters)}
        //algolia uses zero based pagination
        currentPage={currentPage + 1}
        totalPages={nbPages}
        productCards={productCards}
        resultCountsText={resultCountsText}
        onChangePage={handleChangePage}
        onSortChange={handleSortByChange}
        sortByProps={sortByProps}
        filterModalTitle={filterModalTitle}
        handleFilter={handleFilter}
        onClearFilters={handleClearAllFilters}
        filterModalShowResultsLabel={filterModalShowResultsLabel}
        filterModalOpenFiltersLabel={filterModalOpenFiltersLabel}
      />
      <BreadcrumbJsonLd breadcrumbLinks={breadcrumbLinks} />
    </>
  );
};
