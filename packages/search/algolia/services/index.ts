import { environment } from '../config/environment'

export const getProductUrl = ({ id, slug, slugKey }: { id?: string; slug?: string; slugKey: string }) =>
  `/${slugKey}/${environment.getProductBy.toLocaleLowerCase() === 'id' ? id : slug}`
