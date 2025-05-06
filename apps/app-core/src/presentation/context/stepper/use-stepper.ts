import { useContext } from 'react'
import { StepperContextType } from './types'
import { StepperContext } from '.'

export function useStepper<T>(): StepperContextType<T> {
  return useContext(StepperContext as React.Context<StepperContextType<T>>)
}
