import { View } from "react-native";
import { AtIcon, AtLink, AtLinkProps, IconColor, IconType } from "../../atoms";
import {
  DefaultNodes,
  ErrorPageNodes,
  HeaderStickyBarNodes,
  MlVerticalRichTextNodes,
  MlDropdownRichTextNodes,
  TmCheckoutCompletedRichTextNodes,
} from "./or-rich-text-nodes";
import { ContactUsNodes } from "./or-rich-text-nodes/contact-us";
import { NodeMarks, RichTextBody, RichTextVariant } from "./or-rich-text.types";

interface RichTextRendererProps {
  body: RichTextBody;
  variant: RichTextVariant;
  button?: AtLinkProps;
}
export const RichTextRenderer = ({
  body,
  variant,
  button,
}: RichTextRendererProps) => {
  switch (variant) {
    case RichTextVariant.ERROR_PAGE: {
      return (
        <View className="w-full flex flex-col gap-8 lg:gap-10 items-center justify-center max-w-[41.625rem]">
          {body.content.map((node, i) => {
            return (
              <ErrorPageNodes node={node} index={i} key={`${node.type}-${i}`} />
            );
          })}
          {button && (
            <View className="w-fill sm:w-fit">
              <AtLink {...button} />
            </View>
          )}
        </View>
      );
    }
    case RichTextVariant.HEADER_STICKY_BAR: {
      return (
        <>
          {body.content.map((node, i) => {
            return (
              <HeaderStickyBarNodes
                node={node}
                index={i}
                key={`${node.type}-${i}`}
              />
            );
          })}
        </>
      );
    }
    case RichTextVariant.ML_VERTICAL: {
      return (
        <>
          {body.content.map((node, i) => {
            return (
              <MlVerticalRichTextNodes
                node={node}
                index={i}
                key={`${node.type}-${i}`}
              />
            );
          })}
        </>
      );
    }
    case RichTextVariant.ML_DROPDOWN: {
      return (
        <>
          {body.content.map((node, i) => {
            return (
              <MlDropdownRichTextNodes
                node={node}
                index={i}
                key={`${node.type}-${i}`}
              />
            );
          })}
        </>
      );
    }

    case RichTextVariant.TM_CHECKOUT_COMPLETED: {
      return (
        <>
          {body.content.map((node, i) => {
            return (
              <TmCheckoutCompletedRichTextNodes
                node={node}
                index={i}
                key={`${node.type}-${i}`}
              />
            );
          })}
        </>
      );
    }

    case RichTextVariant.CONTACT_US: {
      return (
        <>
          {body.content.map((node, i) => {
            return (
              <ContactUsNodes node={node} index={i} key={`${node.type}-${i}`} />
            );
          })}
        </>
      );
    }

    default: {
      return (
        <>
          {body.content.map((node, i) => {
            return (
              <DefaultNodes node={node} index={i} key={`${node.type}-${i}`} />
            );
          })}
          {button && button.href && (
            <View className="w-fit">
              <AtLink {...button} />
            </View>
          )}
        </>
      );
    }
  }
};

export const getMarksClasses = (marks: NodeMarks[] | undefined) => {
  if (!marks) return "";

  const marksClasses: Record<NodeMarks, string> = {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
    code: "font-mono",
  };

  return marks.map((mark) => marksClasses[mark]).join(" ");
};

export const RichTextIcon = ({
  icon,
  className,
  size,
  color = "disabled-primary",
}: {
  icon: IconType;
  className?: string;
  size?: number;
  color?: IconColor;
}) => {
  if (!icon && typeof icon !== "string") return null;

  return (
    <AtIcon
      color={color as IconColor}
      type={icon as IconType}
      className={`inline-block align-middle ${className}`}
      size={size}
    />
  );
};
