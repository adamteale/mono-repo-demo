import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import { AtTextInputProps } from "./at-text-input.types";
import { AtIcon } from "../at-icon";
import { useClickOutside } from "../../utils";
import {
  inputClasses,
  inputPaddingClasses,
  inputWrapperClasses,
  passwordButtonClasses,
} from "./at-text-input.variants";

export const AtTextInput = forwardRef<HTMLInputElement, AtTextInputProps>(
  (
    {
      className = "",
      disabled,
      placeholder,
      readOnly,
      type,
      defaultValue,
      icon,
      error = false,
      value,
      required,
      maxLength,
      name,
      handleChange,
      onClearInputClick,
      id,
      inputMode,
      label,
      dataTestId = "input",
      helpText,
      showSuccessIcon = true,
      handlePasswordToggle,
      showPasswordButton = false,
      passwordIcon,
      hidePlaceholderOnFocus = false,
      errorText,
      smallOnMobile = false,
      showClearButton = true,
      showErrorIcon: showInvalidInputIcon = true,
      clearButtonOptions = {
        className: "",
        type: "cancel",
      },
      ...rest
    }: AtTextInputProps,
    ref
  ) => {
    const [isActive, setIsActive] = useState(false);
    const inputRef = useRef<HTMLDivElement>(null);

    const handleOnClear = useCallback(() => {
      setIsActive(false);
      onClearInputClick?.();
    }, [onClearInputClick]);

    const handleOnTogglePassword = useCallback(() => {
      setIsActive(false);
      handlePasswordToggle?.();
    }, [handlePasswordToggle]);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleChange?.(event.target.value);
    };

    useClickOutside(inputRef, () => setIsActive(false));

    const getWrapperClasses = useCallback(() => {
      return inputWrapperClasses({
        active: isActive,
        disabled,
        error,
        smallOnMobile,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [error, value, disabled, isActive, smallOnMobile]);

    const displayClearButton = useMemo(
      () =>
        !readOnly &&
        isActive &&
        value &&
        !showPasswordButton &&
        showClearButton,
      [readOnly, isActive, value, showPasswordButton, showClearButton]
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [icon, value, error, isActive, readOnly, disabled]
    );

    const showErrorIcon = useMemo(
      () => !passwordIcon && value && !icon && error && showInvalidInputIcon,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [error, value, icon, showInvalidInputIcon]
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

    return (
      <label className="flex flex-col">
        {label && (
          <Text className="flex flex-row mb-3 text-sm text-primary line-clamp-1">
            <Text className="truncate">{label}</Text>
            {required ? (
              <Text className="text-feedback-error">&nbsp;*</Text>
            ) : (
              <Text aria-hidden>&nbsp;(optional)</Text>
            )}
          </Text>
        )}

        <View
          className={getWrapperClasses()}
          onFocus={() => setIsActive(true)}
          ref={inputRef}
          data-testid="input-wrapper"
        >
          <input
            aria-invalid={error}
            ref={ref}
            className={`
              ${inputClasses({ hidePlaceholderOnFocus })}
              ${inputPaddingClasses({ state: paddingStates })}
              ${className}`}
            disabled={disabled}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
            type={type}
            defaultValue={defaultValue}
            inputMode={inputMode}
            value={value}
            required={required}
            maxLength={maxLength}
            name={name}
            id={id}
            data-testid={dataTestId}
            {...rest}
          />

          <View className="absolute inset-y-0 right-4 flex items-center">
            {!!displayClearButton && (
              <button
                aria-label="Clear input"
                onClick={handleOnClear}
                type="button"
                className={`cursor-pointer ${clearButtonOptions.className}`}
                data-testid="clear-button"
                tabIndex={0}
              >
                <AtIcon type={clearButtonOptions.type} />
              </button>
            )}

            {!!showPasswordButton && (
              <button
                aria-label="Toggle password visibility"
                onClick={handleOnTogglePassword}
                type="button"
                className={passwordButtonClasses({ showIcon: !!showIcon })}
                data-testid="show-password-button"
                tabIndex={0}
              >
                <View>
                  <AtIcon
                    className="relative -z-10"
                    type={passwordIcon}
                    color="primary"
                  />
                </View>
              </button>
            )}

            {!!showIcon && (
              <AtIcon
                {...icon}
                dataTestId={`${icon?.type ? `${icon?.type}-` : ""}custom-icon`}
              />
            )}
            {!!showCheckIcon && (
              <AtIcon
                type="check"
                color="currentColor"
                className="text-feedback-success"
                dataTestId="check-icon"
              />
            )}
            {!!showErrorIcon && (
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
          <Text className={`mt-1 text-sm text-tertiary`}>{helpText}</Text>
        )}
        {error && errorText && (
          <Text className={`mt-1 text-sm text-feedback-error`}>
            {errorText}
          </Text>
        )}
      </label>
    );
  }
);
AtTextInput.displayName = "AtTextInput";
