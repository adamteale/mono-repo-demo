import { describe, expect, it } from 'vitest'
import { classes } from './cva'

describe('classes function', () => {
  it('should return a string of values joined by a space', () => {
    const obj = {
      prop1: 'value1',
      prop2: 'value2',
      prop3: 'value3',
    }
    const result = classes(obj)
    expect(result).toBe('value1 value2 value3')
  })

  it('should return an empty string if the object is empty', () => {
    const obj = {}
    const result = classes(obj)
    expect(result).toBe('')
  })
})
