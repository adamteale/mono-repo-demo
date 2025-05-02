import { RichTextNode, RichTextValueNode } from '../or-rich-text.types'

export interface NodesProps {
  node: RichTextNode | RichTextValueNode
  index: number
  className?: string
  disableChildClasses?: boolean
}
