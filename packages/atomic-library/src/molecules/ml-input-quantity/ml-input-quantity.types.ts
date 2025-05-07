import { View } from "react-native";export interface MlInputQuantityProps {
  initialValue?: number | ''
  minValue?: number
  maxValue?: number
  onValueChange?: (quantity: number) => void
  isInputDisabled?: boolean
}
