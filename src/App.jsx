import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { MobileBar, WhatsAppFab } from './components/Shared'
import useReveal from './hooks/useReveal'
import { useSmoothScroll } from './components/Fx'
import { AboutPage, AdmissionsPage, ContactPage, CoursesPage, Home, NotFound } from './Pages'
import Privacy from './Pages/Privacy'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const lenis = window.__lenis
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        return void setTimeout(() => {
          if (lenis) lenis.scrollTo(el, { offset: -90 })
          else el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 80)
      }
    }
    if (lenis) lenis.scrollTo(0, { immediate: true })
    window.scrollTo(0, 0)
  }, [pathname, hash])
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
