import React from "react";
import { AtTextInputProps } from "../at-text-input.types";
import { AtTextInput } from "../at-text-input";
import { phoneFormatter } from "../formatters";

export const AtPhoneInput = ({
  label,
  placeholder,
  name,
  maxLength,
  handleChange,
  helpText,
  required,
  defaultValue,
  readOnly,
  className = "",
  error,
  disabled,
  icon,
  value = "",
  onClearInputClick,
  showSuccessIcon,
  errorText,
}: AtTextInputProps) => {
  const onHandleChange = (value: string) => {
    const formattedValue = phoneFormatter(value);
    handleChange?.(formattedValue);
  };

  const placeholderClassName = !value ? "placeholder:pl-11" : "";

  return (
    <View>
      {/* 
        This is so the country code "shows"
        while also showing the input native
        placeholder
      */}
      {!value && (
        <View className="relative">
          <Text
            aria-hidden={true}
            className="absolute z-10 left-[0.8125rem] top-[2.5625rem]"
          >
            (+56)
          </Text>
        </View>
      )}
      <AtTextInput
        readOnly={readOnly}
        label={label}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
        name={name}
        value={value}
        handleChange={onHandleChange}
        errorText={errorText}
        helpText={helpText}
        className={`${className} ${placeholderClassName}`}
        error={error}
        disabled={disabled}
        icon={icon}
        onClearInputClick={onClearInputClick}
        showSuccessIcon={showSuccessIcon}
      />
    </View>
  );
};
