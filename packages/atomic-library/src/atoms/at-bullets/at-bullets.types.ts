import { View } from "react-native";export interface AtBulletsProps {
  /** The index of the active bullet. */
  activeBulletIndex?: number

  /** The total number of bullets. */
  bulletsCount: number

  /** The data test ID for the component. */
  dataTestId?: string

  /**
   * The callback function triggered when a bullet is clicked.
   * @param index - The index of the clicked bullet.
   */
  onClick: (index: number) => void
}
