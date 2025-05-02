import { createContext } from 'react'
import { useMobileSearchbox } from '../../../organisms/or-header/searchbox/use-mobile-searchbox'
import { MobileSearchboxContextType, MobileSearchboxProviderProps } from './mobile-searchbox-context.type'

export const MobileSearchboxContext = createContext<MobileSearchboxContextType | undefined>(undefined)

export const MobileSearchboxProvider: React.FC<MobileSearchboxProviderProps> = ({ children }) => {
  const { showMobileSearchbox, searchRef, toggleMobileSearchbox } = useMobileSearchbox()

  return (
    <MobileSearchboxContext.Provider value={{ showMobileSearchbox, searchRef, toggleMobileSearchbox }}>
      {children}
    </MobileSearchboxContext.Provider>
  )
}
