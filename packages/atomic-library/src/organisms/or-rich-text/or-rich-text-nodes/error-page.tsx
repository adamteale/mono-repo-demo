import { IconType } from "../../../atoms";
import { getMarksClasses, RichTextIcon } from "../or-rich-text.renderer";
import { DefaultNodes } from "./default";
import { NodesProps } from "./types";

/**
 * This error pages nodes exists only
 * to override the default h1 styles to a custom size
 * for the `h1` used in the error page
 * for the rest of the nodes we use the default styling
 */
export const ErrorPageNodes = ({ node, index }: NodesProps) => {
  const markClasses = getMarksClasses(node.marks);

  switch (node.type) {
    case "h1": {
      return (
        <>
          {node.content ? (
            <h1 className={`text-primary text-xl md:text-2xl ${markClasses}`}>
              {node.content.map((node, i) => (
                <DefaultNodes
                  node={node}
                  index={i}
                  key={`${node.type}-${index}-${i}`}
                />
              ))}
            </h1>
          ) : null}
        </>
      );
    }

    case "paragraph": {
      return (
        <>
          {node.content ? (
            <Text
              className={`text-primary text-lg lg:text-lgx leading-8 lg:leading-10 ${markClasses}}`}
            >
              {node.content.map((node, i) => (
                <ErrorPageNodes
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
          className={`leading-8 lg:leading-10 tracking-0.1 ${markClasses}`}
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
