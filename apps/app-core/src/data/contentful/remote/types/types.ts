export interface IGetEntriesProps {
  contentTypeId: string;
  query?: {
    [key: string]: any;
  };
}

export interface Entry {
  fields: {
    [key: string]: any;
  };
  tags?: string[];
  contentTypeId: string;
  updatedAt: string;
  locale?: string;
}

export interface EntriesDto {
  total: number;
  skip: number;
  limit: number;
  entries: Entry[];
}

export interface IGetPageBySlugProps {
  contentTypeId?: string;
  slug: string;
}

export interface PageDto extends Entry {}

export interface ErrorDto {
  errors: string[];
}

export interface Page {
  contentTypeId: string;
  fields: {
    [key: string]: any;
  };
  locale?: string;
  tags?: string[];
  updatedAt: string;
}

export interface GetPageBySlugDto {
  contentTypeId: string;
  slug: string;
  query?: object;
}
