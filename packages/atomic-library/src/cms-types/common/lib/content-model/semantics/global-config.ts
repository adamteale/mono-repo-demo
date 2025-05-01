import { CMSFilter } from './filter'

export interface CMSGlobalConfig {
  site: 'Default' // add other sites when multi-site is supported
  filters?: CMSFilter[]
  sortByFilterOptions?: {
    label: string
    order: 'ascendant' | 'descendant'
    sort: 'price' | 'name'
  }[]
  catalogLabels?: {
    sortByLabel?: string
    resultCountLabel?: string
    seeMoreLabel?: string
    filterTitle?: string
    filterModalOpenFiltersLabel?: string
    filterModalShowResultsLabel?: string
    filterModalTitle?: string
    filterModalCloseIconLabel?: string
    homeBreadcrumbLabel?: string
    searchTitle?: string
    noResultLabel?: string
  }
  colorPickerLabels?: {
    beige: string
    black: string
    blue: string
    brown: string
    gold: string
    green: string
    grey: string
    lightBlue: string
    oliv: string
    orange: string
    petrol: string
    pink: string
    purple: string
    red: string
    silver: string
    turquoise: string
    white: string
    yellow: string
  }
  themeVariables?: {
    // text
    textPrimary: string
    textSecondary: string
    textTertiary: string
    textItem: string
    textItemFill: string
    // icon
    iconPrimary: string
    iconActive: string
    iconSecondary: string
    iconTertiary: string
    iconQuaternary: string
    // strokes
    strokePrimary: string
    strokeSecondary: string
    strokeTertiary: string
    // CTA-fill
    ctaFillPrimary: string
    ctaFillSecondary: string
    ctaFillTertiary: string
    ctaFillPress: string
    // CTA-stroke
    ctaStrokePrimary: string
    ctaStrokeSecondary: string
    ctaStrokeTertiary: string
    ctaStrokeDisabled: string
    // CTA-content
    ctaContentPrimary: string
    ctaContentSecondary: string
    ctaContentTertiary: string
    ctaContentDisabled: string
    ctaContentItem: string
    // link
    linkDefault: string
    linkHover: string
    linkPressed: string
    linkDisabled: string
    linkStrokePrimary: string
    // brand
    brandPrimary: string
    brandSecondary: string
    brandTertiary: string
    // navbar-fill
    navbarFillPrimary: string
    navbarFillSecondary: string
    navbarFillTertiary: string
    // navbar-content
    navbarContentPrimary: string
    navbarContentSecondary: string
    // background
    bgPrimary: string
    bgSecondary: string
    bgTertiary: string
    bgQuaternary: string
    bgItemPrimary: string
    bgItemSecondary: string
    bgFooterFillPrimary: string
    // feedback
    feedbackSuccess: string
    feedbackError: string
    feedbackDefault: string
    feedbackDisabled: string
    // surface
    surfacePrimary: string
    surfaceSecondary: string
    surfaceTertiary: string
    // footer
    footerFillPrimary: string
    footerFillSecondary: string
    // input stroke
    inputStrokePrimary: string
    inputStrokeSecondary: string
    inputStrokeTertiary: string
    // input fill
    inputFillPrimary: string
    inputFillSecondary: string
    // card
    cardBgPrimary: string
    cardBgSecondary: string
    cardFillPrimary: string
  }
  contentTypeId?: string
}
