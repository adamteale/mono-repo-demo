import { ReactNode } from 'react'

export interface MobileSearchboxContextType {
  showMobileSearchbox: boolean
  searchRef: React.RefObject<HTMLDivElement | null>
  toggleMobileSearchbox: (_event?: React.MouseEvent<HTMLButtonElement>) => void
}

export interface MobileSearchboxProviderProps {
  children: ReactNode
}
