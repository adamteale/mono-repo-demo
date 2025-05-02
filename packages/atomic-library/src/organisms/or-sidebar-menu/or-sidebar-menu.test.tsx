import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { OrSidebarMenu } from './or-sidebar-menu'

const defaultProps = {
  title: 'CATEGORIES',
  menuItems: [
    { label: 'Frequently Asked Questions', isActive: false },
    { label: 'Shipping', isActive: true },
    { label: 'Returns and Exchanges', isActive: false },
    { label: 'Accounts', isActive: false },
    { label: 'Payments', isActive: false },
    { label: 'Gifts', isActive: false },
    { label: 'Terms and Conditions', isActive: false },
    { label: 'Privacy Policy', isActive: false },
  ],
}

describe('organisms/or-sidebar-menu', () => {
  it('should renders correctly', () => {
    const { getByTestId } = render(<OrSidebarMenu {...defaultProps} />)

    const desktopContainer = getByTestId('sidebar-menu-desktop-container')
    const dropdown = getByTestId('sidebar-menu-dropdown')

    expect(desktopContainer).toBeInTheDocument()
    expect(dropdown).toBeInTheDocument()
  })

  it('should renders all the items', () => {
    const { getAllByRole } = render(<OrSidebarMenu {...defaultProps} />)

    const listsOfItems = getAllByRole('list')

    expect(listsOfItems.length).toBe(2)

    const desktopList = listsOfItems[0]
    const mobileList = listsOfItems[1]

    expect(desktopList.childNodes.length).equal(mobileList.childNodes.length)
    expect(desktopList.childNodes.length).equal(defaultProps.menuItems.length)
  })
})
