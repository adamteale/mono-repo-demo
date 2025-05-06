export type RichTextAlignment = 'start' | 'center' | 'end'

export interface RichTextProps {
  text: any
  textAlignment?: RichTextAlignment
  className?: string
  /** Useful if you want to replace placeholders within the rich text with values held by the app state */
  placeholders?: {
    matchers: Record<string, string>
    state: object
  }
  title?: string
  titleClassName?: string
}
