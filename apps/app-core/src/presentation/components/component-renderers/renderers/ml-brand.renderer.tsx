import { MlBrand } from '@components-library/ecommerce'
import { MlBrandRendererProps } from '../renderer.types'
import { normalizeMedia } from '../../normalization/media'

export const MlBrandRenderer = ({ block }: MlBrandRendererProps) => {
  const { image: imageFile, actionUrl } = block
  const image = normalizeMedia(imageFile)

  return <MlBrand image={image} link={{ href: actionUrl }} />
}
