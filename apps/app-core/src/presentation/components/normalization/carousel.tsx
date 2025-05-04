import React from "react";
import {
  CMSCarousel,
  OrCarouselProps,
  Target,
} from "@mono-repo-demo/atomic-library";
// import Link from "next/link";
import { useState, useEffect } from "react";
// import { resolveAccessToken } from "../../utils/services/customer";
// import { getProducts } from "../../services/catalog";
import { MlProductCardRenderer } from "../component-renderers/renderers/ml-product-card.renderer";
import { MlProductCardSkeleton } from "@components-library/ecommerce";
// import { CMSCarousel } from "@mono-repo-demo/atomic-library";

const placeholderArray = new Array(4).fill(0);

export const useNormalizeCarousel = (
  carousel?: CMSCarousel
): OrCarouselProps => {
  const [props, setProps] = useState<OrCarouselProps>({
    title: carousel?.title,
    ...(carousel?.linkLabel &&
      carousel?.linkUrl && {
        link: {
          label: carousel.linkLabel,
          href: carousel.linkUrl,
          target: Target.SELF,
          className: "text-primary",
          iconProps: {
            type: "arrow-right",
          },
          linkWrapper: Link,
        },
      }),

    children: placeholderArray.map((_, idx) => (
      <MlProductCardSkeleton key={`placeholder-${idx}`} />
    )),
  });

  useEffect(() => {
    const handler = async () => {
      const ids =
        carousel?.items?.map((item) => {
          if (item && "identifier" in item) return item.identifier;
        }) ?? [];

      if (!ids.length) {
        setProps((prev) => ({ ...prev, children: undefined }));
      } else {
        try {
          const accessToken = await resolveAccessToken();
          const results = await getProducts(accessToken, {
            identifiers: ids.join(","),
          });
          if (results?.products?.length) {
            setProps((prev) => ({
              ...prev,
              children: results.products.map((result) => (
                <MlProductCardRenderer product={result} key={result.id} />
              )),
            }));
          } else setProps((prev) => ({ ...prev, children: undefined }));
        } catch (error) {
          setProps((prev) => ({ ...prev, children: undefined }));
        }
      }
    };
    handler();
  }, [carousel?.items]);

  return props;
};
