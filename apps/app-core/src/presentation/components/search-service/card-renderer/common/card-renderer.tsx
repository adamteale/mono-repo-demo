import { MlProductCardRenderer } from '../../../component-renderers/renderers/ml-product-card.renderer'

export const cardRenderer = (product: any, onBrandSelect?: (update: string) => void) => {
  return <MlProductCardRenderer key={product.id} product={product} onBrandSelect={onBrandSelect} />
}
