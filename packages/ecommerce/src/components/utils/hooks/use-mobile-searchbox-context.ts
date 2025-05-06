import { useContext } from 'react'
import { MobileSearchboxContext, MobileSearchboxContextType } from '../contexts'

export const useMobileSearchboxContext = (): MobileSearchboxContextType => {
  const context = useContext(MobileSearchboxContext)

  if (context === undefined) {
    throw new Error('useMobileSearchboxContext must be used within a MobileSearchboxProvider')
  }

  return context
}
