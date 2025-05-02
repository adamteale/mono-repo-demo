import { View } from "react-native";
import {
  alignmentClasses,
  titleClasses,
  variantClasses,
} from "./or-rich-text.classes";
import { RichTextRenderer } from "./or-rich-text.renderer";
import { OrRichTextProps, RichTextVariant } from "./or-rich-text.types";

export const OrRichText = ({
  title = "",
  textAlignment = "start",
  className = "",
  titleClassName = "",
  content,
  variant = RichTextVariant.DEFAULT,
  button,
}: OrRichTextProps) => {
  return (
    <View
      className={`${alignmentClasses({
        alignment: textAlignment,
      })} ${variantClasses({ variant })} ${className}`}
    >
      {title && (
        <Text className={`${titleClasses({})} ${titleClassName}`}>{title}</Text>
      )}
      <RichTextRenderer body={content} variant={variant} button={button} />
    </View>
  );
};
