import { View } from "react-native";export type Rating = 0 | 1 | 2 | 3 | 4 | 5

export interface AtRatingProps {
  /** The initial rating value when the component is first rendered. This prop is useful for setting a default rating that users can adjust. */
  initialRating?: Rating

  /**
   * A callback function that is triggered when the rating changes. It receives an object with the `selectedRating` property, which indicates the new rating value. This prop is essential for handling user interactions and updating the rating dynamically.
   * @param param.selectedRating - The new selected rating.
   */
  onChange?: ({ selectedRating }: { selectedRating: Rating }) => void

  /** The current rating value, which can be any number from 0 to 5. This prop allows the component to display the current rating. */
  stars?: Rating
}
