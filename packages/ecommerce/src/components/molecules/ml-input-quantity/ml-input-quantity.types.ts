export enum MlInputQuantitySize {
  SMALL = 'small',
  LARGE = 'large',
}
export interface MlInputQuantityProps {
  /** The starting value of the input, which can be a number or an empty string. */
  initialValue?: number | ''

  /** A boolean flag to disable the input, preventing user interaction. */
  isInputDisabled?: boolean

  /** The maximum allowable value for the input. */
  maxValue?: number

  /** The minimum allowable value for the input. */
  minValue?: number

  /** A callback function that is triggered whenever the quantity value changes, receiving the new quantity as an argument. */
  onValueChange?: (quantity: number) => void

  /** The size of the input, which can be either `SMALL` or `LARGE`, as defined by the `MlInputQuantitySize` enum. */
  size: MlInputQuantitySize
}
