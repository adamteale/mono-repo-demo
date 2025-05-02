import { Document, Block, Inline, Text } from '@contentful/rich-text-types'
import { iconBulletMatcher } from '../../../../../../utils'
import { BLOCKS } from '@contentful/rich-text-types'
import { CUSTOM_BLOCKS, ExtendedBlockTypes } from './custom-blocks'

const isListItem = (node: Document | Block | Inline | Text): node is Block => node.nodeType === BLOCKS.LIST_ITEM
const isParagraph = (node: Document | Block | Inline | Text): node is Block => node.nodeType === BLOCKS.PARAGRAPH
const isText = (node: Document | Block | Inline | Text): node is Text => node.nodeType === 'text'
const hasContent = (node: Document | Block | Inline): node is Block | Document | Inline => Array.isArray(node.content)

export const parseTextObject = (textObject: Document | Block | Inline | Text): Document | Block | Inline | Text => {
  if (isListItem(textObject)) {
    textObject.content = textObject.content.flatMap((contentNode) => {
      if (isParagraph(contentNode)) {
        return contentNode.content
      }
      return contentNode
    })

    const textNode = textObject.content[0] as Text
    const match = textNode.value.match(iconBulletMatcher)
    if (match) {
      ;(textObject.nodeType as ExtendedBlockTypes) = CUSTOM_BLOCKS.ICON_LIST_ITEM
      textObject.data = { icon: match[1] }
      textNode.value = textNode.value.replace(iconBulletMatcher, '').trim()
    }
  }

  if (!isText(textObject) && hasContent(textObject)) {
    textObject.content.forEach((childNode) => parseTextObject(childNode))

    if (textObject.nodeType === BLOCKS.UL_LIST) {
      const containsIconListItem = textObject.content.some(
        (node) => (node.nodeType as ExtendedBlockTypes) === CUSTOM_BLOCKS.ICON_LIST_ITEM,
      )

      if (containsIconListItem) {
        ;(textObject.nodeType as ExtendedBlockTypes) = CUSTOM_BLOCKS.ICON_LIST
      }
    }
  }

  return textObject
}
