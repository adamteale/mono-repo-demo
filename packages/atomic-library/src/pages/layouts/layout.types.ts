import { ReactNode } from 'react'
import { OrHeaderProps, OrFooterProps } from '../../organisms'

export interface LayoutProps {
  header: OrHeaderProps
  footer: OrFooterProps
  children?: ReactNode
}
