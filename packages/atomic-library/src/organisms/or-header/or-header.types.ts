import { AtLinkProps, MlMediaProps } from '../..'
import { ReactNode } from 'react'

export interface OrHeaderProps {
  brand?: {
    link: Pick<AtLinkProps, 'href' | 'linkWrapper'>
    image: MlMediaProps
  }
  stickBarContent?: ReactNode
  menuItems?: HeaderMenuItem[]
  topLinks?: AtLinkProps[]
  isStickBarHidden?: boolean
  onCloseStickbar?: () => void
}

export interface HeaderMenuItem {
  label: string
  linkProps?: Pick<AtLinkProps, 'href' | 'linkWrapper'>
  children?: HeaderMenuSubItem[]
}

export interface HeaderMenuSubItem {
  label: string
  linkProps?: Pick<AtLinkProps, 'href' | 'linkWrapper'>
  children?: HeaderMenuSubItemChild[]
}

export interface HeaderMenuSubItemChild {
  label?: string
  linkProps?: Pick<AtLinkProps, 'href' | 'linkWrapper'>
}
