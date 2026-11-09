import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Marks every `.reveal` / `.reveal-img` element with a `data-revealed` attribute as it scrolls
// into view (CSS then fades it in). An attribute is used instead of a class on purpose: MUI
// components rebuild their class list when their state changes (e.g. an Accordion opening),
// which would wipe an added class and hide the element again. React never touches this attribute.
export default function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not([data-revealed]), .reveal-img:not([data-revealed])')
    const show = (el) => el.setAttribute('data-revealed', '')
    if (!('IntersectionObserver' in window)) {
      els.forEach(show)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            show(e.target)
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
