import { TmCheckoutCompleted } from "@components-library/ecommerce";
import React from "react";
import { TmCheckoutCompletedWrapperProps } from "./tm-checkout-completed-wrapper.types";
import { useRouter } from "next/router";
import { OrRichTextRenderer } from "../../component-renderers/renderers/or-rich-text.renderer";
import { RichTextVariant } from "@mono-repo-demo/atomic-library";

export const TmCheckoutCompletedWrapper = ({
  template,
}: TmCheckoutCompletedWrapperProps) => {
  const {
    buttonLabel,
    buttonUrl,
    bottomText,
    body,
    subtitle,
    copyrightText,
    title,
  } = template;
  // const router = useRouter();

  const parsedSubtitle = subtitle
    ? subtitle.replace("{order-number}", "001")
    : ""; // !TODO: replace order-number here

  const button = buttonLabel
    ? {
        children: buttonLabel,
        onClick: () => {
          // router.push(buttonUrl ?? "/");
        },
      }
    : undefined;

  return (
    <TmCheckoutCompleted
      successfullOrderTitle={title}
      body={
        body ? (
          <OrRichTextRenderer
            block={{ ...body, variant: RichTextVariant.TM_CHECKOUT_COMPLETED }}
          />
        ) : undefined
      }
      subtitle={parsedSubtitle}
      bottomText={
        bottomText ? (
          <OrRichTextRenderer
            block={{
              ...bottomText,
              variant: RichTextVariant.TM_CHECKOUT_COMPLETED,
            }}
          />
        ) : undefined
      }
      button={button}
      copyright={copyrightText}
    />
  );
};
