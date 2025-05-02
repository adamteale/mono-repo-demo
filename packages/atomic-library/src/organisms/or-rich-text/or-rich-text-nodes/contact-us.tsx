import { IconType } from "../../../atoms";
import { getMarksClasses, RichTextIcon } from "../or-rich-text.renderer";
import { DefaultNodes } from "./default";
import { iconClasses, textClasses } from "./or-rich-text-nodes.variants";
import { NodesProps } from "./types";

export const ContactUsNodes = ({ node, index, className = "" }: NodesProps) => {
  const markClasses = getMarksClasses(node.marks);

  switch (node.type) {
    case "paragraph": {
      return (
        <>
          {node.content && node.content[0] && node.content[0].text !== "" ? (
            <Text
              className={`text-primary text-lg leading-8 xl:text-lgx xl:leading-10 ${markClasses} ${className}`}
            >
              {node.content.map((node, i) => (
                <ContactUsNodes
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

    case "ordered-list": {
      return (
        <>
          {node.content ? (
            <ol
              className={`text-primary flex flex-col gap-6 list-decimal list-inside ${className}`}
            >
              {node.content?.map((item, i) => (
                <ContactUsNodes
                  node={item}
                  index={i}
                  key={`${node.type}-${index}-${i}`}
                />
              ))}
            </ol>
          ) : null}
        </>
      );
    }

    case "unordered-list": {
      const hasIcons = node.data?.hasIcon ?? false;
      const extraClasses = hasIcons ? "list-none" : " list-disc";

      return (
        <>
          {node.content ? (
            <ul
              className={`text-primary flex flex-col gap-6 list-inside ${extraClasses} ${className}`}
            >
              {node.content?.map((item, i) => (
                <ContactUsNodes
                  node={item}
                  index={i}
                  key={`${node.type}-${index}-${i}`}
                />
              ))}
            </ul>
          ) : null}
        </>
      );
    }

    case "list-item": {
      return (
        <>
          {node.content ? (
            <li
              className={`flex flex-row text-lg lg:text-lgx ${markClasses} [&>p]:inline ${className}`}
            >
              {node.content.map((node, i) => (
                <ContactUsNodes
                  node={node}
                  index={i}
                  key={`${node.type}-${index}-${i}`}
                />
              ))}
            </li>
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
          className={`flex flex-col items-start leading-8 lg:leading-10 ${markClasses} ${className}`}
        >
          {(() => {
            const parts = node.text.split("|");

            return parts.map((part, partIndex) => (
              <Text
                key={`part-${partIndex}`}
                className={textClasses({
                  icon: !!icon,
                  isInList: !!isInList,
                  partIndex: partIndex > 0 ? "notFirst" : "first",
                })}
              >
                {partIndex === 0 && (
                  <RichTextIcon
                    className={iconClasses({ isInList: !!isInList })}
                    icon={icon as IconType}
                  />
                )}
                <Text className="flex justify-start items-start">{part}</Text>
              </Text>
            ));
          })()}
        </Text>
      );
    }

    default: {
      return <DefaultNodes node={node} index={index} />;
    }
  }
};
