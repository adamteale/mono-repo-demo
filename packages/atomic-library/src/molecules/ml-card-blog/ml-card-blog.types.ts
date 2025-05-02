import { AtLinkProps } from '../../atoms'
import { MlMediaProps } from '../ml-media'

export interface MlCardBlogProps {
  image: MlMediaProps
  publicationDate: string
  author: string
  title: string
  description: string
  link: AtLinkProps
  category?: string
  dataTestId?: string
  className?: string
}
