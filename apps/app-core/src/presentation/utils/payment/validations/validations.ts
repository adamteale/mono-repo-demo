const visaExpression = '^4[0-9]{12}(?:[0-9]{3})?$'
const masterCardExpression = '^(5[1-5][0-9]{14}|2[2-7][0-9]{14})$'
const amexExpression = '^3[47][0-9]{13}$'
const discoverExpression =
  '^6(?:011\\d{12}|5\\d{14}|4[4-9]\\d{13}|22(?:1(?:2[6-9]|[3-9]\\d)|[2-8]\\d{2}|9(?:[01]\\d|2[0-5]))\\d{10})$'

export const luhnCheck = (cardNumber: string) => {
  let sum = 0
  let shouldDouble = false

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10)

    if (shouldDouble) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }

    sum += digit
    shouldDouble = !shouldDouble
  }

  return sum % 10 === 0
}

const cardPatterns = {
  visa: visaExpression,
  mastercard: masterCardExpression,
  amex: amexExpression,
  discover: discoverExpression,
}

export const getCardServiceName = (cardNumber: string) => {
  const cleanCardNumber = cardNumber.replace(/\D/g, '')

  for (const [serviceName, pattern] of Object.entries(cardPatterns)) {
    const regex = new RegExp(pattern)
    if (regex.test(cleanCardNumber)) {
      return serviceName
    }
  }

  return ''
}

export const isValidCardNumber = (cardNumber: string) => {
  const cleanCardNumber = cardNumber.replace(/\D/g, '')

  if (!luhnCheck(cleanCardNumber)) return false

  return Object.values(cardPatterns).some((pattern) => new RegExp(pattern).test(cleanCardNumber))
}

export const isValidExpirationDate = (expirationDate: string) => {
  if (expirationDate.length < 5) return false

  const [month, year] = expirationDate.split('/')
  const parsedYear = +year
  const parsedMonth = +month

  const actualDate = new Date()
  const parsedActualYear = +actualDate.getFullYear().toString().slice(-2)
  const parsedActualMonth = actualDate.getMonth() + 1

  if (parsedMonth < 1 || parsedMonth > 12) return false
  else if (parsedYear < parsedActualYear) return false
  else if (parsedYear === parsedActualYear && parsedMonth < parsedActualMonth) return false

  return true
}
