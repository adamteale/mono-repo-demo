import { AtImageProps } from '../atoms/at-image'

export enum Target {
  SELF = '_self',
  BLANK = '_blank',
}

export const targetFunctions: Record<Target, (value: string) => void> = {
  [Target.SELF]: (value: string) => {
    window.location.href = value
  },
  [Target.BLANK]: (value: string) => {
    window.open(value)
  },
}

export type WithImage = {
  image?: AtImageProps
}

/**
 * Represents a type that associates a string key with an array of `AtImageProps`.
 * The string key can be any valid TypeScript string type.
 */
export type WithImages<T extends string> = {
  [key in T]?: AtImageProps[]
}
