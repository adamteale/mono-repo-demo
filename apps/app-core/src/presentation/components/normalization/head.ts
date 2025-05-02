import { normalizeFile } from "./file";
import Head from "next/head";
import { HeadProps } from "@mono-repo-demo/atomic-library";
import { CMSPage } from "@mono-repo-demo/atomic-library";
import { getStaticPath } from "../../utils/get-static-path";

export const normalizeHead = (page: CMSPage, baseUrl: string): HeadProps => {
  return {
    slug: page.fields.slug.startsWith("/")
      ? page.fields.slug
      : `/${page.fields.slug}`,
    baseUrl: baseUrl,
    metaTitle: page.fields.title,
    metaDescription: page.fields.metaDescription,
    metaKeywords: page.fields.metaKeywords,
    canonicalUrl: page.fields.canonicalUrl,
    noIndex: page.fields.noIndex,
    noFollow: page.fields.noFollow,
    wrapper: Head,
    faviconUrl: getStaticPath("/images/favicon.svg"),
    socialShareImageSrc: normalizeFile(page.fields.socialShareImage?.fields)
      ?.src,
  };
};
