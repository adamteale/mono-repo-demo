import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { PgPage } from './pg-page'
import { OrFooterProps, OrHeaderProps } from '../../organisms'

const headerProps: OrHeaderProps = {
  topLinks: [
    {
      dataTestId: 'some-data-test-id',
    },
  ],
}

const footerProps: OrFooterProps = {
  copyright: 'Footer Copyright',
  description: 'Footer Description',
}

const mockChildren = 'Unique children text'

describe('components/pg-page', () => {
  it('should render children within Layout component with provided header and footer', () => {
    const { getByText, getAllByTestId } = render(
      <PgPage header={headerProps} footer={footerProps}>
        {mockChildren}
      </PgPage>,
    )

    expect(getAllByTestId(headerProps.topLinks![0].dataTestId!).length).toBe(2)

    expect(getByText(mockChildren)).toBeInTheDocument()

    expect(getByText(footerProps.copyright)).toBeInTheDocument()
    expect(getByText(footerProps.description)).toBeInTheDocument()
  })
})
