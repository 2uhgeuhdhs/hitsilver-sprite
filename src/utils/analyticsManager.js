/**
 * @file: analyticsManager.js
 * @description: Безопасный no-op менеджер аналитики для RU-only. Централизует API аналитики и позволяет включать её только по согласию.
 * @dependencies: src/context/cookie-consent-context.jsx (интеграция на шаге 2), src/pages/* (trackPageView), src/components/* (trackEvent)
 * @created: 2025-09-06
 */

// ВАЖНО: RU-only. Никаких внешних запросов или SDK. Только локальные логи/состояние.
// На шаге 2 будет связь с cookie-consent (включение/выключение по согласию).

const state = {
  initialized: false,
  enabled: false,
  sessionId: null,
  lastPage: null,
  debug: true,
}

function log(...args) {
  if (state.debug) {
    // eslint-disable-next-line no-console
    console.log('[analytics]', ...args)
  }
}

function generateSessionId() {
  return 'sess_' + Math.random().toString(36).slice(2, 10)
}

export function init(options = {}) {
  if (state.initialized) return state
  state.initialized = true
  state.sessionId = generateSessionId()
  state.enabled = Boolean(options.enabled) || false
  state.debug = options.debug ?? state.debug
  log('init', { enabled: state.enabled, sessionId: state.sessionId })
  return { ...state }
}

export function enable() {
  state.enabled = true
  log('enabled')
  return { ...state }
}

export function disable() {
  state.enabled = false
  log('disabled')
  return { ...state }
}

export function trackPageView(path, meta = {}) {
  if (!state.enabled) return
  state.lastPage = path
  log('pageview', { path, meta, sessionId: state.sessionId, ts: Date.now() })
}

export function trackEvent(name, props = {}) {
  if (!state.enabled) return
  log('event', { name, props, sessionId: state.sessionId, ts: Date.now() })
}

export function getState() {
  return { ...state }
}

// Удобный singleton по умолчанию
const analytics = {
  init,
  enable,
  disable,
  trackPageView,
  trackEvent,
  getState,
}

export default analytics
