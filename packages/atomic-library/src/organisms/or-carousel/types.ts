import type { ListRenderItem } from "react-native";

export interface OrCarouselProps<T> {
  /** Color of the bullet of the currently visible item */
  activeBulletColor?: string;

  /**
   * An array (or array-like list) of items to render. Other data types can be used by targeting VirtualizedList directly
   * @see https://reactnative.dev/docs/flatlist#required-data
   */
  data: T[];

  /** Color of the bullets that keep track of the items rendered */
  defaultBulletColor?: string;

  /**
   * Percent of item that must be covered for a partially occluded item to count as "viewable", 0-100
   * Fully visible items are always considered viewable
   * @see https://reactnative.dev/docs/flatlist#viewabilityconfig
   */
  itemVisiblePercentThreshold?: number;

  /** Space between each item */
  spacingBetween?: number;

  /** Space at the beginning and end of items */
  sideSpaces?: number;

  /** Test identifier */
  testID?: string;

  /** If true iterates automatically over the list of items  */
  autoScroll?: boolean;

  /** If true centers the content when it's smaller than the viewport  */
  centerContent?: boolean;

  /**
   * Takes an item from data and renders it into the list. Typical usage:
   * ```jsx
   * const renderItem = ({item}) => (
   *   <TouchableOpacity onPress={() => onPress(item)}>
   *     <Text>{item.title}</Text>
   *   </TouchableOpacity>
   * );
   * ...
   * <OrCarousel data={[{title: 'Title Text', key: 'item1'}]} renderItem={renderItem} />
   * ```
   * Provides additional metadata like `index` if you need it.
   * @see https://reactnative.dev/docs/flatlist#required-renderitem
   */
  renderItem: ListRenderItem<T>;

  // Inherited from Flatlist
  initialNumToRender?: number;
  maxToRenderPerBatch?: number;
  windowSize?: number;
}
