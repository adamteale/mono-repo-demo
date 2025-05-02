import {
  NodeMarks,
  RichTextBody,
  RichTextNode,
  RichTextValueNode,
  validNodeMarks,
} from "@mono-repo-demo/atomic-library";
import { iconMatcher, socialMatcher } from "../../utils";

type ContentuflMark = {
  type: string;
};

type ContentfulDocument = {
  content: ContentfulNode[];
  nodeType: "document";
};
type ContentfulNode = {
  nodeType: string;
  content: ContentfulNode[];
  value?: string;
  marks?: ContentuflMark[];
  data: Record<string, any>;
};

const ContentfulToRichTextNodeMap: Record<string, RichTextNode["type"]> = {
  "heading-1": "h1",
  "heading-2": "h2",
  "heading-3": "h3",
  "heading-4": "h4",
  "heading-5": "h5",
  "heading-6": "h6",
  paragraph: "paragraph",
  "unordered-list": "unordered-list",
  "ordered-list": "ordered-list",
  "list-item": "list-item",
  blockquote: "blockquote",
  hyperlink: "link",
  "embedded-asset-block": "image",
  table: "table",
  "table-row": "table-row",
  "table-cell": "table-cell",
  "table-header-cell": "table-cell",
};

const ContentfulToRichTextValueNodeMap: Record<
  string,
  RichTextValueNode["type"]
> = {
  text: "text",
  hr: "hr",
};

export const normalizeContentfulRichText = (
  contentfulContent: unknown
): RichTextBody | null => {
  if (!contentfulContent) return null;

  const nodes = (contentfulContent as ContentfulDocument)?.content;

  if (!nodes) return null;

  const content = nodes.map((node) => parseContentfulNode(node, 0));

  return {
    content: content.filter(Boolean) as RichTextNode[],
    data: {},
    type: "document",
  } satisfies RichTextBody;
};

/**
 * This functions will run in every `ContentfulNode`
 * This includes `TopLevelBlocks` such as headings, paragraphs, and lists
 * And lower level blocks such as `text`, hyperlinks and `inline`
 *
 * This is a recursive function since `TopLevelBlocks` have a `content` property
 * which is populated with other `TopLevelBlocks` or `lowerLevelBlocks`
 */
const parseContentfulNode = (
  node: ContentfulNode,
  depth: number
): RichTextNode | RichTextValueNode | null => {
  const type = ContentfulToRichTextNodeMap[node.nodeType] ?? null;
  const valueNodeType = ContentfulToRichTextValueNodeMap[node.nodeType] ?? null;

  /**
   * Type not supported (yet), reference `ContentfulToRichTextNodeMap` and `ContentfulToRichTextValueNodeMap`
   * for supported types from `Contentful` Rich Text
   */
  if (!type && !valueNodeType) {
    return null;
  }

  const parsedNode: RichTextNode | RichTextValueNode = {
    type: type ?? valueNodeType,
    data: {},
    marks: [],
  };

  /**
   * Contentful renders a `text` node with no `value` and no `marks` sometimes
   * not sure if it is a bug or maybe they just use it for a `space` or `end of line <br />`???
   *
   * This is different from a node with a `value` of `' '` as those are used for spaces inside
   * paragraphs, headings, blockquotes and probably more types.
   *
   * This check filters out all the nodes with no data from Contentful
   */
  if (valueNodeType === "text") {
    if (
      node.value === "" &&
      node.marks?.length === 0 &&
      Object.keys(node.data).length === 0
    ) {
      return null;
    }
  }

  parsedNode.data = parseContentfulNodeData(node);
  parsedNode.marks = parseContentfulMarks(node.marks ?? []);

  /**
   * If we have a `TopLevelBlock` we need to recursively parse the `content`
   * which could be a `TopLevelBlock` or a `lowerLevelBlock`.
   */
  if (type) {
    parsedNode.content = node.content
      ?.map((childNode) => parseContentfulNode(childNode, depth + 1))
      .filter(Boolean) as RichTextNode[] | RichTextValueNode[];

    /**
     * If we have a `ul` block we check all the nested elements
     * to see if we have an `icon-list` instead of a `unordered-list`
     * this is used in the rendering to display the icon instead of the bullets
     */
    if (type === "unordered-list" || type === "ordered-list") {
      /**
       * Used to identify the nested level of an ordered or unordered list.
       */
      parsedNode.data = { ...parsedNode.data, identationLevel: depth / 2 };
      const icon = listItemHasIcon(parsedNode.content);
      if (icon) {
        parsedNode.data = {
          ...parsedNode.data,
          hasIcon: true,
        };
      }
    }
  }

  /**
   * If we have a `LowerLevelBlock` we just get its value
   * and parse for any match of `:icon-bullet-${value}:`
   */
  let icon: RegExpMatchArray | null = null;
  if (valueNodeType && node.value) {
    icon = node.value.match(iconMatcher);
    parsedNode.text = node.value;

    if (icon) {
      parsedNode.data = {
        ...parsedNode.data,
        icon: icon[1],
      };
      parsedNode.text = node.value.replace(icon[0], "").trim();
    }
  }

  /**
   * If we have a `LowerLevelBlock` we just get its value
   * and parse for any match of `:social-linkedin-${value}:`
   */
  if (valueNodeType && node.value && !icon) {
    const social = node.value.match(socialMatcher);

    if (social) {
      parsedNode.data = {
        ...parsedNode.data,
        social: social[1],
      };
      parsedNode.text = node.value.replace(social[0], "").trim();
      parsedNode.type = "social";
    }
  }

  return parsedNode;
};

const parseContentfulMarks = (contentfulMarks: ContentuflMark[]) => {
  const marks: NodeMarks[] = [];

  contentfulMarks.forEach((mark) => {
    if (isNodeMark(mark.type)) {
      marks.push(mark.type);
    }
  });

  return marks;
};

const isNodeMark = (mark: string): mark is NodeMarks => {
  return validNodeMarks.includes(mark as NodeMarks);
};

/**
 * The Data attribute from Contentful is really specific to each type
 * most types have no data attribute so we just return the sane empty object in the default case.
 */
const parseContentfulNodeData = (node: ContentfulNode) => {
  switch (node.nodeType) {
    case "hyperlink": {
      if (node.data.uri) {
        return {
          url: node.data.uri,
        };
      }
      return {};
    }

    case "embedded-asset-block": {
      const img = node.data?.target?.fields ?? null;

      if (img && img.file) {
        return {
          title: img.title ?? "Embedded Image from Contentful",
          fileName: img.file?.fileName ?? undefined,
          src: img.file?.url ?? undefined,
        };
      }

      return {};
    }

    default: {
      return node.data;
    }
  }
};

const listItemHasIcon = (node: RichTextNode["content"]): boolean => {
  if (!node) return false;

  let hasIcon = false;

  for (const item of node) {
    if (item.type === "text") {
      item.data = item.data || {};
      item.data.isInlist = true;
      hasIcon = false;
    }

    if (item.type === "text" && item.data?.icon) {
      item.data.isInlist = true;
      hasIcon = true;
    }
    if ((item as RichTextNode).content) {
      hasIcon = listItemHasIcon((item as RichTextNode).content) || hasIcon;
    }
  }

  return hasIcon;
};
