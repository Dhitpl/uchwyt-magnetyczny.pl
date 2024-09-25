/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    typecheck: {
      checker: 'tsc',
      enabled: true,
    },
    environment: 'jsdom',
  },
})
