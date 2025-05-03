import { GetServerSidePropsContext } from 'next'
import { CookieValueTypes, getCookie, setCookie } from 'cookies-next'
import { getAccessToken, getRefreshedAccessToken } from '../../../services/customer'
import { AuthFailError } from './assertions'
import { environment } from '../../../config/environment'

export const tokenCookieName = 'access-token'
export const refreshTokenCookieName = `refresh-${tokenCookieName}`
export const refreshTokenExpirationDateCookieName = `${refreshTokenCookieName}-expiration-date`

export const setRefreshTokenCookie = (
  refreshAccessTokenCookie: CookieValueTypes,
  req?: GetServerSidePropsContext['req'],
  res?: GetServerSidePropsContext['res'],
) => {
  const refreshTokenExpires = new Date()
  const sessionDuration = Number(environment.sessionsDuration)
  const parsedSessionDuration = isNaN(sessionDuration) ? 7 : sessionDuration
  const refreshTokenExpirationDate = new Date(
    refreshTokenExpires.setDate(refreshTokenExpires.getDate() + parsedSessionDuration),
  )

  setCookie(refreshTokenCookieName, refreshAccessTokenCookie, {
    req,
    res,
    expires: refreshTokenExpirationDate,
  })

  setCookie(refreshTokenExpirationDateCookieName, refreshTokenExpirationDate, {
    req,
    res,
    expires: refreshTokenExpirationDate,
  })
}

export const resolveAccessToken = async (
  req?: GetServerSidePropsContext['req'],
  res?: GetServerSidePropsContext['res'],
): Promise<string> => {
  try {
    const refreshAccessTokenCookie = getCookie(refreshTokenCookieName, { req, res })

    if (!refreshAccessTokenCookie) {
      const accessToken = await getAccessToken()
      if (accessToken) {
        setCookie(tokenCookieName, accessToken.accessToken, {
          req,
          res,
          expires: new Date(accessToken.expires),
        })

        setRefreshTokenCookie(accessToken.refreshToken)
        return accessToken.accessToken
      }
    }

    const accessTokenCookie = getCookie(tokenCookieName, { req, res })
    if (accessTokenCookie) return accessTokenCookie

    if (refreshAccessTokenCookie) {
      const refreshedToken = await getRefreshedAccessToken(refreshAccessTokenCookie)
      if (refreshedToken) {
        setCookie(tokenCookieName, refreshedToken.accessToken, {
          req,
          res,
          expires: new Date(refreshedToken.expires),
        })

        setRefreshTokenCookie(refreshAccessTokenCookie)
        return refreshedToken.accessToken
      }
    }
  } catch {
    throw new AuthFailError()
  }
  throw new AuthFailError()
}
