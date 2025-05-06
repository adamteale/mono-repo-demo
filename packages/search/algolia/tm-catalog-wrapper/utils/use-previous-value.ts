import { useEffect, useRef } from 'react'

export const usePreviousValue = (currentAsPath: string) => {
  const refToPreviousAsPath = useRef<string>('')

  useEffect(() => {
    refToPreviousAsPath.current = currentAsPath
  }, [currentAsPath])

  return refToPreviousAsPath.current
}
