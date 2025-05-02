import { BLOCKS } from '@contentful/rich-text-types'

export const CUSTOM_BLOCKS = {
  ICON_LIST: 'icon-list',
  ICON_LIST_ITEM: 'icon-list-item',
} as const

export type CustomBlockTypes = (typeof CUSTOM_BLOCKS)[keyof typeof CUSTOM_BLOCKS]

export type ExtendedBlockTypes = BLOCKS | CustomBlockTypes
