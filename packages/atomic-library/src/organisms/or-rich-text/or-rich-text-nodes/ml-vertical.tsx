import { Text } from "react-native";
import { IconType } from "../../../atoms";
import { getMarksClasses, RichTextIcon } from "../or-rich-text.renderer";
import { DefaultNodes } from "./default";
import { NodesProps } from "./types";

export const MlVerticalRichTextNodes = ({
  node,
  index,
  className,
}: NodesProps) => {
  const markClasses = getMarksClasses(node.marks);

  switch (node.type) {
    case "paragraph": {
      return (
        <>
          {node.content ? (
            <Text
              className={`text-neutral-500 text-base leading-5 xl:text-lg xl:leading-6 line-clamp-3 text-ellipsis ${markClasses} ${className}`}
            >
              {node.content.map((node, i) => (
                <MlVerticalRichTextNodes
                  node={node}
                  index={i}
                  key={`${node.type}-${index}-${i}`}
                />
              ))}
            </Text>
          ) : null}
        </>
      );
    }

    case "text": {
      const icon = node.data?.icon ?? null;
      const isInList = node.data?.isInlist ?? false;

      return (
        <Text
          key={`${node.type}-${index}`}
          className={`${markClasses} ${className}`}
        >
          <RichTextIcon
            className={isInList ? "mr-4" : "mx-1"}
            icon={icon as IconType}
          />
          {node.text}
        </Text>
      );
    }

    default: {
      return <DefaultNodes node={node} index={index} />;
    }
  }
};
