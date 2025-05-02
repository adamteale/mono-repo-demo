import { resolveAccessToken } from '../customer'

import { createPayment } from '../../../services/payment'
import { LOCAL_BASKET_ID } from '../../../context'
import { getStorageState } from '../../storage-state'
import { CreatePaymentDto } from '../../../types'

export const proceedWithPayment = async (method: CreatePaymentDto['paymentInfo']['method']) => {
  const accessToken = await resolveAccessToken()
  const basketId = getStorageState(LOCAL_BASKET_ID)

  return createPayment(accessToken, {
    paymentInfo: {
      method,
    },
    basketId,
  })
}
