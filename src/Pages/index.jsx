import { Link } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Pathfinder from '../components/sections/Pathfinder'
import Courses from '../components/sections/Courses'
import WhyChoose from '../components/sections/WhyChoose'
import WhoCanJoin from '../components/sections/WhoCanJoin'
import Process from '../components/sections/Process'
import Faq from '../components/sections/Faq'
import Contact from '../components/sections/Contact'
import Statement from '../components/sections/Statement'
import Explorer from '../components/sections/Explorer'
import { Band, PageHero } from '../components/Shared'
import { hero, photos } from '../configurations/site'
import usePageMeta from '../hooks/usePageMeta'

export function Home() {
  usePageMeta(null)
  return (
    <>
      <Hero />
      <About />
      <Explorer />
      <Statement />
      <Pathfinder />
      <WhyChoose />
      <WhoCanJoin />
      <Process />
      <Faq />
      <Contact />
    </>
  )
}

export function AboutPage() {
  usePageMeta('About', 'About Firdaws Distance Study Center, Venkatagiri: our mission, vision and how we guide students through open schooling and open degree admissions.')
  return (
    <>
      <PageHero crumb="About" title="About FDSC" text={hero.body} />
      <About />
      <WhyChoose />
      <WhoCanJoin />
      <Band />
    </>
  )
}

export function CoursesPage() {
  usePageMeta('Courses', 'Open 10th, Open 12th, Intermediate (APOSS & NIOS) and Open Degree programmes: eligibility and admission guidance from FDSC, Venkatagiri.')
  return (
    <>
      <PageHero
        crumb="Courses"
        title="Our Courses"
        text="Explore Open Schooling, Intermediate (APOSS & NIOS) and Open Degree programmes. Contact FDSC to explore available courses and admission opportunities."
      />
      <Courses head={false} />
      <Pathfinder />
      <Band />
    </>
  )
}

export function AdmissionsPage() {
  usePageMeta('Admissions', 'How admission works at FDSC: enquiry, course guidance, application and documents, and admission confirmation.')
  return (
    <>
      <PageHero
        crumb="Admissions"
        title="Admission Process"
        text="Reach us by phone, WhatsApp or a visit. We explain the programmes, help with the application and documents, and guide you to admission confirmation."
      />
      <Process />
      <Faq />
      <Band />
    </>
  )
}

export function ContactPage() {
  usePageMeta('Contact', 'Call, WhatsApp or visit FDSC at Kasipeta, opposite RVM High School, Venkatagiri. Send an enquiry online.')
  return (
    <>
      <PageHero crumb="Contact" title="Contact Us" text="Have questions about Open 10th, Open 12th, Intermediate or Open Degree programmes? Our team is ready to guide you." img={photos.aboutA} />
      <Contact />
    </>
  )
}

export function NotFound() {
  usePageMeta('Page not found')
  return (
    <Box component="section" sx={{ minHeight: '100svh', display: 'grid', placeItems: 'center', textAlign: 'center', px: 3, py: 18, bgcolor: 'primary.main', color: '#fff' }}>
      <Box>
        <Typography variant="h1" sx={{ fontSize: 'clamp(7.5rem, 22vw, 16rem)' }}>404</Typography>
        <Typography sx={{ color: 'brand.onNavy2', mt: 1, mb: 4 }}>Sorry, we couldn&apos;t find that page.</Typography>
        <Button component={Link} to="/" variant="contained" color="secondary">Back to home</Button>
      </Box>
    </Box>
  )
}
