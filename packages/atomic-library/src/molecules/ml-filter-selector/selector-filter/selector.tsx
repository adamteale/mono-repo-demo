import { SelectorFilterProps } from "./selector-filter.types";

export const SelectorFilter = ({ options, onClick }: SelectorFilterProps) => (
  <View className="flex flex-col gap-6 items-start">
    {options.map((option, index) => (
      <button
        key={index}
        className={`fill-text-primary ${
          option.selected
            ? "underline decoration-1 underline-offset-4 decoration-neutral"
            : ""
        }
        `}
        onClick={() => onClick(index)}
      >
        {option.label}
      </button>
    ))}
  </View>
);
