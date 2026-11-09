import { Box, Card, CardActionArea, Grid, Typography } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import { about, contact, mapsLink, photos } from '../../configurations/site'
import { CountUp, Img, Section } from '../Shared'
import { fonts } from '../../Theme/theme'

export default function About() {
  return (
    <Section id="about">
      <Grid container spacing={{ xs: 6, md: 12 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Box className="reveal-img" sx={{ position: 'relative', pr: '12%', pb: '12%', maxWidth: { xs: 520, md: 'none' } }}>
            <Img id={photos.aboutA} w={900} h={1100} alt="Two students studying a book together" sx={{ aspectRatio: '0.82', borderRadius: 1.5 }} />
            <Img
              id={photos.aboutB}
              w={600}
              h={600}
              alt="Student carrying textbooks"
              sx={{ position: 'absolute', right: 0, bottom: 0, width: '46%', aspectRatio: '1', borderRadius: 1.5, border: '8px solid', borderColor: 'background.default' }}
            />
            <Box sx={{ position: 'absolute', left: { xs: 0, md: -18 }, bottom: '14%', display: 'flex', alignItems: 'center', gap: 1.5, maxWidth: 250, px: 2.25, py: 1.75, borderRadius: 1.5, bgcolor: 'primary.main', color: '#fff' }}>
              <Typography sx={{ fontFamily: fonts.display, fontWeight: 600, fontSize: { xs: 34, md: 44 }, lineHeight: 1, color: 'secondary.main' }}>
                <CountUp to={4} />
              </Typography>
              <Typography variant="body2" sx={{ color: 'brand.onNavy2', lineHeight: 1.35 }}>pathways from 10th to a university degree</Typography>
            </Box>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2" className="reveal" sx={{ mb: 3 }}>About FDSC</Typography>
          <Typography className="reveal" sx={{ fontFamily: fonts.display, fontWeight: 500, fontSize: { xs: 21, md: 25 }, lineHeight: 1.35, mb: 2.25 }}>
            {about.lead}
          </Typography>
          <Typography className="reveal" color="text.secondary" sx={{ mb: 1.75 }}>{about.body[0]}</Typography>
          <Typography className="reveal" color="text.secondary">{about.body[1]}</Typography>

          <Grid container spacing={3.25} sx={{ my: 3.75 }}>
            {[['Our Mission', about.mission], ['Our Vision', about.vision]].map(([t, d], k) => (
              <Grid key={t} size={{ xs: 12, sm: 6 }} className="reveal" sx={{ '--d': `${k * 0.08}s` }}>
                <Box sx={{ pt: 2.25, borderTop: '2px solid', borderColor: 'secondary.main' }}>
                  <Typography variant="overline" sx={{ color: 'secondary.dark' }}>{t}</Typography>
                  <Typography variant="body2" sx={{ mt: 0.5, fontSize: 15.5 }}>{d}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Card className="reveal">
            <CardActionArea href={mapsLink} target="_blank" rel="noreferrer" sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, px: 2.75, py: 2.25 }}>
              <Box>
                <Typography variant="overline" sx={{ color: 'secondary.dark', lineHeight: 1.4 }}>Visit the center</Typography>
                <Typography variant="body2">{contact.addressLines.join(', ')}</Typography>
              </Box>
              <Box sx={{ flex: 'none', display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', bgcolor: 'primary.main', color: 'secondary.light' }}>
                <NorthEastIcon fontSize="small" />
              </Box>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Section>
  )
}
