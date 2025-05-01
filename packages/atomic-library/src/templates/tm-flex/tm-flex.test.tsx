import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TmFlex } from './tm-flex'

describe('templates/tm-flex', () => {
  it('should render the component with children', () => {
    const { getByText } = render(
      <TmFlex>
        <div>Test Child</div>
      </TmFlex>,
    )

    expect(getByText('Test Child')).toBeInTheDocument()
  })

  it('should render the component with multiple children', () => {
    const { getByText } = render(
      <TmFlex>
        <div>First Child</div>
        <div>Second Child</div>
      </TmFlex>,
    )
    const firstChild = getByText('First Child')
    const secondChild = getByText('Second Child')

    expect(firstChild.nextSibling).toContainElement(secondChild)
  })
})
