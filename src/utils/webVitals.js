/**
 * @file: webVitals.js
 * @description: Регистрация Web Vitals (CLS, LCP, INP, FCP, TTFB) с локальным логированием через analyticsManager
 * @dependencies: src/utils/analyticsManager.js
 * @created: 2025-09-06
 */

import analytics from '@/utils/analyticsManager'

export async function registerWebVitals() {
  try {
    const mod = await import('web-vitals')
    const { onCLS, onINP, onLCP, onTTFB, onFCP } = mod

    const handler = (metric) => {
      // Отправка только если аналитика включена пользователем (gated в analyticsManager)
      analytics.trackEvent('web_vitals', {
        name: metric.name,
        value: metric.value,
        id: metric.id,
        rating: metric.rating,
      })
    }

    onCLS?.(handler)
    onINP?.(handler)
    onLCP?.(handler)
    onTTFB?.(handler)
    onFCP?.(handler)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn('[web-vitals] package not available or failed to load', e)
  }
}
