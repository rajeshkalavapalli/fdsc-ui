import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Card, Chip, Grid, Link, List, ListItem, ListItemIcon, ListItemText, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { courses, photos } from '../../configurations/site'
import { Head, Img, Section } from '../Shared'
import { fonts } from '../../Theme/theme'
import LegalNote from '../LegalNote'

export const Diamond = () => <Box sx={{ width: 8, height: 8, mt: 1, transform: 'rotate(45deg)', bgcolor: 'secondary.main' }} />

/* Interactive programme explorer: pick a programme, the photo and details switch. */
export default function Explorer() {
  const [i, setI] = useState(0)
  const vertical = useMediaQuery((t) => t.breakpoints.up('lg'))
  const c = courses[i]

  return (
    <Section id="courses" tone="paper">
      <Head title="Explore Your Educational Opportunities" text="Open Schooling, Intermediate and Open Degree programmes, with guidance at every step." />
      <Grid container spacing={2.75} className="reveal">
        <Grid size={{ xs: 12, lg: 3.75 }}>
          <Tabs
            value={i}
            onChange={(_, v) => setI(v)}
            orientation={vertical ? 'vertical' : 'horizontal'}
            variant="scrollable"
            scrollButtons={false}
            aria-label="Programmes"
            slotProps={{ indicator: { sx: { display: 'none' } } }}
            sx={{ '& .MuiTabs-flexContainer': { gap: 1.25 } }}
          >
            {courses.map((x, k) => (
              <Tab
                key={x.id}
                disableRipple
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.75, width: '100%', textAlign: 'left' }}>
                    <Typography component="span" sx={{ fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, fontSize: 28, color: k === i ? 'secondary.main' : 'secondary.dark', minWidth: 40 }}>
                      0{k + 1}
                    </Typography>
                    <Box component="span">
                      <Typography component="span" sx={{ display: 'block', fontFamily: fonts.display, fontWeight: 600, fontSize: { xs: 19, md: 22 }, lineHeight: 1.15 }}>{x.title}</Typography>
                      <Typography component="span" sx={{ display: 'block', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', opacity: 0.7 }}>{x.tag}</Typography>
                    </Box>
                  </Box>
                }
                sx={{
                  alignItems: 'stretch',
                  maxWidth: 'none',
                  minWidth: { xs: 170, lg: 0 },
                  px: 2.5,
                  py: 2.25,
                  borderRadius: 2,
                  bgcolor: k === i ? 'primary.main' : 'background.paper',
                  color: k === i ? '#fff !important' : 'text.primary',
                  border: '1px solid',
                  borderColor: k === i ? 'primary.main' : 'divider',
                  borderLeft: vertical ? '4px solid' : undefined,
                  borderLeftColor: vertical ? (k === i ? 'secondary.main' : 'divider') : undefined,
                  transition: 'background-color .35s, color .35s',
                }}
              />
            ))}
          </Tabs>
        </Grid>

        <Grid size={{ xs: 12, lg: 8.25 }}>
          <Card key={c.id} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.78fr 1.22fr' }, alignItems: 'start', height: '100%', animation: 'ex-in .6s cubic-bezier(.2,.8,.2,1)' }}>
            <Box sx={{ position: 'relative', m: { xs: 1.5, md: 2.25 }, mr: { md: 0 }, aspectRatio: { xs: '16 / 9', md: '4 / 5' }, borderRadius: 1, overflow: 'hidden' }}>
              <Img id={photos[c.id]} w={1100} h={760} sx={{ position: 'absolute', inset: 0, height: '100%', animation: 'ex-zoom 1.4s cubic-bezier(.2,.8,.2,1)' }} />
              <Chip label={c.abbr} size="small" sx={{ position: 'absolute', left: 12, bottom: 12, bgcolor: 'primary.main', color: 'secondary.light', letterSpacing: '.14em', fontWeight: 600, borderRadius: 1 }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { xs: 3, md: 4.5 } }}>
              <Typography variant="h3" sx={{ mb: 1.75 }}>{c.title}</Typography>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>{c.question}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{c.body}</Typography>
              {c.listTitle && <Typography variant="overline" sx={{ color: 'secondary.dark' }}>{c.listTitle}</Typography>}
              <List dense disablePadding sx={{ mb: 2 }}>
                {c.points.map((p) => (
                  <ListItem key={p} disableGutters sx={{ alignItems: 'flex-start', py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 22 }}><Diamond /></ListItemIcon>
                    <ListItemText primary={p} slotProps={{ primary: { sx: { fontSize: 15.5 } } }} />
                  </ListItem>
                ))}
              </List>
              {c.note && <Typography variant="body2" sx={{ mb: 2, p: 1.5, borderRadius: 1, bgcolor: 'background.default', color: 'text.disabled', fontSize: 13 }}>{c.note}</Typography>}
              <Box sx={{ mt: 'auto', display: 'flex', alignItems: 'center', gap: 2.5, flexWrap: 'wrap', pt: 1 }}>
                <Button component={RouterLink} to={`/contact?course=${c.id}`} variant="contained" endIcon={<ArrowForwardIcon />}>Enquire about {c.title}</Button>
                <Link component={RouterLink} to={`/courses#${c.id}`} color="inherit" sx={{ fontWeight: 600 }}>Full details</Link>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <LegalNote sx={{ mt: 3 }} />
    </Section>
  )
}
