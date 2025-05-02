import { defineConfig, mergeConfig } from 'vitest/config'
import vitestGlobalConfig from 'vitest-config/vitest.config'

export default mergeConfig(vitestGlobalConfig, defineConfig({
  test: {
    exclude: [''],
    environment: 'jsdom',
    setupFiles: ['./setup-tests.ts'],
  },
}))
