import { useEffect, useRef, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Container, Fab, Paper, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { contact, photo, photos, whatsappLink } from '../configurations/site'

/* Responsive Unsplash image. */
export function Img({ id, w = 1200, h, alt = '', sx, eager = false, className }) {
  return (
    <Box
      component="img"
      className={className}
      src={photo(id, w, h)}
      srcSet={`${photo(id, Math.round(w / 2), h && Math.round(h / 2))} ${Math.round(w / 2)}w, ${photo(id, w, h)} ${w}w`}
      sizes={`(max-width: 900px) 100vw, ${Math.round(w / 2)}px`}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      sx={{ display: 'block', width: '100%', objectFit: 'cover', ...sx }}
    />
  )
}

/* Section heading: title with optional supporting line. */
export function Head({ title, text, center = false, light = false }) {
  return (
    <Box sx={{ maxWidth: 760, mb: { xs: 4.5, md: 7 }, mx: center ? 'auto' : 0, textAlign: center ? 'center' : 'left' }}>
      <Typography variant="h2" className="reveal" sx={{ color: light ? '#fff' : 'text.primary' }}>{title}</Typography>
      {text && (
        <Typography className="reveal" sx={{ mt: 2, maxWidth: 620, mx: center ? 'auto' : 0, color: light ? 'brand.onNavy2' : 'text.secondary', '--d': '.08s' }}>
          {text}
        </Typography>
      )}
    </Box>
  )
}

/* Section wrapper with the site's vertical rhythm. */
export function Section({ children, id, tone = 'default', sx }) {
  const bg = { default: 'background.default', paper: 'brand.paper2', navy: 'primary.main' }[tone]
  return (
    <Box component="section" id={id} sx={{ position: 'relative', py: { xs: 10, md: 16 }, bgcolor: bg, color: tone === 'navy' ? 'brand.onNavy' : 'text.primary', ...sx }}>
      <Container>{children}</Container>
    </Box>
  )
}

export function WhatsAppFab() {
  return (
    <Fab
      variant="extended"
      color="secondary"
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with FDSC on WhatsApp"
      sx={{ position: 'fixed', right: 22, bottom: 22, zIndex: 1250, display: { xs: 'none', sm: 'inline-flex' }, gap: 1, textTransform: 'none', fontWeight: 600 }}
    >
      <WhatsAppIcon /> Chat with us
    </Fab>
  )
}

/* Phone-only action bar: Call · WhatsApp · Enquire. */
export function MobileBar() {
  const item = { flex: 1, color: '#fff', minHeight: 48, fontSize: 14, '& svg': { color: 'secondary.light' } }
  return (
    <Paper
      component="nav"
      aria-label="Quick contact"
      elevation={8}
      sx={{ display: { xs: 'flex', sm: 'none' }, position: 'fixed', left: 10, right: 10, bottom: 10, zIndex: 1250, gap: 0.75, p: 0.75, bgcolor: 'primary.main', borderRadius: 2.5 }}
    >
      <Button href={`tel:${contact.phone}`} startIcon={<PhoneOutlinedIcon />} sx={item}>Call</Button>
      <Button href={whatsappLink()} target="_blank" rel="noreferrer" startIcon={<WhatsAppIcon />} sx={item}>WhatsApp</Button>
      <Button component={RouterLink} to="/contact" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} sx={{ flex: 1.3, minHeight: 48 }}>
        Enquire
      </Button>
    </Paper>
  )
}

/* Number that counts up from 0 the first time it scrolls into view. */
export function CountUp({ to, duration = 1400 }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(to); return }
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to, duration])
  return <span ref={ref}>{n}</span>
}

/* Photo-backed call-to-action band used on inner pages. */
export function Band() {
  return (
    <Box component="section" sx={{ position: 'relative', py: { xs: 11, md: 18 }, color: '#fff', textAlign: 'center', overflow: 'hidden', isolation: 'isolate' }}>
      <Img id={photos.band} w={1800} sx={{ position: 'absolute', inset: 0, height: '100%', zIndex: -2 }} />
      <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, bgcolor: 'rgba(11, 26, 51, 0.88)' }} />
      <Container className="reveal">
        <Typography variant="h2" sx={{ maxWidth: 900, mx: 'auto', mb: 4 }}>Let&apos;s Build Your Future Together!</Typography>
        <Stack direction="row" spacing={1.5} sx={{ justifyContent: 'center', flexWrap: 'wrap', rowGap: 1.5 }}>
          <Button component={RouterLink} to="/contact" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />}>Enquire Now</Button>
          <Button href={`tel:${contact.phone}`} variant="outlined" sx={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)', '&:hover': { borderColor: '#fff' } }}>
            Call {contact.phoneDisplay}
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}

/* Inner-page hero with a faded photo on the right. */
export function PageHero({ crumb, title, text, img = photos.heroSide }) {
  return (
    <Box component="section" sx={{ position: 'relative', pt: { xs: 18, md: 22 }, pb: { xs: 8, md: 11 }, bgcolor: 'primary.main', color: '#fff', overflow: 'hidden', isolation: 'isolate' }}>
      <Img id={img} w={1400} eager sx={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: { xs: '100%', md: '55%' }, height: '100%', zIndex: -2 }} />
      <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: { xs: 'rgba(11,26,51,.82)', md: 'linear-gradient(90deg, #0b1a33 45%, rgba(11,26,51,.55) 75%, rgba(11,26,51,.35))' } }} />
      <Container>
        <Stack direction="row" spacing={1.25} className="reveal" sx={{ fontSize: 14, color: 'brand.onNavy2', '& a:hover': { color: '#fff' } }}>
          <RouterLink to="/">Home</RouterLink><span>/</span><span>{crumb}</span>
        </Stack>
        <Typography variant="h1" className="reveal" sx={{ my: 3, '--d': '.06s' }}>{title}</Typography>
        {text && <Typography className="reveal" sx={{ maxWidth: 600, color: 'brand.onNavy2', fontSize: 18, '--d': '.18s' }}>{text}</Typography>}
      </Container>
    </Box>
  )
}
