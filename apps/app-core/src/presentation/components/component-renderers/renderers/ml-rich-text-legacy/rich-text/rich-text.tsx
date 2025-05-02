import { View, Text } from "react-native";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import { nodes } from "./nodes";
import { RichTextProps, RichTextAlignment } from "./rich-text.types";
import {
  globalIconMatcher,
  iconMatcher,
  isIcon,
  replacePlaceholder,
} from "../../../../../utils";
import { AtIcon, IconType } from "@mono-repo-demo/atomic-library";
import { parseTextObject } from "./utils/parse-text-object";

export const richTextAlignmentClasses: Record<RichTextAlignment, string> = {
  start: "text-left",
  center: "text-center",
  end: "text-right",
};

const options = (placeholders?: RichTextProps["placeholders"]): Options => ({
  renderNode: nodes,
  renderText: (text) => {
    const parts = text.split(globalIconMatcher);

    return parts
      .map((part, index) => {
        if (isIcon(part)) {
          const match = part.match(iconMatcher);

          if (match) {
            return (
              <Text key={index} className="inline-block align-middle">
                <AtIcon color="disabled-primary" type={match[1] as IconType} />
              </Text>
            );
          }
        }

        const processedText = placeholders
          ? replacePlaceholder(part, placeholders.matchers, placeholders.state)
          : part;

        return processedText
          .split("\n")
          .map((line, lineIndex) =>
            lineIndex > 0
              ? [<br key={`br-${index}-${lineIndex}`} />, line]
              : line
          );
      })
      .flat();
  },
});

export const RichText = ({
  text,
  textAlignment = "start",
  className = "",
  placeholders,
  title,
  titleClassName,
}: RichTextProps) => {
  return (
    <View
      className={`${richTextAlignmentClasses[textAlignment]} flex flex-col gap-8 ${className}`}
    >
      {title && (
        <Text
          className={`text-primary text-xl xl:text-2xl font-medium leading-7 xl:leading-10 pb-10 ${titleClassName}`}
        >
          {title}
        </Text>
      )}
      {documentToReactComponents(
        parseTextObject(text) as Document,
        options(placeholders)
      )}
    </View>
  );
};
