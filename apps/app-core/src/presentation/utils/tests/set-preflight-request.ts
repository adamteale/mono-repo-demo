import nock from 'nock'

interface SetPreflightRequestProps {
  baseUrl: string
  path: string
  allowedHeaders?: string[]
  allowedMethods?: string[]
  allowCredentials?: boolean
  origin?: string
  maxAge?: number
}

export const setPreflightRequest = ({
  baseUrl,
  path,
  maxAge,
  allowedHeaders = [],
  allowedMethods = ['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE'],
  allowCredentials = false,
  origin = '*',
}: SetPreflightRequestProps) => {
  const replyHeaders: nock.ReplyHeaders = {
    'access-control-allow-origin': origin,
    'access-control-allow-methods': allowedMethods.join(', '),
  }

  if (allowedHeaders.length) {
    replyHeaders['access-control-allow-headers'] = allowedHeaders.join(', ')
  }

  if (allowCredentials) {
    replyHeaders['access-control-allow-credentials'] = 'true'
  }

  if (maxAge) {
    replyHeaders['access-control-max-age'] = maxAge.toString()
  }

  return nock(baseUrl).defaultReplyHeaders(replyHeaders).options(path).reply(200, '')
}
