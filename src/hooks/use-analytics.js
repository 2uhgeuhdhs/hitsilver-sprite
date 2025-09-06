import { useEffect } from 'react'
import { useCookieConsent } from '@/context/cookie-consent-context'

// Initialize Google Analytics
export function useGoogleAnalytics(measurementId) {
  const { hasConsent } = useCookieConsent()

  useEffect(() => {
    if (hasConsent('analytics') && measurementId && typeof window !== 'undefined') {
      // Initialize Google Analytics
      window.dataLayer = window.dataLayer || []
      function gtag() {
        dataLayer.push(arguments)
      }
      gtag('js', new Date())
      gtag('config', measurementId)

      // Add the script to the document
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      document.head.appendChild(script)

      return () => {
        // Cleanup if needed
        document.head.removeChild(script)
      }
    }
  }, [hasConsent, measurementId])

  // Function to track page views
  const trackPageView = (url) => {
    if (hasConsent('analytics') && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: url,
        send_to: measurementId,
      })
    }
  }

  // Function to track events
  const trackEvent = (action, category, label, value) => {
    if (hasConsent('analytics') && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    }
  }

  return { trackPageView, trackEvent }
}

// Initialize Yandex Metrika
export function useYandexMetrika(counterId) {
  const { hasConsent } = useCookieConsent()

  useEffect(() => {
    if (hasConsent('analytics') && counterId && typeof window !== 'undefined') {
      // Initialize Yandex Metrika
      ;(function (m, e, t, r, i, k, a) {
        m[i] =
          m[i] ||
          function () {
            ;(m[i].a = m[i].a || []).push(arguments)
          }
        m[i].l = 1 * new Date()
        for (var j = 0; j < document.scripts.length; j++) {
          if (document.scripts[j].src === r) {
            return
          }
        }
        ;((k = e.createElement(t)),
          (a = e.getElementsByTagName(t)[0]),
          (k.async = 1),
          (k.src = r),
          a.parentNode.insertBefore(k, a))
      })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym')

      window.ym(counterId, 'init', {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      })

      return () => {
        // Cleanup if needed
        delete window.ym
      }
    }
  }, [hasConsent, counterId])

  // Function to track page views
  const trackPageView = (url) => {
    if (hasConsent('analytics') && window.ym) {
      window.ym(counterId, 'hit', url)
    }
  }

  // Function to track events
  const trackEvent = (action, params) => {
    if (hasConsent('analytics') && window.ym) {
      window.ym(counterId, 'reachGoal', action, params)
    }
  }

  return { trackPageView, trackEvent }
}
