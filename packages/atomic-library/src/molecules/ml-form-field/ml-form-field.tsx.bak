import {
  AtTextInput,
  AtCheckbox,
  AtPhoneInput,
  AtPasswordInput,
  AtLink,
  AtTextArea,
} from "../../atoms";
import {
  MlRadioCard,
  MlRadioCardSkeleton,
  MlSearch,
  MlSearchSize,
} from "../../molecules";
import { Select } from "./select";
import { MlFormFieldProps, MlFormFieldType } from "./ml-form-field.types";

export const MlFormField = ({
  type,
  placeholder,
  label,
  defaultValue,
  options = [],
  results = [],
  insideIcon,
  maxLength,
  fieldName,
  required = false,
  readOnly = false,
  className = "",
  value,
  handleChange,
  onClearInputClick,
  helpText = "",
  disabled = false,
  error = false,
  errorText,
  showSuccessIcon,
  onClick,
  checked,
  href,
  isExpirationDate = false,
  isCreditCard = false,
  isCvv = false,
  title,
  description,
  size = MlSearchSize.SMALL,
  inputName,
}: MlFormFieldProps) => {
  switch (type) {
    case MlFormFieldType.INPUT: {
      return (
        <AtTextInput
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          label={label}
          readOnly={readOnly}
          icon={insideIcon}
          maxLength={maxLength}
          name={fieldName}
          className={`${className}`}
          dataTestId={fieldName}
          helpText={helpText}
          disabled={disabled}
          error={error}
          errorText={errorText}
          value={value as string}
          handleChange={handleChange}
          onClearInputClick={onClearInputClick}
          hidePlaceholderOnFocus
        />
      );
    }

    case MlFormFieldType.PHONE: {
      return (
        <AtPhoneInput
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          label={label}
          readOnly={readOnly}
          maxLength={maxLength}
          name={fieldName}
          className={className}
          dataTestId={fieldName}
          helpText={helpText}
          disabled={disabled}
          error={error}
          errorText={errorText}
          value={value as string}
          icon={insideIcon}
          handleChange={handleChange}
          onClearInputClick={onClearInputClick}
          showSuccessIcon={showSuccessIcon}
        />
      );
    }

    case MlFormFieldType.SELECT: {
      return (
        <Select
          label={label}
          options={options}
          placeholder={placeholder}
          className={className}
          helpText={helpText}
          error={error}
          disabled={disabled}
          dataTestId={fieldName}
          handleChange={handleChange}
          required={required}
        />
      );
    }

    case MlFormFieldType.CHECKBOX: {
      return (
        <AtCheckbox
          disabled={disabled}
          checked={checked}
          label={label}
          className={className}
          onClick={onClick ? onClick : () => {}}
          dataTestId={fieldName}
          required={required}
        />
      );
    }

    case MlFormFieldType.PASSWORD: {
      return (
        <AtPasswordInput
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          label={label}
          readOnly={readOnly}
          icon={insideIcon}
          maxLength={maxLength}
          name={fieldName}
          className={className}
          dataTestId={fieldName}
          helpText={helpText}
          disabled={disabled}
          error={error}
          errorText={errorText}
          value={value as string}
          handleChange={handleChange}
          onClearInputClick={onClearInputClick}
          hidePlaceholderOnFocus
          isExpirationDate={isExpirationDate}
          isCreditCard={isCreditCard}
          isCvv={isCvv}
        />
      );
    }

    case MlFormFieldType.SEARCH: {
      return (
        <MlSearch
          placeholder={placeholder}
          required={required}
          label={label}
          maxLength={maxLength}
          fieldName={fieldName}
          className={className}
          helpText={helpText}
          disabled={disabled}
          error={error}
          errorText={errorText}
          value={value as string}
          results={results}
          handleChange={handleChange}
          handleClear={onClearInputClick}
          size={size}
        />
      );
    }

    case MlFormFieldType.RADIO_CARD: {
      return (
        <MlRadioCard
          radioProps={{
            title,
            description,
            checked: value as boolean,
            disabled,
            className,
            inputName,
            dataTestId: fieldName,
            onChange: handleChange ? handleChange : () => {},
          }}
          label={label}
        />
      );
    }

    case MlFormFieldType.RADIO_CARD_SKELETON: {
      return <MlRadioCardSkeleton checked={checked} />;
    }

    case MlFormFieldType.TEXT: {
      return <Text className={`text-primary ${className}`}>{label || ""}</Text>;
    }

    case MlFormFieldType.TITLE: {
      return (
        <h4
          className={`font-bold text-lgx md:text-xl text-primary ${className}`}
        >
          {label || ""}
        </h4>
      );
    }

    case MlFormFieldType.LINK: {
      return <AtLink label={label} href={href || "#"} />;
    }

    case MlFormFieldType.TEXT_AREA: {
      return (
        <AtTextArea
          placeholder={placeholder}
          defaultValue={defaultValue}
          required={required}
          label={label}
          readOnly={readOnly}
          maxLength={maxLength}
          name={fieldName}
          className={`${className}`}
          dataTestId={fieldName}
          helpText={helpText}
          disabled={disabled}
          error={error}
          errorText={errorText}
          value={value as string}
          handleChange={handleChange}
        />
      );
    }

    default: {
      return null;
    }
  }
};
