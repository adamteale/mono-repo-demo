import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { OrTeamSection } from './or-team-section'
import { OrTeamSectionProps } from './or-team-section.types'

const defaultProps: OrTeamSectionProps = {
  title: 'Test title',
  description: 'Test description',
  teamCards: [
    {
      teamName: 'Fabiola Gonzalez',
      role: 'Product Designer',
      roleDescription: 'Founding design team at Figma. Former Pleo, Stripe, and Tile.',
      image: { imageDesktop: { src: 'https://picsum.photos/1920/1080' } },
    },
    {
      teamName: 'Fabiola Gonzalez',
      role: 'Product Designer',
      roleDescription: 'Founding design team at Figma. Former Pleo, Stripe, and Tile.',
      image: { imageDesktop: { src: 'https://picsum.photos/1920/1080' } },
    },
    {
      teamName: 'Fabiola Gonzalez',
      role: 'Product Designer',
      roleDescription: 'Founding design team at Figma. Former Pleo, Stripe, and Tile.',
      image: { imageDesktop: { src: 'https://picsum.photos/1920/1080' } },
    },
  ],
}

describe('organisms/or-team-section', () => {
  it('should renders correctly', () => {
    const { getByText, getByTestId } = render(<OrTeamSection {...defaultProps} />)
    expect(getByText(defaultProps.title)).toBeInTheDocument()
    expect(getByText(defaultProps.description)).toBeInTheDocument()
    expect(getByTestId('ml-vertical-team-container').childNodes.length).toEqual(defaultProps.teamCards.length)
  })
})
