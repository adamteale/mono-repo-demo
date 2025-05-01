import type { EntryCollection, EntrySkeletonType } from "contentful";
import { EntriesDto } from "../remote";

type AnyRecord = Record<string, any>;

export function getFormattedFields(rawFields: AnyRecord) {
  const parsedFields: AnyRecord = {};

  Object.entries(rawFields).forEach(([key, value]) => {
    if (typeof value !== "object" || (!value.fields && !("length" in value))) {
      parsedFields[key] = value;
      return;
    }

    if (value.fields) {
      parsedFields[key] = getFormattedFields(value.fields);
      if (value.sys?.contentType?.sys?.id) {
        parsedFields[key].contentTypeId = value.sys.contentType.sys.id;
      }
      return;
    }

    if ("length" in value && Array.isArray(value)) {
      parsedFields[key] = value.map((item: AnyRecord) => {
        let parsedItem = item.fields ? getFormattedFields(item.fields) : item;

        if (item.sys?.contentType?.sys?.id) {
          parsedItem.contentTypeId = item.sys.contentType.sys.id;
        }

        return parsedItem;
      });
      return;
    }
  });

  return parsedFields;
}

function mapCollectionToEntriesDto(
  rawEntries: EntryCollection<
    EntrySkeletonType,
    "WITHOUT_UNRESOLVABLE_LINKS",
    string
  >
): EntriesDto {
  return {
    total: rawEntries.total,
    skip: rawEntries.skip,
    limit: rawEntries.limit,
    entries: rawEntries.items.map((item) => ({
      fields: getFormattedFields(item.fields) ?? [],
      contentTypeId: item.sys?.contentType?.sys?.id ?? "",
      updatedAt: item.sys?.updatedAt ?? "",
      locale: item.sys?.locale ?? "",
      tags: item.metadata?.tags?.map((tag) => tag.sys.id) ?? [],
    })),
  };
}

export const contentfulDataMapper = {
  mapCollectionToEntriesDto,
};
