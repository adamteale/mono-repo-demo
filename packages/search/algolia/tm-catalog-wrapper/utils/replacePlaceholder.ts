export const replacePlaceholder = (text: string, placeholders: Record<string, string>, state: object) => {
  const replacers = Object.entries(placeholders)

  return replacers.reduce<string>((text, [key, value]) => {
    return text.replace(value, state[key as keyof typeof state] ?? '')
  }, text)
}
