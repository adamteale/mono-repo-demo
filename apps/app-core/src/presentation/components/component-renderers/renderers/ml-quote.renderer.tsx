import { MlQuote } from "@mono-repo-demo/atomic-library";
import { MlQuoteRendererProps } from "../renderer.types";
import { normalizeFile } from "../../normalization/file";

export const MlQuoteRenderer = ({ block }: MlQuoteRendererProps) => {
  const { heading, quoteText, authorInfo, authorImage } = block;

  return (
    <MlQuote
      heading={heading}
      quoteText={quoteText}
      author={{
        name: authorInfo.name,
        role: authorInfo.role,
        image: authorImage ? normalizeFile(authorImage) : undefined,
      }}
    />
  );
};
