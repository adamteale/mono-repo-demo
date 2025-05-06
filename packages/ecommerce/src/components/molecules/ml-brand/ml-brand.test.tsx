import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MlBrand } from './ml-brand'
import { MlBrandProps } from './ml-brand.types'

const props: MlBrandProps = {
  link: { href: 'https://google.com/' },
  image: {
    imageDesktop: {
      src: 'https://picsum.photos/500/500',
    },
  },
}

const dataTestId = 'ml-brand'

describe('molecules/ml-brand', () => {
  it('should render correctly', () => {
    const { container, getByTestId } = render(<MlBrand {...props} dataTestId={dataTestId} />)
    expect(container).toBeTruthy()

    const banner = getByTestId(dataTestId)
    expect(banner).toBeInTheDocument()
  })
})
