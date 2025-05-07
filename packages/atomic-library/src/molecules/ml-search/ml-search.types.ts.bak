export interface SearchResult {
  value: string
  label: string
}

export enum MlSearchSize {
  SMALL = 'small',
  LARGE = 'large',
}

export interface MlSearchProps {
  /** Placeholder text displayed inside the input field. */
  placeholder?: string

  /** Label text for the form field. */
  label?: string

  /** Array of search results, either as strings or `SearchResult` objects. */
  results?: string[] | SearchResult[]

  /** Maximum number of characters allowed in the input. */
  maxLength?: number

  /** CSS class for column styling. */
  columnClass?: string

  /** If true, a separator line will be displayed below the field. */
  separator?: boolean

  /** Name of the field for form submission. */
  fieldName?: string

  /** CSS class for styling the form field. */
  className?: string

  /** Text displayed below the field to provide guidance or instructions. */
  helpText?: string

  /** Error text displayed when validation fails. */
  errorText?: string

  /** If true, the field will be disabled. */
  disabled?: boolean

  /** If true, the field will display an error state. */
  error?: boolean

  /** If true, the field will be mandatory. */
  required?: boolean

  /** Function called when the field value changes. Optionally, a result object can be provided. */
  handleChange?: (value: string, result?: SearchResult) => void

  /** Function called when the clear input button is clicked. */
  handleClear?: () => void

  /** Current value of the field, which can be a string or a `SearchResult` object. */
  value?: string | SearchResult

  /** Specifies the size of the search input field. Can be 'small' or 'large'. */
  size?: MlSearchSize
}
