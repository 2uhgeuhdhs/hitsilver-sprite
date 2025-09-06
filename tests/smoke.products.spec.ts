/**
 * @file: tests/smoke.products.spec.ts
 * @description: Smoke E2E for products listing and product detail
 * @dependencies: @playwright/test
 * @created: 2025-09-06
 */
import { test, expect } from '@playwright/test'

// Open catalog and navigate into the first product card
test('products -> open first product and see Add to Cart', async ({ page }) => {
  await page.goto('/products')
  // basic presence of listing summary
  await expect(page.getByText(/Показано\s+\d+\s+товаров/i)).toBeVisible()

  // click first product link
  // Close overlay if some modal is open and blocks clicks
  const overlay = page.locator('[data-slot="dialog-overlay"]').first()
  if (await overlay.isVisible().catch(() => false)) {
    await page.keyboard.press('Escape')
    await expect(overlay).toBeHidden()
  }

  const firstProductLink = page.locator('.product-card a[href^="/products/"]').first()
  await firstProductLink.click()
  await page.waitForURL(/\/products\/[^/]+/)

  // On product page we should see Add to Cart button
  const addToCart = page.getByRole('button', { name: /добавить в корзину/i })
  await expect(addToCart).toBeVisible()
})
