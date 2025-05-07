import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MlCardBlog } from './ml-card-blog'
import { MlCardBlogProps } from './ml-card-blog.types'
import { ImageFormat, transformImageFormat } from '../ml-media'

const defaultProps: MlCardBlogProps = {
  author: 'John Doe',
  category: 'Tech',
  publicationDate: '2023-08-16',
  description: 'This is a description of the blog post.',
  image: { imageDesktop: { src: 'image.jpg', alt: 'Blog image' } },
  link: { href: '/blog/post', label: 'Read more' },
  title: 'Blog Post Title',
}

describe('molecules/ml-card-blog', () => {
  it('should renders the component with required props', () => {
    const { getByText, getByAltText } = render(<MlCardBlog {...defaultProps} />)

    expect(getByText(defaultProps.author)).toBeInTheDocument()
    expect(getByText(defaultProps.publicationDate)).toBeInTheDocument()
    expect(getByText(defaultProps.title)).toBeInTheDocument()
    expect(getByText(defaultProps.description)).toBeInTheDocument()
    expect(getByText(defaultProps.link.label as string)).toBeInTheDocument()

    const image = getByAltText(defaultProps.image.imageDesktop.alt as string)
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', transformImageFormat(defaultProps.image.imageDesktop.src, ImageFormat.WEBP))
  })

  it('should renders the category if provided', () => {
    const { getByText } = render(<MlCardBlog {...defaultProps} />)
    expect(getByText(defaultProps.category as string)).toBeInTheDocument()
  })

  it('should not render the category if not provided', () => {
    const { queryByText } = render(<MlCardBlog {...defaultProps} category={undefined} />)
    expect(queryByText(defaultProps.category as string)).not.toBeInTheDocument()
  })
})
