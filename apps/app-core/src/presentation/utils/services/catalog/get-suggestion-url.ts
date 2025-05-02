export const getSuggestionUrl = ({ value, slug }: { value: string; slug?: string }) => {
  return `/catalog/${slug ? slug : `?query=${encodeURI(value)}`}`
}
