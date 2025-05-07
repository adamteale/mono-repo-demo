import { describe, expect, it } from 'vitest'
import { TmLegalSupportProps } from './tm-legal-support.types'
import { TmLegalSupport } from './tm-legal-support'
import { render } from '@testing-library/react'

const childrenText = 'Children Test'
const menuItemText = 'Menu Item'

const defaultProps: TmLegalSupportProps = {
  title: 'Help & Frequently Asked Questions',
  menuProps: {
    title: 'CATEGORIES',
    menuItems: [
      { label: menuItemText, isActive: true },
      { label: menuItemText, isActive: false },
      { label: menuItemText, isActive: false },
    ],
  },
}

describe('templates/tm-legal-support', () => {
  it('should render the component with childrens', () => {
    const { getByText, queryAllByText } = render(
      <TmLegalSupport {...defaultProps}>
        <div>{childrenText}</div>
      </TmLegalSupport>,
    )

    // Here it needs to be doubled due to desktop and mobile items.
    expect(queryAllByText(menuItemText).length).toEqual(defaultProps.menuProps.menuItems.length * 2)
    expect(getByText(defaultProps.title)).toBeInTheDocument()
    expect(getByText(childrenText)).toBeInTheDocument()
  })
})
