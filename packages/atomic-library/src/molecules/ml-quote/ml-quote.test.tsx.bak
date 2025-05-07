import { describe, expect, it } from 'vitest'
import { MlQuoteProps } from './ml-quote.types'
import { render } from '@testing-library/react'
import { MlQuote } from './ml-quote'

const quoteProps: MlQuoteProps = {
  heading: 'What our Customers Say',
  quoteText: '“I always find everything I want at BeeShop and they have never failed me”',
  author: {
    name: 'Dwayne Johnson',
    role: 'Client',
    image: {
      src: 'https://picsum.photos/100/100',
      dataTestId: 'quoteAuthorImg',
    },
  },
}

const noImgQuoteProps: MlQuoteProps = {
  heading: 'What our Customers Say',
  quoteText: '“I always find everything I want at BeeShop and they have never failed me”',
  author: {
    name: 'Dwayne Johnson',
    role: 'Client',
  },
}

describe('molecules/ml-quote', () => {
  describe('when it has an image', () => {
    it('should render the heading correctly', () => {
      const { getByText } = render(<MlQuote {...quoteProps} />)
      expect(getByText(quoteProps.heading)).toBeInTheDocument()
    })

    it('should render the quote correctly', () => {
      const { getByText } = render(<MlQuote {...quoteProps} />)
      expect(getByText(quoteProps.quoteText)).toBeInTheDocument()
    })

    it('should render the image correctly', () => {
      const { getByTestId } = render(<MlQuote {...quoteProps} />)
      const image = getByTestId('quoteAuthorImg')
      expect(image).toBeInTheDocument()
    })
  })

  describe('when it does not have an image', () => {
    it('should not render an image', () => {
      const { queryByTestId } = render(<MlQuote {...noImgQuoteProps} />)
      const image = queryByTestId('quoteAuthorImg')
      expect(image).not.toBeInTheDocument()
    })
  })
})
