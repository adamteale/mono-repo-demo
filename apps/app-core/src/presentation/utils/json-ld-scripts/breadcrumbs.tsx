import { AtLinkProps } from "@mono-repo-demo/atomic-library";

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
        "@id": "environment.baseUrl" + breadcrum.href,
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
