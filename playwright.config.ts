/**
 * @file: playwright.config.ts
 * @description: Playwright config for smoke E2E
 * @dependencies: @playwright/test, Vite dev server
 * @created: 2025-09-06
 */
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: 'tests',
  timeout: 30_000,
  retries: 0,
  fullyParallel: true,
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    headless: true,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: {
    command: 'pnpm dev',
    port: 5173,
    timeout: 60_000,
    reuseExistingServer: true,
  },
})
