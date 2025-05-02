import { describe, expect, it } from 'vitest'
import { getCardServiceName, isValidCardNumber, isValidExpirationDate, luhnCheck } from './validations'

enum MONTHS {
  JANUARY = 1,
  DECEMBER = 12,
}

enum PARSED_MONTHS {
  JANUARY = '01',
  DECEMBER = '12',
}

describe('utils/payment/validations', () => {
  describe('luhnCheck', () => {
    it('should validate the card number', () => {
      expect(luhnCheck('4539148803436467')).toBe(true)
    })
    it('should reject the card number', () => {
      expect(luhnCheck('4539148803436462')).toBe(false)
    })
  })

  describe('getCardServiceName', () => {
    it('should validate the visa service', () => {
      expect(getCardServiceName('4539148803436467')).toBe('visa')
    })
    it('should validate the mastercard service', () => {
      expect(getCardServiceName('5500000000000004')).toBe('mastercard')
    })
    it('should validate the american express service', () => {
      expect(getCardServiceName('340000000000009')).toBe('amex')
    })
    it('should validate the discover service', () => {
      expect(getCardServiceName('6011000990139424')).toBe('discover')
    })
    it('should not found a valid service', () => {
      expect(getCardServiceName('1234567890123456')).toBe('')
    })
  })

  describe('isValidCardNumber', () => {
    it('should validate the visa card number', () => {
      expect(isValidCardNumber('4539148803436467')).toBe(true)
    })
    it('should validate the mastercard card number', () => {
      expect(isValidCardNumber('5500000000000004')).toBe(true)
    })
    it('should validate the american express card number', () => {
      expect(isValidCardNumber('340000000000009')).toBe(true)
    })
    it('should validate the discover card number', () => {
      expect(isValidCardNumber('6011000990139424')).toBe(true)
    })
    it('should not found a valid card number', () => {
      expect(isValidCardNumber('1234567890123456')).toBe(false)
    })
  })

  describe('isValidExpirationDate', () => {
    const actualDate = new Date()
    const actualMonth = actualDate.getMonth() + 1
    const parsedActualYear = Number(actualDate.getFullYear().toString().slice(-2))
    const parsedActualMonth = actualMonth.toString().padStart(2, '0')

    it('should validate the expiration date for next month', () => {
      const nextMonth = (actualMonth === MONTHS.DECEMBER ? MONTHS.JANUARY : actualMonth + 1).toString().padStart(2, '0')
      const nextMonthYearAdjustment = nextMonth === PARSED_MONTHS.JANUARY ? 1 : 0
      expect(isValidExpirationDate(`${nextMonth}/${parsedActualYear + nextMonthYearAdjustment}`)).toBe(true)
    })

    it('should validate the expiration date for next year', () => {
      expect(isValidExpirationDate(`${parsedActualMonth}/${parsedActualYear + 1}`)).toBe(true)
    })

    it('should reject the expiration date for last month', () => {
      const lastMonth = (actualMonth === MONTHS.JANUARY ? MONTHS.DECEMBER : actualMonth - 1).toString().padStart(2, '0')
      const lastMonthYearAdjustment = lastMonth === PARSED_MONTHS.DECEMBER ? -1 : 0
      expect(isValidExpirationDate(`${lastMonth}/${parsedActualYear + lastMonthYearAdjustment}`)).toBe(false)
    })
  })
})
