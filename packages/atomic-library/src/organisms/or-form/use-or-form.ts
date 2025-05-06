import { Dispatch, useMemo, useReducer } from 'react'
import { OrFormControls } from './or-form.types'
import { MlFormFieldType, SearchResult } from '../../molecules'

type OrFormStateKey = {
  value: string | boolean | SearchResult
  error: boolean
  required: boolean
  type: MlFormFieldType
  validator?: RegExp | ((value: string) => boolean)
}

export type OrFormState = {
  isValid: boolean
  values: Record<string, OrFormStateKey>
}

export type OrFormAction =
  | { type: 'set-value'; key: string; payload: string | boolean }
  | { type: 'reset-state'; payload: OrFormState }
  | { type: 'toggle'; payload: string }
  | { type: 'change-fields'; payload: OrFormControls }

const validateForm = (values: OrFormState['values']) => {
  const keys = Object.keys(values)

  for (const key of keys) {
    const isValid = validateInput(values[key].value, values[key])
    if (!isValid) return false
  }

  return true
}

const validateInput = (value: unknown, controls: OrFormStateKey) => {
  const validator = controls.validator
  const required = controls.required

  if (required && validator && typeof value === 'string') {
    if (validator instanceof RegExp) {
      return validator.test(value)
    }
    return validator(value)
  }

  if (!validator && required) {
    return !!value
  }

  return true
}

const reducer = (state: OrFormState, action: OrFormAction) => {
  switch (action.type) {
    case 'set-value': {
      const key = state.values[action.key]
      const value = action.payload
      let isValid = true
      const error = !validateInput(value, key)

      const formValues = {
        ...state.values,
        [action.key]: {
          ...state.values[action.key],
          value,
          error,
        },
      }

      if (error) {
        isValid = false
      } else {
        const validForm = validateForm(formValues)
        if (!validForm) isValid = false
      }

      return {
        isValid,
        values: formValues,
      }
    }

    case 'reset-state': {
      return {
        ...state,
        ...action.payload,
      }
    }

    case 'toggle': {
      const key = state.values[action.payload]
      const value = key.value

      if (typeof value !== 'boolean') {
        return {
          ...state,
        }
      }

      let isValid = true
      const error = !validateInput(value, key)

      const formValues = {
        ...state.values,
        [action.payload]: {
          ...state.values[action.payload],
          value: !value,
          error,
        },
      }

      if (error) {
        isValid = false
      } else {
        const validForm = validateForm(formValues)
        if (!validForm) isValid = false
      }

      return {
        isValid,
        values: {
          ...state.values,
          [action.payload]: {
            ...state.values[action.payload],
            value: !value,
          },
        },
      }
    }

    case 'change-fields': {
      const previousValues = state.values
      const controls = action.payload
      const keys = Object.keys(controls)

      const newState: Record<string, OrFormStateKey> = {}

      for (const key of keys) {
        const previousKey = previousValues[key]
        const type = controls[key].type
        let value: boolean | string | SearchResult = ''

        if (type === 'title') continue

        value = previousKey?.value ?? controls[key].value ?? ''

        if (type === 'checkbox') {
          value = previousKey?.value ?? controls[key].checked ?? false
        }

        if (type === 'radiocard') {
          value = (controls[key].value as boolean) ?? false
        }

        newState[key] = {
          value,
          error: previousKey?.error ?? false,
          required: controls[key].required ?? previousKey?.required ?? false,
          type,
          validator: controls[key].validator,
        }
      }

      const isValid = validateForm(newState)

      return {
        isValid,
        values: newState,
      }
    }

    default:
      return state
  }
}

export interface OrFormManager {
  state: OrFormState
  dispatch: Dispatch<OrFormAction>
  resetForm: () => void
  clearInput: (key: string) => void
  changeFields: (controls: OrFormControls) => void
}

export const useOrForm = (controls: OrFormControls): OrFormManager => {
  const initialState = useMemo(() => {
    const values: Record<string, OrFormStateKey> = {}

    Object.keys(controls).forEach((key) => {
      const type = controls[key].type

      if (type !== 'title') {
        let value: boolean | string = (controls[key].value as string) || ''

        if (type === 'checkbox') {
          value = controls[key].checked ?? false
        }

        values[key] = {
          value,
          error: false,
          required: controls[key].required || false,
          type: controls[key].type,
          validator: controls[key].validator,
        }
      }
    })

    return { values, isValid: false }
  }, [controls])
  const [state, dispatch] = useReducer(reducer, initialState)

  const resetForm = () => {
    dispatch({
      type: 'reset-state',
      payload: initialState,
    })
  }

  const clearInput = (key: string) => {
    const control = state.values[key]
    if (
      control.type === 'input' ||
      control.type === 'phone' ||
      control.type === 'password' ||
      control.type === 'search'
    ) {
      dispatch({
        key,
        type: 'set-value',
        payload: '',
      })
    }

    // TODO: Handle other types of input
    // checkbox
    // select
    // radio
  }

  const changeFields = (controls: OrFormControls) => {
    dispatch({
      type: 'change-fields',
      payload: controls,
    })
  }

  return { state, dispatch, resetForm, clearInput, changeFields }
}
