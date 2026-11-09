import { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Container, IconButton, Paper, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { boards, hero, photo, photos, whatsappLink } from '../../configurations/site'
import { fonts } from '../../Theme/theme'

/* Slow cross-fading photo slideshow with a gentle zoom on each slide. */
function HeroSlides() {
  const slides = photos.heroSlides
  const [i, setI] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setInterval(() => setI((x) => (x + 1) % slides.length), 6500)
    return () => clearInterval(t)
  }, [slides.length])
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        zIndex: -1,
        overflow: 'hidden',
        top: 0,
        right: 0,
        left: { xs: 0, md: '42%' },
        bottom: { xs: 'auto', md: 0 },
        height: { xs: '60svh', md: 'auto' },
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: {
            xs: 'linear-gradient(180deg, rgba(11,26,51,.45) 0%, rgba(11,26,51,.1) 30%, rgba(11,26,51,.6) 70%, #0b1a33 100%)',
            md: 'linear-gradient(90deg, #0b1a33 0%, rgba(11,26,51,.85) 18%, rgba(11,26,51,.25) 55%, rgba(11,26,51,.1) 100%), linear-gradient(180deg, rgba(11,26,51,.5), transparent 30%, transparent 70%, rgba(11,26,51,.6))',
          },
        },
      }}
    >
      {slides.map((id, k) => (
        <Box
          key={id}
          component="img"
          src={photo(id, 1600)}
          srcSet={`${photo(id, 900)} 900w, ${photo(id, 1600)} 1600w`}
          sizes="(max-width: 900px) 100vw, 60vw"
          alt=""
          loading={k === 0 ? 'eager' : 'lazy'}
          fetchPriority={k === 0 ? 'high' : 'low'}
          decoding="async"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 30%',
            opacity: k === i ? 1 : 0,
            transform: k === i ? 'scale(1)' : 'scale(1.08)',
            transition: 'opacity 1.6s ease, transform 8s linear',
          }}
        />
      ))}
      <Stack spacing={1} sx={{ position: 'absolute', right: { xs: 14, md: 22 }, top: { xs: '50%', md: '50%' }, transform: 'translateY(-50%)', zIndex: 2 }}>
        {slides.map((id, k) => (
          <Box key={id} sx={{ width: 3, height: k === i ? 44 : 26, borderRadius: 3, bgcolor: k === i ? 'secondary.main' : 'rgba(255,255,255,.3)', transition: 'height .5s, background-color .5s' }} />
        ))}
      </Stack>
    </Box>
  )
}

export default function Hero() {
  const loop = [...boards, ...boards, ...boards]
  return (
    <Box component="section" sx={{ position: 'relative', minHeight: '100svh', display: 'flex', flexDirection: 'column', bgcolor: 'primary.main', color: 'brand.onNavy', overflow: 'hidden', isolation: 'isolate' }}>
      <HeroSlides />
      <Container
        sx={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
          alignItems: 'end',
          gap: 5,
          pt: { xs: '42svh', md: '150px' },
          pb: 7.5,
        }}
      >
        <Box sx={{ maxWidth: 640, alignSelf: 'center' }}>
          <Stack direction="row" spacing={1.5} className="reveal" sx={{ alignItems: 'center', color: 'secondary.light', fontSize: 13, fontWeight: 500, letterSpacing: '.1em', textTransform: 'uppercase' }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'secondary.main', boxShadow: '0 0 0 5px rgba(201,160,78,.22)' }} />
            <span>Firdaws Distance Study Center · Venkatagiri</span>
          </Stack>

          <Typography variant="h1" className="hero-title" sx={{ color: '#fff', my: 3.25 }}>
            <span className="ln"><span>{hero.titleA}</span></span>
            <span className="ln"><span>{hero.titleB}</span></span>
            <span className="ln"><Box component="span" sx={{ fontStyle: 'italic', color: 'secondary.main' }}>{hero.titleC}</Box></span>
          </Typography>

          <Box className="reveal" sx={{ maxWidth: 520, mb: 4.25, '--d': '.06s' }}>
            <Typography sx={{ fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, fontSize: { xs: 21, md: 24 }, color: '#fff', mb: 0.75 }}>
              {hero.sub}
            </Typography>
            <Typography sx={{ fontSize: 18, color: 'brand.onNavy2' }}>
              We help students continue their education through Open Schooling, Intermediate and Open Degree programmes.
            </Typography>
          </Box>

          <Stack direction="row" spacing={1.5} className="reveal" sx={{ flexWrap: 'wrap', rowGap: 1.5, '--d': '.12s' }}>
            <Button component={RouterLink} to="/courses" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} sx={{ flex: { xs: 1, sm: 'none' } }}>
              Explore Courses
            </Button>
            <Button component={RouterLink} to="/contact" variant="outlined" sx={{ flex: { xs: 1, sm: 'none' }, color: '#fff', borderColor: 'rgba(255,255,255,.35)', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,.06)' } }}>
              Enquire Now
            </Button>
            <IconButton href={whatsappLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp FDSC" sx={{ width: 50, height: 50, color: 'secondary.light', border: '1px solid rgba(255,255,255,.3)', '&:hover': { bgcolor: 'secondary.main', color: 'primary.main' } }}>
              <WhatsAppIcon />
            </IconButton>
          </Stack>
        </Box>

        <Paper
          className="reveal"
          elevation={0}
          sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 1.75, pr: 3, justifySelf: 'start', bgcolor: 'brand.navy2', color: '#fff', borderRadius: 2, boxShadow: 'inset 0 0 0 1px rgba(201,160,78,.45)', '--d': '.25s' }}
        >
          <Box component="img" src="/fdsc-logo.png" alt="FDSC logo" sx={{ width: { xs: 56, md: 74 }, height: { xs: 56, md: 74 }, borderRadius: '50%' }} />
          <Box>
            <Typography sx={{ fontFamily: fonts.display, fontWeight: 600, fontSize: { xs: 18, md: 22 }, lineHeight: 1.1 }}>Your Future.</Typography>
            <Typography sx={{ fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, fontSize: { xs: 18, md: 22 }, lineHeight: 1.1, color: 'secondary.light' }}>Our Support.</Typography>
          </Box>
        </Paper>
      </Container>

      <Box aria-label="Boards and universities" sx={{ bgcolor: 'secondary.main', color: 'primary.main', overflow: 'hidden', whiteSpace: 'nowrap' }}>
        <Box className="ribbon-track" sx={{ display: 'inline-flex' }}>
          {loop.map((b, i) => (
            <Box key={i} component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 3.25, px: 1.6, py: 2, fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, fontSize: 20 }}>
              {b}<Box component="i" sx={{ fontStyle: 'normal', opacity: 0.6 }}>·</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}
