import type { AsyncUseCaseWithParams } from "@Domain/asyncUseCase";
import { Page } from "../types";
import { contentfulRepository } from "@Data/contentful";

export const getPageBySlugUseCase: AsyncUseCaseWithParams<string, Page | null> =
  {
    async execute(slug: string): Promise<Page | null> {
      let query: Record<string, any> = {
        "fields.slug": slug,
        include: 10,
      };

      // if (tags) {
      //   query = { ...query, "metadata.tags.sys.id[all]": tags };
      // }

      const collection = await contentfulRepository.getEntries({
        contentTypeId: "pgPage",
        query: query,
      });

      const page =
        collection?.entries && collection.entries?.length
          ? collection.entries[0]
          : null;
      return page;
    },
  };
