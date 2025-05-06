import { createClient } from "contentful";

import {
  CONTENTFUL_API_BASE_URL,
  CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_SPACEID,
} from "@environment";

export const contentfulClient = createClient({
  accessToken: CONTENTFUL_DELIVERY_ACCESS_TOKEN as string,
  environment: CONTENTFUL_ENVIRONMENT,
  host: CONTENTFUL_API_BASE_URL,
  space: CONTENTFUL_SPACEID as string,
}).withoutUnresolvableLinks;
