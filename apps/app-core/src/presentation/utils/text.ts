export const firstLetterToUppercase = (words: string) => {
  return words
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ')
}

/**
 * Replacement helper from placeholders from the current state, dependent on the actual context this function is going to be used.
 * @param text To replace placeholders from
 * @param placeholders Object containing the keys in the actual state, the value of each key is the placeholder present in the original text
 * @param state Object containing the current state needed for the defined placeholders
 */
export const replacePlaceholder = (text: string, placeholders: Record<string, string>, state: object) => {
  const replacers = Object.entries(placeholders)

  return replacers.reduce<string>((text, [key, value]) => {
    return text.replace(value, state[key as keyof typeof state] ?? '')
  }, text)
}

export function camelToKebabCase(str: string) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

const numberMatcher = /^[0-9]+$/
export const isNumber = (value: string) => numberMatcher.test(value)

export const iconMatcher = /:icon-([a-z0-9\-]+):/
export const globalIconMatcher = /(:icon-[a-z0-9\-]+:)/g
export const isIcon = (value: string) => iconMatcher.test(value)

export const iconBulletMatcher = /^:icon-bullet-([a-z0-9\-]+):/

export const socialMatcher = /:social-([a-z0-9\-]+):/
