import {
  Color,
  colorMappingNames,
  CustomFilter,
  DropdownFilter,
  ListOption,
  RangeOption,
} from "@mono-repo-demo/atomic-library";
import { EcommerceFilter } from "@components-library/ecommerce";
import { useEffect, useMemo, useState } from "react";
// import {
//   useClearRefinements,
//   useRange,
//   useRefinementList,
// } from "react-instantsearch";

interface FilterProps {
  attribute: string;
  title: string;
  type: "list" | "list-range" | "size" | "color" | {};
  setFilter: (
    filter: DropdownFilter<EcommerceFilter | CustomFilter> & { key: string }
  ) => void;
  colorPickerLabels?: { [key: string]: string };
}

export const AlgoliaFilter = ({
  attribute,
  title,
  type,
  setFilter,
  colorPickerLabels,
}: FilterProps) => {
  if (type === "list") {
    return (
      <CheckBoxFilter
        setFilter={setFilter}
        attribute={attribute}
        title={title}
      />
    );
  }

  if (type === "list-range") {
    return (
      <RangeFilter setFilter={setFilter} attribute={attribute} title={title} />
    );
  }

  if (type === "size") {
    return (
      <SizeFilter setFilter={setFilter} attribute={attribute} title={title} />
    );
  }

  if (type === "color") {
    return (
      <ColorsFilter
        setFilter={setFilter}
        attribute={attribute}
        title={title}
        colorPickerLabels={colorPickerLabels}
      />
    );
  }

  return null;
};

export const CheckBoxFilter = ({
  attribute,
  title,
  setFilter,
}: Omit<FilterProps, "type">) => {
  const { items, refine } = useRefinementList({ attribute, sortBy: ["name"] });

  const refineFn = (option: ListOption) => {
    if (option.value) {
      refine(option.value);
    }
  };

  useEffect(() => {
    const filter = {
      key: attribute,
      title,
      type: "list" as "list",
      initiallyOpen: false,
      options: items.map((item) => ({
        label: item.label,
        value: item.value,
        quantity: item.count,
        selected: item.isRefined,
      })),
      refine: refineFn,
    };

    setFilter(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items, attribute, refine, title]);

  return null;
};

export const ColorsFilter = ({
  attribute,
  title,
  setFilter,
  colorPickerLabels,
}: Omit<FilterProps, "type">) => {
  const { items, refine } = useRefinementList({
    attribute: attribute,
    sortBy: ["name"],
    limit: 15,
  });

  const colorVariations = useMemo(() => {
    return items.map((item) => ({
      isSoldOut: item.count === 0,
      colorKey: item.label as Color,
      isSelected: item.isRefined,
      colorName:
        colorPickerLabels?.[item.label as keyof typeof colorPickerLabels] ??
        colorMappingNames[item.label as keyof typeof colorMappingNames],
    }));
  }, [items, colorPickerLabels]);

  const refineFn = (option: unknown) => {
    if (typeof option === "number") {
      const value = colorVariations[option].colorKey;
      refine(value);
    }
  };

  useEffect(() => {
    const filter = {
      key: attribute,
      title,
      type: "color" as "color",
      initiallyOpen: false,
      options: colorVariations,
      refine: refineFn,
    };

    setFilter(filter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attribute, title, colorVariations]);

  return null;
};

type AlgoliaRangeOption = RangeOption & {
  originalMin: number;
  orginalMax: number;
};

export const RangeFilter = ({
  attribute,
  title,
  setFilter,
}: Omit<FilterProps, "type">) => {
  const [options, setOptions] = useState<AlgoliaRangeOption[]>([]);
  const { refine: clearRefinement } = useClearRefinements({
    includedAttributes: [attribute],
  });
  const { start, range, refine } = useRange({ attribute });
  const { min, max } = range;

  const toMaxValue = (Number.isFinite(start[1]) ? start[1] : max) as number;
  const fromMaxValue = (Number.isFinite(start[0]) ? start[0] : min) as number;

  const from = Math.max(min as number, fromMaxValue);
  const to = Math.min(max as number, toMaxValue);

  const refineFn = (option: RangeOption) => {
    const { min, max } = option;
    const from = Number((min / 100).toFixed(2));
    const to = Number((max / 100).toFixed(2));

    const isSelected = options.find((i) => i.min === min && i.max === max);
    if (isSelected) {
      setOptions([]);
      clearRefinement();

      return;
    }

    refine([from, to]);
    setOptions([
      {
        min: from,
        max: to,
        originalMin: min,
        orginalMax: max,
        quantity: option.quantity,
        selected: true,
        rangeOrigin: option.rangeOrigin,
      },
    ]);
  };

  const clear = () => {
    clearRefinement();
    setOptions([]);
  };

  useEffect(() => {
    const filter = {
      type: "list-range" as "list-range",
      key: attribute,
      title,
      options,
      refine: refineFn,
      clear,
    };

    setFilter(filter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [from, attribute, title, to]);

  return null;
};

export const SizeFilter = ({
  attribute,
  title,
  setFilter,
}: Omit<FilterProps, "type">) => {
  const { items, refine } = useRefinementList({ attribute, sortBy: ["name"] });

  const sizes = useMemo(() => {
    return items.map((item) => ({
      text: item.label,
      isSoldOut: item.count === 0,
      value: item.value,
      isSelected: item.isRefined,
    }));
  }, [items]);

  const refineFn = (option: unknown) => {
    if (typeof option === "number") {
      const value = sizes[option].value;
      refine(value);
    }
  };

  useEffect(() => {
    const filter = {
      key: attribute,
      title,
      type: "size" as "size",
      initiallyOpen: false,
      options: sizes,
      refine: refineFn,
    };

    setFilter(filter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [attribute, sizes, title]);

  return null;
};
