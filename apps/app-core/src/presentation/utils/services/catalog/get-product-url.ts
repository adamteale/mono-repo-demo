// import { environment } from '../../../config/environment'
import { SLUG_KEY } from "../../slug-keys";

// export const getProductUrl = ({ id, slug }: { id?: string; slug?: string }) =>
//   `/${SLUG_KEY.PRODUCTS}/${environment.getProductBy.toLocaleLowerCase() === 'id' ? id : slug}`
export const getProductUrl = ({ id, slug }: { id?: string; slug?: string }) =>
  `/${SLUG_KEY.PRODUCTS}/PLACEHOLDER`;
