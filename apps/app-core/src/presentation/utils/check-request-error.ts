import { RequestError } from '../types'

export const isRequestError = (response: Record<string, any>): response is RequestError => {
  return 'status' in response
}
