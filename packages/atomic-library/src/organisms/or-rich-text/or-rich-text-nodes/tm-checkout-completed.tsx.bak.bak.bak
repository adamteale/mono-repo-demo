import { Text } from "react-native";
import { IconType } from "../../../atoms";
import { getMarksClasses, RichTextIcon } from "../or-rich-text.renderer";
import { DefaultNodes } from "./default";
import { NodesProps } from "./types";

export const TmCheckoutCompletedRichTextNodes = ({
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
              className={`text-sm leading-5 md:text-base md:leading-6 text-center ${markClasses} ${className}`}
            >
              {node.content.map((node, i) => (
                <TmCheckoutCompletedRichTextNodes
                  node={node}
                  index={i}
                  key={`${node.type}-${index}-${i}`}
                  className="!leading-5 md:!leading-6"
                />
              ))}
            </Text>
          ) : null}
        </>
      );
    }

    case "link": {
      const hasSocials = node.content?.[0].type === "social";
      return (
        <>
          {node.data?.url && node.content ? (
            <a
              href={node.data.url as string}
              key={`${node.type}-${index}`}
              className={`text-link ${markClasses} ${className} ${
                hasSocials ? "mr-6" : ""
              }`}
            >
              {node.content.map((node, i) => (
                <DefaultNodes
                  node={node}
                  index={i}
                  key={`${node.type}-${index}-${i}`}
                  className={className}
                />
              ))}
            </a>
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
          className={`leading-5 lg:leading-6 ${markClasses} ${className}`}
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
