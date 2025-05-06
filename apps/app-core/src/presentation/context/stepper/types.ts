import { ReactNode } from 'react'

export interface StepData<T> {
  label: string
  data: T
}

export type StepperState<T> = {
  steps: StepData<T>[]
  currentStep: number
}

export type StepperProviderProps<T> = {
  children: ReactNode
  steps: StepData<T>[]
}

export type StepperAction<T> =
  | { type: 'NEXT'; payload: T }
  | { type: 'BACK'; payload: T | undefined }
  | { type: 'SET_STEP'; payload: { step: number; data: T } }

export type StepperContextType<T> = {
  state: StepperState<T>
  dispatch: React.Dispatch<StepperAction<T>>
  goToNextStep: (data: T) => void
  goToPreviousStep: () => void
  setStep: (step: number, data: T) => void
}
