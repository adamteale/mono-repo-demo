export const environment = {
  baseUrl: process.env['NEXT_PUBLIC_BASE_URL'] ?? '',
  getProductBy: process.env['NEXT_PUBLIC_GET_PRODUCT_BY'] ?? '',
  services: {
    search: process.env['API_GATEWAY_BASE_URL'] ?? process.env['SEARCH_API_BASE_URL'] ?? '',
  },
  algolia: {
    appId: process.env['NEXT_PUBLIC_ALGOLIA_APP_ID'] ?? '',
    apiKey: process.env['NEXT_PUBLIC_ALGOLIA_API_KEY'] ?? '',
    indexName: process.env['NEXT_PUBLIC_ALGOLIA_ECOMMERCE_INDEX_NAME'] ?? '',
    contentIndexName: process.env['NEXT_PUBLIC_ALGOLIA_CONTENT_INDEX_NAME'] ?? '',
    featuredProductIndexName: process.env['NEXT_PUBLIC_ALGOLIA_FEATURED_PRODUCT_INDEX_NAME'] ?? '',
  },
}
