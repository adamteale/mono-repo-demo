import { useMediaQueryMatch } from './use-media-query-match'

/**
 * @returns if viewport is tablet or lower
 */
export const useIsSmallDesktop = () => {
  const isSmallDesktop = useMediaQueryMatch('(min-width: 1920px)')
  return isSmallDesktop
}
