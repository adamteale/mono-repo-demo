import nock from 'nock'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { environment } from '../../../config/environment'
import Cookies from 'cookies-next'
import {
  accessTokenResponseMock,
  refreshedAccessTokenResponseMock,
} from '../../../services/customer/tests/mocks/access-token.mock'
import { resolveAccessToken } from './auth-token-handler'
import { setPreflightRequest } from '../../tests/set-preflight-request'

const customerBaseUrl = `${environment.services.customer}/customer`

describe('auth-token-handler', () => {
  beforeEach(() => {
    if (!nock.isActive()) {
      nock.activate()
    }
  })

  afterEach(() => {
    nock.restore()
  })

  describe('when calling auth token handler and a token is stored in browser cookies', () => {
    it('should get stored token', async () => {
      const getCookiesSpy = vi.spyOn(Cookies, 'getCookie').mockImplementation(() => accessTokenResponseMock.accessToken)
      const setCookiesSpy = vi.spyOn(Cookies, 'setCookie')
      const response = await resolveAccessToken()
      expect(getCookiesSpy).toHaveBeenCalledTimes(2)
      expect(setCookiesSpy).not.toHaveBeenCalled()
      expect(response).toBe(accessTokenResponseMock.accessToken)
    })
  })

  describe('when calling auth token handler and there is no auth token stored in browser', () => {
    describe('when there is a refresh token stored', () => {
      it('should set a new auth token', async () => {
        setPreflightRequest({
          baseUrl: customerBaseUrl,
          path: '/auth/token/refresh',
          allowedHeaders: ['Authorization'],
        })

        nock(customerBaseUrl)
          .defaultReplyHeaders({
            'access-control-allow-origin': '*',
            'access-control-allow-headers': 'Authorization',
          })
          .post('/auth/token/refresh')
          .reply(200, refreshedAccessTokenResponseMock)

        const getCookiesSpy = vi.spyOn(Cookies, 'getCookie')
        getCookiesSpy.mockImplementationOnce(() => accessTokenResponseMock.refreshToken)
        getCookiesSpy.mockImplementationOnce(() => '')

        const setCookiesSpy = vi.spyOn(Cookies, 'setCookie')

        const response = await resolveAccessToken()

        expect(getCookiesSpy).toHaveBeenCalledTimes(2)
        expect(setCookiesSpy).toHaveBeenCalledTimes(3)
        expect(response).toBe(refreshedAccessTokenResponseMock.accessToken)
      })
    })

    describe('when there is no refresh token stored', () => {
      it('should set a new auth token', async () => {
        setPreflightRequest({
          baseUrl: customerBaseUrl,
          path: '/auth/token/refresh',
          allowedHeaders: ['Authorization'],
        })

        nock(customerBaseUrl)
          .defaultReplyHeaders({
            'access-control-allow-origin': '*',
          })
          .post('/auth/token')
          .reply(200, accessTokenResponseMock)

        nock(customerBaseUrl, {
          reqheaders: {
            Authorization: 'Bearer ' + accessTokenResponseMock.accessToken,
          },
        })
          .defaultReplyHeaders({
            'access-control-allow-origin': '*',
          })
          .post('/auth/token/refresh')
          .reply(200, refreshedAccessTokenResponseMock)

        const getCookiesSpy = vi.spyOn(Cookies, 'getCookie').mockImplementation(() => '')
        const setCookiesSpy = vi.spyOn(Cookies, 'setCookie')

        const response = await resolveAccessToken()
        expect(getCookiesSpy).toHaveBeenCalledTimes(1)
        expect(setCookiesSpy).toHaveBeenCalledTimes(3)
        expect(response).toBe(accessTokenResponseMock.accessToken)
      })
    })
  })
})
