import { Text, View } from "react-native";
import { useCallback, useRef, useState } from "react";
import { AtTextAreaProps } from "./at-text-area.types";
import { useClickOutside } from "../../utils";
import { containerClasses } from "./at-text-area.variants";

export const AtTextArea = ({
  className = "",
  disabled,
  placeholder,
  readOnly,
  defaultValue,
  error = false,
  value,
  required,
  maxLength,
  name,
  handleChange,
  id,
  inputMode,
  label,
  dataTestId = "text-area",
  helpText,
  errorText,
}: AtTextAreaProps) => {
  const [isActive, setIsActive] = useState(false);
  // const textAreaRef = useRef<HTMLDivElement>(null);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleChange?.(event.target.value);
  };

  // useClickOutside(textAreaRef, () => setIsActive(false));

  const getContainerClasses = useCallback(() => {
    return containerClasses({ active: isActive, error, disabled });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, value, disabled, isActive]);

  return (
    <label className="flex flex-col">
      {label && (
        <Text className="mb-3 text-sm text-primary">
          {label} {required && <Text className="text-feedback-error">*</Text>}
        </Text>
      )}
      <View
        className={getContainerClasses()}
        // onFocus={() => setIsActive(true)}
        // ref={textAreaRef}
        data-testid="text-area-wrapper"
      >
        <textarea
          aria-invalid={error}
          className={`
              focus:outline-none px-3 h-full w-full rounded-lg text-primary 
              placeholder:text-tertiary placeholder:text-base placeholder:leading-4  
              placeholder:opacity-100 focus:placeholder:opacity-0 resize-none 
              ${className}
            `}
          disabled={disabled}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
          defaultValue={defaultValue}
          inputMode={inputMode}
          value={value}
          required={required}
          maxLength={maxLength}
          name={name}
          id={id}
          data-testid={dataTestId}
        />
      </View>
      {!error && helpText && (
        <Text className={`mt-1 text-sm text-tertiary`}>{helpText}</Text>
      )}
      {error && errorText && (
        <Text className={`mt-1 text-sm text-feedback-error`}>{errorText}</Text>
      )}
    </label>
  );
};
