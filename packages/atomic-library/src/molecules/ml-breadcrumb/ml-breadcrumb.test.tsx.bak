import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MlBreadcrumb } from './ml-breadcrumb'

const links = [
  { label: 'Beeshop' },
  { href: '#', label: 'Men' },
  { href: '#', label: "All Men's shoes" },
  { href: '#', label: 'Level 4' },
  { href: '#', label: 'Level 5' },
]

describe('molecules/ml-breadcrumb', () => {
  describe('when it receives more than 1 link', () => {
    it('should render (links.length  - 1) links in desktop and 1 in mobile', () => {
      const { container } = render(<MlBreadcrumb links={links} />)
      expect(container).toBeTruthy()

      const desktopLinkNodes = []
      const mobileLinkNodes = []
      container.querySelectorAll('a').forEach((node) => {
        if (node.dataset.testid?.includes('desktop-breadcrumb-link')) desktopLinkNodes.push(node)
        else if (node.dataset.testid?.includes('mobile-breadcrumb-link')) mobileLinkNodes.push(node)
      })

      expect(desktopLinkNodes.length).toBe(links.length - 1)
      expect(mobileLinkNodes.length).toBe(1)
    })
  })

  describe('when it receives only 1 link', () => {
    it('should also be able to render it', () => {
      const { container } = render(<MlBreadcrumb links={[links[0]]} />)
      expect(container).toBeTruthy()
      const linkNodes = container.querySelectorAll('a')

      const desktopLinkNodes = []
      const mobileLinkNodes = []
      container.querySelectorAll('a').forEach((node) => {
        if (node.dataset.testid?.includes('desktop-breadcrumb-link')) desktopLinkNodes.push(node)
        else if (node.dataset.testid?.includes('mobile-breadcrumb-link')) mobileLinkNodes.push(node)
      })

      expect(linkNodes.length).toBe(2)
      expect(desktopLinkNodes.length).toBe(1)
      expect(mobileLinkNodes.length).toBe(1)
    })
  })
})
