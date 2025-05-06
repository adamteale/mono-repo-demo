import { BrowserStorage } from '../types/browser-storage'

const getStorageType = (type: BrowserStorage): Storage | undefined => {
  if (typeof window !== 'undefined') {
    return type === BrowserStorage.LOCAL_STORAGE ? window.localStorage : window.sessionStorage
  }
}

export const clearStorage = (storageType: BrowserStorage = BrowserStorage.LOCAL_STORAGE) => {
  const storage = getStorageType(storageType)
  storage?.clear()
}

export const setStorageState = (
  key: string,
  value: unknown,
  storageType: BrowserStorage = BrowserStorage.LOCAL_STORAGE,
) => {
  try {
    const storage = getStorageType(storageType)
    const stringifiedValue = JSON.stringify(value)
    storage?.setItem(key, stringifiedValue)
  } catch (error) {
    console.error('Error setting storage state:', error)
  }
}

export const getStorageState = (key: string, storageType: BrowserStorage = BrowserStorage.LOCAL_STORAGE) => {
  try {
    const storage = getStorageType(storageType)
    if (!storage) return null

    const value = storage.getItem(key)
    if (value !== null) {
      return JSON.parse(value)
    }
    return null
  } catch (error) {
    console.error('Error parsing storage state:', error)
  }
}

export const removeStorageState = (key: string, storageType: BrowserStorage = BrowserStorage.LOCAL_STORAGE) => {
  try {
    const storage = getStorageType(storageType)
    storage?.removeItem(key)
  } catch (error) {
    console.error('Error removing storage state:', error)
  }
}
