import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MlMedia } from './ml-media'
import { MlMediaProps } from './ml-media.types'

const props: MlMediaProps = {
  imageDesktop: {
    src: 'https://picsum.photos/100/100',
  },
}

const dataTestId = 'ml-media'
const imageDataTestId = `${dataTestId}-at-image`
const backgroundDataTestId = `${dataTestId}-bg-image`

describe('molecules/ml-media', () => {
  it('should render correctly', () => {
    const { container, getByTestId } = render(<MlMedia {...props} dataTestId={dataTestId} />)
    expect(container).toBeTruthy()

    const wrapper = getByTestId(dataTestId)
    expect(wrapper).toBeInTheDocument()

    const image = getByTestId(imageDataTestId)
    expect(image).toBeInTheDocument()
  })

  it('should render as a div with a background url', () => {
    const { container, getByTestId } = render(<MlMedia {...props} dataTestId={dataTestId} asBackground />)
    expect(container).toBeTruthy()

    const wrapper = getByTestId(dataTestId)
    expect(wrapper).toBeInTheDocument()

    const background = getByTestId(backgroundDataTestId)
    expect(background).toBeInTheDocument()
  })
})
