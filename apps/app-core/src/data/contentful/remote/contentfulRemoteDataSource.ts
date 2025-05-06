import {
  EntriesDto,
  IGetEntriesProps,
} from "@app-core/src/domain/contentful/types";
import { contentfulClient } from "../ContentfulClient";
import { EntryCollection, EntrySkeletonType } from "contentful";

export interface ContentfulRemoteDataSource {
  getEntries(
    params: IGetEntriesProps
  ): Promise<
    EntryCollection<EntrySkeletonType, "WITHOUT_UNRESOLVABLE_LINKS", string>
  >;
}

export const contentfulRemoteDataSourceImpl: ContentfulRemoteDataSource = {
  getEntries: async ({
    contentTypeId,
    query,
  }: IGetEntriesProps): Promise<
    EntryCollection<EntrySkeletonType, "WITHOUT_UNRESOLVABLE_LINKS", string>
  > => {
    return await contentfulClient.getEntries({
      content_type: contentTypeId,
      ...query,
    });
  },
};
