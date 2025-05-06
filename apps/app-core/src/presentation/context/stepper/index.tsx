import { createContext, JSX, useReducer } from 'react'
import { StepperAction, StepperContextType, StepperProviderProps, StepperState } from './types'

export const stepperReducer = <T,>(state: StepperState<T>, action: StepperAction<T>): StepperState<T> => {
  switch (action.type) {
    case 'NEXT':
      const updatedStepsForNext = state.steps.map((step, index) => {
        if (index === state.currentStep) {
          return { ...step, data: action.payload }
        }
        return step
      })

      return {
        ...state,
        steps: updatedStepsForNext,
        currentStep: Math.min(state.steps.length - 1, state.currentStep + 1),
      }
    case 'BACK':
      const updatedStepsForBack = state.steps.map((step, index) => {
        if (index > state.currentStep - 1) {
          return { ...step, data: {} as T }
        }
        return step
      })

      return {
        ...state,
        steps: updatedStepsForBack,
        currentStep: Math.max(0, state.currentStep - 1),
      }
    case 'SET_STEP':
      const newSteps = [...state.steps]
      newSteps[action.payload.step] = { ...newSteps[action.payload.step], data: action.payload.data }
      return {
        ...state,
        steps: newSteps,
        currentStep: action.payload.step,
      }
    default:
      return state
  }
}

export const StepperContext = createContext({} as StepperContextType<any>)
StepperContext.displayName = 'StepperContext'

export const StepperProvider = <T,>({ children, steps }: StepperProviderProps<T>): JSX.Element => {
  const initialState: StepperState<T> = {
    steps,
    currentStep: 0,
  }

  const [state, dispatch] = useReducer(stepperReducer, initialState)

  const goToNextStep = (data: T) => {
    dispatch({ type: 'NEXT', payload: data })
  }

  const goToPreviousStep = () => {
    dispatch({
      type: 'BACK',
      payload: undefined,
    })
  }

  const setStep = (step: number, data: T) => {
    dispatch({ type: 'SET_STEP', payload: { step, data } })
  }

  return (
    <StepperContext.Provider value={{ state, dispatch, goToNextStep, goToPreviousStep, setStep }}>
      {children}
    </StepperContext.Provider>
  )
}
