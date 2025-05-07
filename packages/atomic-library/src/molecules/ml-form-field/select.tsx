import React, { useEffect, useRef, useState, useCallback } from "react";
import { View, Text, Pressable, ScrollView, TextInput } from "react-native";
import { AtIcon, AtTextInput } from "../../atoms"; // Adapt these components
import { MlSelectProps, SelectOption } from "./ml-form-field.types";
import { useClickOutside } from "../../utils"; // Adapt this hook for React Native
import {
  inputWrapperClasses,
  listboxClasses,
  listboxWrapperClasses,
  optionClasses,
} from "./select.variants"; // Adapt these styles
import {
  handleSelectKeyDown,
  handleSelectCharacterInput,
} from "./utils/keyboard-navigation"; // Adapt these utilities

export const Select = ({
  options,
  label,
  helpText = "",
  error,
  disabled = false,
  className = "",
  placeholder,
  required,
  dataTestId = "select",
  handleChange,
}: MlSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<SelectOption>();
  const [activeIndex, setActiveIndex] = useState(-1);

  const selectRef = useRef<View>(null);
  const listboxRef = useRef<ScrollView>(null); // Changed to ScrollView
  const searchTimeoutRef = useRef<number | null>(null);
  const [searchString, setSearchString] = useState("");

  // React Native equivalent to ClickOutside:  You'll need to adapt this or use a library.
  // For a basic implementation, manage focus/blur events.
  const outsideClickHandler = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (selectRef.current) {
      if (isOpen) {
        // Focus the TextInput or relevant interactive element when the select opens.
        // This would typically be handled using a keyboard listener
      } else {
        outsideClickHandler();
      }
    }
  }, [isOpen, outsideClickHandler]);

  useEffect(() => {
    const defaultOption = options?.find((option) => option.selected);
    if (defaultOption) {
      setSelectedOption(defaultOption);
    }
  }, [options]);

  const handleSetValue = (option: SelectOption, index: number) => {
    if (option.disabled) {
      return;
    }
    handleChange?.(option.value);
    setSelectedOption(option);
    setActiveIndex(index);
    setIsOpen(false);
  };

  const onKeyDown = (event: any) => {
    // React.KeyboardEvent is web specific
    // Adapt keyboard navigation. React Native has limited keyboard support, and
    // you'll typically use accessibility features or custom navigation logic.
    // This part will likely need a significant rewrite.
    /*handleSelectKeyDown(event, isOpen, setIsOpen, activeIndex, setActiveIndex, options, handleSetValue, (key) =>
      handleSelectCharacterInput(key, searchString, setSearchString, searchTimeoutRef, options, setActiveIndex),
    )*/
  };

  //Removed web specific scrollIntoView
  return (
    <View className="relative" ref={selectRef} testID={dataTestId}>
      {label && (
        <Text
          accessibilityLabel={`select-${label}-label`}
          className="flex flex-row mb-3 text-sm text-primary line-clamp-1"
          accessibilityRole="text"
        >
          <Text className="truncate">{label}</Text>
          {required ? (
            <Text className="text-feedback-error"> *</Text>
          ) : (
            <Text importantForAccessibility="no"> (optional)</Text> // Replaced with importantForAccessibility
          )}
        </Text>
      )}

      <Pressable
        className={inputWrapperClasses({ disabled })} // Pressable wrapper
        onPress={() => setIsOpen(!isOpen)}
        //onKeyDown={onKeyDown} // Removed, will use accessiblity
        accessible={true}
        accessibilityLabel={`${label}, ${selectedOption?.label ?? placeholder}`}
        accessibilityState={{ expanded: isOpen }}
        accessibilityHint="Select an option from the list"
        accessibilityRole="combobox"

        //aria-activedescendant={isOpen && activeIndex >= 0 ? `select-${label}-option-${activeIndex}` : undefined} // Accessibility
        // accessibilityRequired={required}
      >
        <AtTextInput
          placeholder={placeholder}
          required={required}
          className={`${
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          } ${className}`} // Removed cursor stylings
          // editable={false} // Use editable = false instead of disabled
          value={selectedOption?.label ?? ""}
          error={error}
          handleChange={handleChange}
          showErrorIcon={false}
          //readOnly // Removed, use editable
          // importantForAccessibility="no-hide-descendants"
          id={`select-${label}`} // Not used
          name={`select-${label}`} // Not used
          // accessibilityTraits="none"
        />

        <AtIcon
          className="absolute top-[0.8125rem] right-3 flex items-center transition-transform"
          type={isOpen ? "angle-up" : "angle-down"}
          color={disabled ? "disabled-primary" : "active"}
          size={24}
          // accessibilityIgnoresInvertColors={true}
          // accessible={false}
        />
      </Pressable>

      {isOpen && (
        <View className={listboxWrapperClasses({ helpText: !!helpText })}>
          <ScrollView // Changed to ScrollView
            accessibilityLabel={`listbox-${label}`}
            className={listboxClasses({ scrollbar: options.length >= 6 })} // Adapt scrollbar styles
          >
            {options?.map((option, index) => (
              <Pressable // Changed to Pressable
                accessibilityLabel={`select-${label}-option-${index}`}
                key={index}
                className={optionClasses({
                  disabled: option.disabled,
                  active: index === activeIndex,
                })} // Adapt styles
                accessibilityRole="menuitem"
                accessibilityState={{ selected: option === selectedOption }}
                onPress={() => handleSetValue(option, index)}
                disabled={option.disabled}
              >
                <Text>{option.label}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}

      {helpText && (
        <Text className={`mt-1 text-sm text-tertiary`}>{helpText}</Text>
      )}
    </View>
  );
};
