import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { MobileBar, WhatsAppFab } from './components/Shared'
import useReveal from './hooks/useReveal'
import { useSmoothScroll } from './components/Fx'
import { AboutPage, AdmissionsPage, ContactPage, CoursesPage, Home, NotFound } from './Pages'
import Privacy from './Pages/Privacy'

function ScrollManager() {
  // `key` changes on every navigation, even to the address already open,
  // so clicking "Enquire" again while on /contact#enquiry still scrolls to the form.
  const { pathname, hash, key } = useLocation()
  const lastPath = useRef(null)
  useEffect(() => {
    const lenis = window.__lenis
    const toTop = () => {
      if (lenis) lenis.scrollTo(0, { immediate: true })
      window.scrollTo(0, 0)
    }
    // A new page, or a link without a #section, always starts at the top...
    if (lastPath.current !== pathname || !hash) toTop()
    lastPath.current = pathname
    if (!hash) return undefined
    // ...then glides to the section named in the address (e.g. #enquiry, #open-10th).
    const timer = setTimeout(() => {
      const el = document.getElementById(hash.slice(1))
      if (!el) return
      // Leave room for the sticky header. Elements with their own scroll-margin already do (Lenis applies it).
      const ownMargin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0
      if (lenis) lenis.scrollTo(el, { offset: ownMargin ? 0 : -90 })
      else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
    return () => clearTimeout(timer)
  }, [pathname, hash, key])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  useSmoothScroll()
  useReveal()
  return (
    <>
      <ScrollManager />
      <Header />
      <main key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFab />
      <MobileBar />
    </>
  )
}
