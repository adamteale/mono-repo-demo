import { useMediaQueryMatch } from './use-media-query-match'

/**
 * @returns if viewport is tablet or lower
 */
export const useIsTablet = () => {
  const isTablet = useMediaQueryMatch('(max-width: 1280px)')
  return isTablet
}
