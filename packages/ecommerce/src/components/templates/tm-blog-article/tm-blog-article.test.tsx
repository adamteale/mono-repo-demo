import { TmBlogArticle } from './tm-blog-article'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { bannerSubtitle, bannerTitle, blogContentText, imageAltText, mockProps } from './tm-blog-article.mock'

describe('templates/tm-blog-article', () => {
  it('renders the component with the provided props', () => {
    render(<TmBlogArticle {...mockProps} />)

    expect(screen.getByText(bannerTitle)).toBeInTheDocument()
    expect(screen.getByText(bannerSubtitle)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: blogContentText })).toBeInTheDocument()
    const image = screen.getByAltText(imageAltText)
    expect(image).toBeInTheDocument()
  })
})
