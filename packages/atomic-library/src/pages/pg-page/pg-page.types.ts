import { ReactNode } from 'react'
import { OrFooterProps, OrHeaderProps } from '../../organisms'

export interface PgPageProps {
  header: OrHeaderProps
  children: ReactNode
  footer: OrFooterProps
}
