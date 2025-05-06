import { ReactNode } from 'react'
import { AtLinkProps } from '../../atoms'
import { MlMediaProps } from '../ml-media'

const ML_VERTICAL_SIZES = {
  SMALL: 'small',
  REGULAR: 'regular',
} as const

export type MlVerticalSize = (typeof ML_VERTICAL_SIZES)[keyof typeof ML_VERTICAL_SIZES]

export enum MlVerticalAlign {
  START = 'start',
  CENTER = 'center',
}

export interface MlVerticalProps {
  /** Alignment of the content, either `START` or `CENTER`. */
  align?: MlVerticalAlign

  /** The body content or description that provides additional information. */
  body?: ReactNode

  /** Properties for an optional button, including the label and link. */
  buttonProps?: Pick<AtLinkProps, 'linkWrapper' | 'label' | 'href' | 'buttonStyleProps'>

  /** Additional CSS classes for custom styling. */
  className?: string

  /** An optional icon to visually represent the section. */
  icon?: 'heart-big' | 'reload' | 'plane' | 'badge' | 'shopping-bag' | 'user'

  /** Properties for an optional image, including desktop and mobile sources. */
  image?: MlMediaProps

  /** The main heading or title of the vertical section. */
  title: string
}
