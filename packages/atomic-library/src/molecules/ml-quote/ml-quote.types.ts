import { AtImageProps } from '../../atoms'

export interface MlQuoteProps {
  /**  An object containing the author's details. */
  author: MlQuoteAuthorProps

  /** The heading or title of the quote section. */
  heading: string

  /** The actual testimonial text provided by the customer. */
  quoteText: string
}

export interface MlQuoteAuthorProps {
  /** An optional property for the author's image. */
  image?: AtImageProps

  /** The name of the author. */
  name: string

  /** The role or title of the author. */
  role: string
}
