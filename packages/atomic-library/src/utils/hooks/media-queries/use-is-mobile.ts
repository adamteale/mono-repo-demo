import { useMediaQueryMatch } from './use-media-query-match'

/**
 * @returns if viewport is mobile
 */
export const useIsMobile = () => {
  const isMobile = useMediaQueryMatch('(max-width: 640px)')
  return isMobile
}
