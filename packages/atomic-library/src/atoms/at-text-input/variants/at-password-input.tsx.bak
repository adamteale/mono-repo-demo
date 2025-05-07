import { useMemo, useState } from 'react'
import { AtTextInput } from '../at-text-input'
import { AtTextInputProps } from '../at-text-input.types'
import { creditNumberFormatter, cvvFormatter, expirationDateFormatter } from '../formatters'

export const AtPasswordInput = ({
  label,
  placeholder,
  name,
  maxLength,
  helpText,
  required,
  defaultValue,
  readOnly,
  className = '',
  value,
  error,
  disabled,
  dataTestId,
  hidePlaceholderOnFocus,
  icon,
  handleChange,
  onClearInputClick,
  errorText,
  isExpirationDate = false,
  isCreditCard = false,
  isCvv = false,
}: AtTextInputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = useMemo(() => (showPassword ? 'text' : 'password'), [showPassword])
  const passwordIcon = useMemo(() => (showPassword ? 'visibility-off' : 'visibility'), [showPassword])

  const handlePasswordToggle = () => {
    setShowPassword((showPassword) => !showPassword)
  }

  const onHandleChange = (value: string) => {
    let formattedValue = value

    if (isExpirationDate) {
      formattedValue = expirationDateFormatter(value)
    } else if (isCreditCard) {
      formattedValue = creditNumberFormatter(value)
    } else if (isCvv) {
      formattedValue = cvvFormatter(value)
    }

    handleChange?.(formattedValue)
  }

  return (
    <AtTextInput
      placeholder={placeholder}
      defaultValue={defaultValue}
      required={required}
      label={label}
      readOnly={readOnly}
      maxLength={maxLength}
      name={name}
      className={className}
      dataTestId={dataTestId}
      helpText={helpText}
      disabled={disabled}
      error={error}
      value={value}
      type={inputType}
      handlePasswordToggle={handlePasswordToggle}
      onClearInputClick={onClearInputClick}
      showPasswordButton={true}
      passwordIcon={passwordIcon}
      hidePlaceholderOnFocus={hidePlaceholderOnFocus}
      handleChange={onHandleChange}
      icon={icon}
      errorText={errorText}
      showSuccessIcon={false}
    />
  )
}
