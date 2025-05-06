import { AtLinkProps } from "@mono-repo-demo/atomic-library";
import { environment } from "../../config/environment";
import { CMSCategory } from "@cms-types/common";
import Link from "next/link";

const expandCategories = (
  slugKey: string,
  category?: CMSCategory
): AtLinkProps[] => {
  if (!category) return [];

  const list: AtLinkProps[] = [
    {
      label: category.title,
      href: `/${slugKey}${category.slug ? `/${category.slug}` : ""}`,
      linkWrapper: Link,
    },
  ];

  if (category.parent) {
    return expandCategories(slugKey, category.parent).concat(list);
  }

  return list;
};

export const generateBreadcrumb = (
  homeLabel: string,
  slugKey: string,
  category?: CMSCategory
): AtLinkProps[] => {
  const homeBreadcrumb: AtLinkProps[] = [
    {
      label: homeLabel,
      href: "/",
      linkWrapper: Link,
    },
  ];
  return homeBreadcrumb.concat(expandCategories(slugKey, category));
};

export const BreadcrumbJsonLd = ({
  breadcrumbLinks,
}: {
  breadcrumbLinks: AtLinkProps[];
}) => {
  if (!breadcrumbLinks?.length) return null;

  const data = {
    "@context": "http://schema.org ",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbLinks.map((breadcrum, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@id": environment.baseUrl + breadcrum.href,
        name: breadcrum.label,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};
