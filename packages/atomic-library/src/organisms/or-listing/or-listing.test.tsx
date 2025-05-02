import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { OrListing } from './or-listing'
import { MlCardBlog, MlCardBlogProps } from '../../molecules/ml-card-blog'
import { OrListingProps } from './or-listing.types'

const productCardProps: MlCardBlogProps = {
  author: 'John Doe',
  category: 'Tech',
  publicationDate: '2023-08-16',
  description: 'This is a description of the blog post.',
  image: { imageDesktop: { src: 'image.jpg', alt: 'Blog image' } },
  link: { href: '/blog/post', label: 'Read more' },
  title: 'Blog Post Title',
}
const childrenArray = [productCardProps, productCardProps, productCardProps]
const defaultProps: OrListingProps = {
  children: childrenArray.map((props, key) => <MlCardBlog key={key} {...props} />),
}

describe('organisms/or-listing', () => {
  describe('when the component is created', () => {
    it('should render cards correctly', () => {
      const { queryAllByText } = render(<OrListing {...defaultProps} />)

      expect(queryAllByText(productCardProps.title).length).toBe(childrenArray.length)
    })
  })
})
