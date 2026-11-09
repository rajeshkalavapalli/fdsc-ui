import { useEffect } from 'react'
import Lenis from 'lenis'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* Gentle inertial scrolling. Exposes the instance for anchor jumps. */
export function useSmoothScroll() {
  useEffect(() => {
    if (reduced()) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.12 })
    window.__lenis = lenis
    return () => {
      lenis.destroy()
      window.__lenis = null
    }
  }, [])
}

