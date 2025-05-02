import { AtLinkProps } from "@mono-repo-demo/atomic-library";
import Link from "next/link";
import { CMSLink } from "@mono-repo-demo/atomic-library";

export const normalizeLink = (link: CMSLink): AtLinkProps | undefined => {
  if (link.actionUrl && link.label) {
    return {
      label: link.label,
      href: link.actionUrl,
      linkWrapper: Link,
    };
  }
};
