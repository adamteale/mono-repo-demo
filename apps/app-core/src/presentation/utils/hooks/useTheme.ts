import { CMSGlobalConfig } from '@cms-types/common'
import { camelToKebabCase } from '../text'
import { useEffect } from 'react'

function applyThemeVariablesToRoot(themeVariables: CMSGlobalConfig['themeVariables']) {
  const themeVariablesString = Object.entries(themeVariables as { [key: string]: string })
    .map(([key, value]) => {
      if (value !== '') {
        return `--${camelToKebabCase(key)}: ${value};`
      }
    })
    .join('\n')
  if (themeVariablesString || themeVariablesString !== '') {
    document.documentElement.style.cssText += themeVariablesString
  }
}

export function useTheme(themeVariables: CMSGlobalConfig['themeVariables']) {
  useEffect(() => {
    if (themeVariables) {
      applyThemeVariablesToRoot(themeVariables)
    }
  }, [themeVariables])
}
