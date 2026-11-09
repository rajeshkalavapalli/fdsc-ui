import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import { photos } from '../../configurations/site'
import { CountUp, Img } from '../Shared'
import { fonts } from '../../Theme/theme'

const stats = [
  { n: 4, a: 'Programmes', b: '10th to Degree' },
  { n: 2, a: 'Open School boards', b: 'APOSS & NIOS' },
  { n: 3, a: 'Universities for', b: 'Open Degree' },
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
        <Grid container spacing={4}>
          {stats.map((s, k) => (
            <Grid key={s.a} size={{ xs: 12, sm: 4 }} className="reveal" sx={{ display: 'flex', alignItems: 'center', gap: 2.25, '--d': `${k * 0.08}s` }}>
              <Typography sx={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 'clamp(4rem, 7vw, 6.25rem)', lineHeight: 0.9, color: 'secondary.main' }}>
                <CountUp to={s.n} />
              </Typography>
              <Typography sx={{ fontSize: 15, lineHeight: 1.4, color: 'brand.onNavy2' }}>{s.a}<br />{s.b}</Typography>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
