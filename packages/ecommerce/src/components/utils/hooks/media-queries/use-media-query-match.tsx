import { useEffect, useState } from 'react'

export const useMediaQueryMatch = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  useEffect(() => {
    const handleChange = () => {
      setMatches(getMatches(query))
    }
    handleChange()

    const matchMedia = window.matchMedia?.(query)
    if (matchMedia) matchMedia.addEventListener('change', handleChange)

    return () => {
      if (matchMedia) matchMedia.removeEventListener('change', handleChange)
    }
  }, [query])

  return matches
}
