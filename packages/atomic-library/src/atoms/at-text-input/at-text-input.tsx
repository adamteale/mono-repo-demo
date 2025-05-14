import React, {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleProp,
  TextStyle,
  ImageStyle, // for inline style of image component
} from "react-native";
import { AtTextInputProps } from "./at-text-input.types";
import { AtIcon } from "../at-icon";
// import { useClickOutside } from '../../utils'; // Placeholder - Needs RN Implementation
import {
  inputClasses,
  inputPaddingClasses,
  inputWrapperClasses,
  passwordButtonClasses,
} from "./at-text-input.variants";

const useClickOutside = (ref: React.RefObject<View>, handler: () => void) => {
  useEffect(() => {
    // console.warn("useClickOutside hook needs a React Native specific implementation.");
  }, [ref, handler]);
};

// Use the RN TextInput as the ref type
export const AtTextInput = forwardRef<TextInput, AtTextInputProps>(
  (
    {
      className = "", // Applied to the TextInput itself
      disabled,
      placeholder,
      readOnly,
      type = "text", // Default to 'text'
      defaultValue, // Consider controlling via `value` prop
      icon,
      error = false,
      value,
      required, // For visual indication, not native validation
      maxLength,
      name, // Not directly used in RN forms typically
      handleChange, // Will be called by onChangeText
      onClearInputClick,
      id, // Can be used for accessibility linking if needed
      inputMode, // Map to keyboardType
      label,
      dataTestId = "input",
      helpText,
      showSuccessIcon = true,
      handlePasswordToggle,
      showPasswordButton = false,
      passwordIcon, // e.g., 'eye', 'eye-off'
      hidePlaceholderOnFocus = false,
      errorText,
      smallOnMobile = false,
      showClearButton = true,
      showErrorIcon: showInvalidInputIcon = true,
      clearButtonOptions = {
        className: "", // Passed to the clear button's icon
        type: "cancel", // Icon type for clear button
      },
      style, // Allow passing direct RN style objects
      ...rest // Remaining props that will pass down to TextInput.
    }: AtTextInputProps,
    ref // Ref type is TextInput
  ) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const wrapperRef = useRef<View>(null); // Ref for the outer View for useClickOutside

    // For TextInput events, must be strings. Will pass the event to the parent if there are props.
    const onChangeText = useCallback(
      (text: string) => {
        handleChange?.(text);
      },
      [handleChange]
    );

    const handleOnClear = useCallback(() => {
      setIsActive(false);
      onClearInputClick?.();
    }, [onClearInputClick]);

    const handleOnTogglePassword = useCallback(() => {
      setIsActive(false);
      handlePasswordToggle?.();
    }, [handlePasswordToggle]);

    useClickOutside(wrapperRef, () => setIsActive(false));

    const getWrapperClasses = useCallback(() => {
      return inputWrapperClasses({
        active: isActive,
        disabled,
        error,
        smallOnMobile,
      });
    }, [isActive, disabled, error, smallOnMobile]);

    const displayClearButton = useMemo(
      () =>
        !readOnly &&
        isActive &&
        value &&
        !showPasswordButton &&
        showClearButton,
      [
        readOnly,
        isActive,
        value,
        showPasswordButton,
        showClearButton,
        clearButtonOptions,
      ]
    );

    const showIcon = useMemo(
      () => (isActive && icon && !value) || (!isActive && icon),
      [isActive, icon, value]
    );

    const showCheckIcon = useMemo(
      () =>
        !readOnly &&
        !icon &&
        value &&
        !error &&
        !isActive &&
        !disabled &&
        showSuccessIcon,
      [icon, value, error, isActive, readOnly, disabled, showSuccessIcon]
    );

    const showErrorIcon = useMemo(
      () => !passwordIcon && value && !icon && error && showInvalidInputIcon,
      [passwordIcon, value, icon, error, showInvalidInputIcon]
    );

    const paddingStates = useMemo(
      () =>
        (error && showPasswordButton) || (error && displayClearButton)
          ? "twoIcons"
          : !!icon || showPasswordButton || error
          ? "oneIcon"
          : "default",
      [icon, showPasswordButton, error, displayClearButton]
    );

    const keyboardType = useMemo(() => {
      // expanded keyboardType mapping to follow more closely the original intent
      if (inputMode === "numeric") return "number-pad";
      if (inputMode === "tel") return "phone-pad";
      if (inputMode === "email") return "email-address";
      if (inputMode === "decimal") return "decimal-pad"; // Android only
      if (type === "number") return "number-pad";
      if (type === "email") return "email-address";
      return "default";
    }, [inputMode, type]);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const secureTextEntry = useMemo(
      () => type === "password" && !isPasswordVisible,
      [type, isPasswordVisible]
    );

    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    // The textInputClassNames needs to be defined BEFORE being used
    const textInputClassNames = useMemo(() => {
      return `${inputClasses({ hidePlaceholderOnFocus })} ${inputPaddingClasses(
        { state: paddingStates }
      )} ${className}`;
    }, [className, hidePlaceholderOnFocus, paddingStates]);

    // The wrapperClasses needs to be defined BEFORE being used
    const wrapperClasses = useMemo(() => {
      return getWrapperClasses();
    }, [getWrapperClasses]);

    const isEditable = useMemo(
      () => !readOnly && !disabled,
      [disabled, readOnly]
    );

    return (
      <View className="flex flex-col">
        {label && (
          <Text className="flex flex-row mb-3 text-sm text-primary line-clamp-1">
            <Text className="truncate">{label}</Text>
            {required ? (
              <Text className="text-feedback-error"> *</Text>
            ) : (
              <Text aria-hidden> (optional)</Text>
            )}
          </Text>
        )}

        <View
          className={`${wrapperClasses}`}
          // onFocus={() => setIsActive(true)} // Handled via TextInput prop
          // onBlur={() => setIsActive(false)} // Handled via TextInput prop
          // ref={inputRef} // The ref is for the TextInput now, not this wrapper
          data-testid="input-wrapper"
        >
          <TextInput
            aria-invalid={error}
            ref={ref}
            className={`p-5 bg-white rounded-lg text-gray-500`} // Using textInputClassNames here
            editable={isEditable}
            onChangeText={onChangeText} // RN prop for text changes
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            // Not directly applicable: name, id (use testID/accessibilityLabel)
            // required (visual only)
            // type (handled by secureTextEntry/keyboardType)
            // hidePlaceholderOnFocus (RN default behavior is different)
            testID={dataTestId}
            accessibilityLabel={label || placeholder}
            // accessibilityInvalid={error}
            // {...rest} // Pass down other TextInput compatible props
          />

          <View className="absolute inset-y-0 right-4 flex items-center">
            {!!displayClearButton && (
              <TouchableOpacity
                accessibilityLabel="Clear input"
                onPress={handleOnClear}
                className={`p-1 cursor-pointer ${clearButtonOptions.className}`} // Add padding for touch target, cursor-pointer has no effect
                testID="clear-button"
                // tabIndex has no effect in RN
              >
                <AtIcon type={clearButtonOptions.type} color="secondary" />
              </TouchableOpacity>
            )}

            {showPasswordButton && passwordIcon && (
              <TouchableOpacity
                accessibilityLabel="Toggle password visibility"
                onPress={handleOnTogglePassword}
                className={`p-1 ${passwordButtonClasses({
                  showIcon: !!showIcon,
                })}`} // Apply password button styling
                testID="show-password-button"
              >
                {/* Assuming AtIcon handles the correct icon based on isPasswordVisible or some logic */}
                <View>
                  <AtIcon
                    className="relative -z-10"
                    type={passwordIcon}
                    color="primary"
                  />
                </View>
              </TouchableOpacity>
            )}

            {showIcon && (
              <AtIcon
                {...icon}
                dataTestId={`${icon?.type ? `${icon.type}-` : ""}custom-icon`}
              />
            )}
            {showCheckIcon && (
              <AtIcon
                type="check"
                color="currentColor"
                className="text-feedback-success"
                dataTestId="check-icon"
              />
            )}
            {showErrorIcon && (
              <AtIcon
                type="alert"
                color="currentColor"
                dataTestId="error-icon"
                className="text-feedback-error"
              />
            )}
          </View>
        </View>

        {!error && helpText && (
          <Text className="mt-1 text-xs text-gray-600">{helpText}</Text>
        )}
        {error && errorText && (
          <Text className="mt-1 text-xs text-feedback-error">{errorText}</Text>
        )}
      </View>
    );
  }
);

AtTextInput.displayName = "AtTextInput";
