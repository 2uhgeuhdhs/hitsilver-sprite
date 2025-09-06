/**
 * @file: src/components/ui/wave-edges.jsx
 * @description: Фиксированные декоративные «волны» по бокам сайта с лёгкой анимацией при прокрутке.
 * @dependencies: src/index.css, src/App.jsx
 * @created: 2025-09-04
 */

import { useEffect } from 'react'

function useScrollProgressVar() {
  useEffect(() => {
    let frame = 0
    const el = document.documentElement
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const doc = document.documentElement
        const body = document.body
        const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0
        const scrollHeight = (doc.scrollHeight || body.scrollHeight || 1) - window.innerHeight
        const ratio = scrollHeight > 0 ? Math.min(1, Math.max(0, scrollTop / scrollHeight)) : 0
        el.style.setProperty('--scroll', String(ratio))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (frame) cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])
}

export default function WaveEdges() {
  useScrollProgressVar()
  return (
    <>
      <div className="wave-edge wave-edge--left" aria-hidden="true">
        <svg className="wave-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradL" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--tiffany-blue)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--tiffany-blue)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <g className="wave-group">
            <path className="wave-path wave-path--1" d="M50 0 C 35 20, 65 40, 50 60 C 35 80, 65 90, 50 100" fill="none" stroke="url(#waveGradL)" strokeWidth="2" />
            <path className="wave-path wave-path--2" d="M40 0 C 25 22, 55 42, 40 62 C 25 82, 55 92, 40 100" fill="none" stroke="url(#waveGradL)" strokeWidth="1.5" />
            <path className="wave-path wave-path--3" d="M60 0 C 45 18, 75 38, 60 58 C 45 78, 75 88, 60 100" fill="none" stroke="url(#waveGradL)" strokeWidth="1" />
          </g>
        </svg>
      </div>
      <div className="wave-edge wave-edge--right" aria-hidden="true">
        <svg className="wave-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradR" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--tiffany-blue)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--tiffany-blue)" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          <g className="wave-group">
            <path className="wave-path wave-path--1" d="M50 0 C 35 20, 65 40, 50 60 C 35 80, 65 90, 50 100" fill="none" stroke="url(#waveGradR)" strokeWidth="2" />
            <path className="wave-path wave-path--2" d="M40 0 C 25 22, 55 42, 40 62 C 25 82, 55 92, 40 100" fill="none" stroke="url(#waveGradR)" strokeWidth="1.5" />
            <path className="wave-path wave-path--3" d="M60 0 C 45 18, 75 38, 60 58 C 45 78, 75 88, 60 100" fill="none" stroke="url(#waveGradR)" strokeWidth="1" />
          </g>
        </svg>
      </div>
    </>
  )
}
