import { createContext, useContext, useEffect, useState } from 'react'
import analytics from '@/utils/analyticsManager'

const COOKIE_CONSENT_KEY = 'cookie_consent'

const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
}

const CookieConsentContext = createContext({
  consent: defaultConsent,
  updateConsent: () => {},
  hasConsent: () => false,
})

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(defaultConsent)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load saved consent on mount
  useEffect(() => {
    // Инициализация analytics (RU-only, disabled по умолчанию)
    analytics.init({ enabled: false, debug: true })
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (savedConsent) {
      try {
        const parsed = JSON.parse(savedConsent)
        setConsent(parsed)
      } catch (e) {
        console.error('Error parsing saved cookie consent', e)
      }
    }
    setIsInitialized(true)
  }, [])

  // Включение/выключение analytics по согласию
  useEffect(() => {
    if (!isInitialized) return
    if (consent.analytics) analytics.enable()
    else analytics.disable()
  }, [isInitialized, consent.analytics])

  // Save consent to localStorage when it changes
  const updateConsent = (newConsent) => {
    const updatedConsent = { ...consent, ...newConsent }
    setConsent(updatedConsent)
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(updatedConsent))
  }

  // Check if we have specific consent
  const hasConsent = (type) => {
    return consent[type] === true
  }

  return (
    <CookieConsentContext.Provider value={{ consent, updateConsent, hasConsent, isInitialized }}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider')
  }
  return context
}
