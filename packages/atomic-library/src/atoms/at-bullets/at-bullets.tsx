import { useMemo } from 'react'
import { AtBulletsProps } from './at-bullets.types'
import { bulletVariants } from './at-bullets.variants'

export const AtBullets = ({ dataTestId, bulletsCount = 0, activeBulletIndex = 0, onClick }: AtBulletsProps) => {
  const bulletsCountArray = useMemo(() => new Array(bulletsCount).fill(0), [bulletsCount])
  if (bulletsCountArray.length === 0) return

  return (
    <ul data-testid={dataTestId} className="flex gap-4">
      {bulletsCountArray.map((_val, idx) => (
        <li key={`bullet-${idx}`}>
          <button
            onClick={() => onClick(idx)}
            data-testid={`${dataTestId ? `${dataTestId}-` : ''}bullet-${idx}`}
            className={bulletVariants({ active: activeBulletIndex === idx })}
          />
        </li>
      ))}
    </ul>
  )
}
