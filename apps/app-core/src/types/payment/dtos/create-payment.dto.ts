export interface CreatePaymentDto {
  paymentInfo: {
    method: 'credit_card' | 'debit_card'
  }
  basketId: string
}
