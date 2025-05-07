import { View } from "react-native";/**
 * This is a pretty basic phone formatter
 * it was created mostly with a US/CA +1 and two digits
 * country codes in mind.
 * If necessary a more detailed implementation/library
 * should be used
 */
export const phoneFormatter = (input: string): string => {
  if (!input) return '+'

  const cleaned = ('' + input).replace(/\D/g, '')
  const isUS = cleaned.startsWith('1')

  let countryCode
  let rest

  if (isUS) {
    countryCode = '1'
    rest = cleaned.slice(1, cleaned.length)
  }

  if (cleaned.length > 2 && !isUS) {
    countryCode = cleaned.slice(0, 2)
    rest = cleaned.slice(2, cleaned.length)
  }

  if (cleaned.length > 12) {
    countryCode = cleaned.slice(0, 3)
    rest = cleaned.slice(3, cleaned.length)
  }

  if (countryCode) {
    return `(+${countryCode}) ${rest}`
  }

  if (cleaned.length === 0) {
    return ''
  }

  return `(+${cleaned})`
}

export const expirationDateFormatter = (value: string) => {
  let formattedValue = value.replace(/\D+/g, '')

  if (formattedValue.length > 2) {
    formattedValue = `${formattedValue.substring(0, 2)}/${formattedValue.substring(2)}`
  }

  return formattedValue
}

export const creditNumberFormatter = (value: string) => {
  const numericValue = value.replace(/\D/g, '')
  const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, '$1 ')

  return formattedValue
}

export const cvvFormatter = (value: string) => {
  const numericOnly = value.replace(/\D/g, '')
  const formattedValue = numericOnly.substring(0, 3)

  return formattedValue
}
