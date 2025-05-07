import React, { useState } from 'react'
import { AtTextInputProps } from './at-text-input.types'
import { AtTextInput } from './at-text-input'

export const ExpirationDate = ({ placeholder, name, maxLength }: AtTextInputProps) => {
  const [inputValue, setInputValue] = useState<string | readonly string[] | number | undefined>()

  const handleExpirationDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    if (event.target.value.length === 2 && inputValue && inputValue.toString().length === 1) {
      setInputValue(`${event.target.value}/`)
    }
  }

  return (
    <AtTextInput
      placeholder={placeholder}
      maxLength={maxLength}
      name={name}
      value={inputValue ?? ''}
      onChange={handleExpirationDate}
    />
  )
}
