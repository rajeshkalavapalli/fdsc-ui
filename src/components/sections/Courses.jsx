import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Card, CardContent, Chip, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import { courses, photos } from '../../configurations/site'
import { Head, Img, Section } from '../Shared'
import { Diamond } from './Explorer'
import { fonts } from '../../Theme/theme'
import LegalNote from '../LegalNote'

export default function Courses({ head = true }) {
  return (
    <Section id="courses" tone="paper">
      {head && <Head title="Explore Your Educational Opportunities" text="Open Schooling, Intermediate and Open Degree programmes, with guidance at every step." />}
      <Grid container spacing={3.25}>
        {courses.map((c, i) => (
          <Grid key={c.id} size={{ xs: 12, md: 6 }}>
            <Card id={c.id} className="reveal" sx={{ height: '100%', display: 'flex', flexDirection: 'column', scrollMarginTop: 100, '--d': `${(i % 2) * 0.08}s` }}>
              <Box className="reveal-img" sx={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden', '&::after': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(11,26,51,.55))' } }}>
                <Img id={photos[c.id]} w={900} h={620} sx={{ height: '100%', transition: 'transform 1.2s', '.MuiCard-root:hover &': { transform: 'scale(1.05)' } }} />
                <Typography sx={{ position: 'absolute', left: 22, bottom: 14, zIndex: 1, fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, fontSize: 54, lineHeight: 1, color: '#fff' }}>
                  0{i + 1}
                </Typography>
                <Chip label={c.tag} size="small" sx={{ position: 'absolute', right: 18, top: 18, zIndex: 1, bgcolor: 'primary.main', color: 'secondary.light', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', fontSize: 11.5, borderRadius: 1 }} />
              </Box>
              <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: { xs: 3, md: 4.5 }, '&:last-child': { pb: { xs: 3, md: 4.5 } } }}>
                <Typography variant="h3" sx={{ mb: 1.75 }}>
                  {c.title}{' '}
                  <Box component="small" sx={{ fontFamily: fonts.body, fontSize: 12, fontWeight: 600, letterSpacing: '.16em', color: 'secondary.dark', verticalAlign: 'middle' }}>{c.abbr}</Box>
                </Typography>
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
                <Button component={RouterLink} to={`/contact?course=${c.id}`} endIcon={<NorthEastIcon />} sx={{ mt: 'auto', alignSelf: 'flex-start', px: 0, color: 'primary.main', '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' } }}>
                  Enquire about {c.title}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <LegalNote sx={{ mt: 4 }} />
    </Section>
  )
}
