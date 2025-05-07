import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { AtBullets } from './at-bullets'
import userEvent from '@testing-library/user-event'

describe('atoms/at-bullets', () => {
  it('should renders bullets control', () => {
    const dataTestId = 'control-bullets'

    const { getByTestId, container } = render(
      <AtBullets bulletsCount={10} onClick={() => {}} dataTestId={dataTestId} />,
    )
    expect(container).toBeInTheDocument()
    const ulList = getByTestId(dataTestId)
    expect(ulList.childNodes.length).toBe(10)
  })

  describe('when is clicked', () => {
    it('should trigger onClick function', async () => {
      const dataTestId = 'control-bullets'
      const user = userEvent.setup()

      const onClick = vi.fn()
      const { getByTestId } = render(<AtBullets bulletsCount={10} onClick={onClick} dataTestId={dataTestId} />)
      const firstBullet = getByTestId(`${dataTestId}-bullet-0`)
      await user.click(firstBullet)
      expect(onClick).toHaveBeenCalledOnce()
    })
  })
})
