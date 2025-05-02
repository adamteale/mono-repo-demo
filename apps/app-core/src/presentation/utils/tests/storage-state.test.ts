import { describe, it, expect } from 'vitest'
import { getStorageState, setStorageState, clearStorage, removeStorageState } from '../storage-state'
import { BrowserStorage } from '../../types/browser-storage'

describe('storage-state', () => {
  const KEY = 'test-key'
  const VALUE = 'test-value'

  describe('when a valid value is being stored', () => {
    it('should store the value in the specified storage and retrieve it correctly', () => {
      setStorageState(KEY, VALUE, BrowserStorage.LOCAL_STORAGE)
      const value = getStorageState(KEY, BrowserStorage.LOCAL_STORAGE)
      expect(value).toBe(VALUE)
    })
  })

  describe('when all items are removed from storage', () => {
    it('should clear all items from the specified storage', () => {
      setStorageState(KEY, VALUE, BrowserStorage.LOCAL_STORAGE)
      clearStorage(BrowserStorage.LOCAL_STORAGE)
      const value = getStorageState(KEY, BrowserStorage.LOCAL_STORAGE)
      expect(value).toBeNull()
    })
  })

  describe('when an item is removed from storage', () => {
    it('should remove the specified item from the storage', () => {
      setStorageState(KEY, VALUE, BrowserStorage.LOCAL_STORAGE)
      removeStorageState(KEY, BrowserStorage.LOCAL_STORAGE)
      const value = getStorageState(KEY, BrowserStorage.LOCAL_STORAGE)
      expect(value).toBeNull()
    })
  })
})
