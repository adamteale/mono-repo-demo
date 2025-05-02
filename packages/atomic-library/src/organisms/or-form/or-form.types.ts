import { FormHTMLAttributes } from 'react'
import { MlFormFieldProps } from '../../molecules'
import { AtButtonProps } from '../../atoms'
import { OrFormManager, OrFormState } from './use-or-form'

export enum OrFormColumn {
  ONE = 'one',
  TWO = 'two',
  FOUR = 'four',
}

export interface FormTypeConfig {
  [key: string]: {
    enabled: boolean
    data: Record<string, unknown>
  }
}

export interface OrFormControls {
  [key: string]: MlFormFieldProps
}

export interface OrFormProps extends FormHTMLAttributes<HTMLFormElement> {
  title?: string
  subtitle?: string
  controls: OrFormControls
  button?: AtButtonProps
  columns: OrFormColumn
  dataTestId?: string
  noValidate?: boolean
  handleSubmit: (state: OrFormState) => void
  resetOnSubmit?: boolean
  changeControls?: boolean
  manager: OrFormManager
}
