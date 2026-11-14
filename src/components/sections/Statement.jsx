import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { photos } from '../../configurations/site'
import { CountUp, Img } from '../Shared'
import { fonts } from '../../Theme/theme'

const stats = [
  { n: 4, a: 'Programmes', b: '10th to Degree' },
  { n: 3, a: 'Universities for', b: 'Open Degree' },
  { n: 2, a: 'Open School boards', b: 'APOSS & NIOS' },
  { n: 1, a: 'One destination for', b: 'Distance education in Venkatagiri' },
]

export default function Statement() {
  return (
    <Box component="section" sx={{ position: 'relative', py: { xs: 12, md: 21 }, color: '#fff', overflow: 'hidden', isolation: 'isolate' }}>
      <Img id={photos.band} w={1800} sx={{ position: 'absolute', inset: 0, height: '100%', zIndex: -2, objectPosition: '50% 35%' }} />
      <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, rgba(11,26,51,.88), rgba(11,26,51,.94))' }} />
      <Container>
        <Typography className="reveal" sx={{ maxWidth: 1040, fontFamily: fonts.display, fontWeight: 500, fontSize: 'clamp(1.75rem, 3.6vw, 3.1rem)', lineHeight: 1.2 }}>
          We understand that every student&apos;s educational journey is different. Some students may have discontinued their
          education, while others may be working or managing family responsibilities.
        </Typography>
        <Divider sx={{ mt: { xs: 6, md: 10 }, mb: 4.25, borderColor: 'rgba(248,246,241,.14)' }} />
        {/* 4 equal columns on desktop (thin gold rule between them), 2 × 2 on tablet, stacked on phones. */}
        <Grid container columnSpacing={0} rowSpacing={{ xs: 4, md: 0 }}>
          {stats.map((s, k) => (
            <Grid
              key={s.a}
              size={{ xs: 12, sm: 6, md: 3 }}
              className="reveal"
              sx={{
                display: 'flex',
                // Number beside the words on every screen; all items share the row height, so the numbers stay level.
                alignItems: 'center',
                gap: { xs: 2, md: 1.5 },
                px: { md: 2.5 },
                pl: { md: k === 0 ? 0 : 2.5 },
                borderLeft: { md: k === 0 ? 'none' : '1px solid rgba(201,160,78,.28)' },
                '--d': `${k * 0.08}s`,
              }}
            >
              <Typography
                sx={{
                  flex: 'none',
                  width: { xs: 64, md: 54 },
                  fontFamily: fonts.display,
                  fontWeight: 600,
                  fontSize: { xs: '3.75rem', md: 'clamp(3.75rem, 5vw, 4.75rem)' },
                  lineHeight: 0.9,
                  fontVariantNumeric: 'lining-nums',
                  color: 'secondary.main',
                }}
              >
                <CountUp to={s.n} />
              </Typography>
              <Box sx={{ minWidth: 0 }}>
                <Typography sx={{ fontSize: 15.5, fontWeight: 600, lineHeight: 1.35, color: '#fff', whiteSpace: { md: 'nowrap' } }}>{s.a}</Typography>
                <Typography sx={{ fontSize: 14.5, lineHeight: 1.4, color: 'brand.onNavy2' }}>{s.b}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
