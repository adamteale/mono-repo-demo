import { getAllProductSlugs, getProducts } from '../../services/catalog'
import { resolveAccessToken } from '../services'

export const getProductSlugs = async () => {
  const accessToken = await resolveAccessToken()
  const productSlugs = await getAllProductSlugs(accessToken, {})
  return productSlugs
}

export const getAllProducts = async () => {
  const accessToken = await resolveAccessToken()
  const products = await getProducts(accessToken, {})
  return products
}
