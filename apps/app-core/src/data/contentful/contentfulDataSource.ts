import { contentfulRemoteDataSourceImpl } from "@Data/contentful/remote/contentfulRemoteDataSource";
import {
  EntriesDto,
  IGetEntriesProps,
} from "@app-core/src/domain/contentful/types";
import { contentfulDataMapper } from "./mapper";

export interface contentfulDataSource {
  getEntries(params: IGetEntriesProps): Promise<EntriesDto>;
}

export const contentfulRepository: contentfulDataSource = {
  getEntries: async (params: IGetEntriesProps): Promise<EntriesDto> => {
    const result = await contentfulRemoteDataSourceImpl.getEntries(params);
    return contentfulDataMapper.mapCollectionToEntriesDto(result);
  },
};
