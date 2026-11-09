import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Card, Grid, Link, List, ListItemButton, Radio, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { courses, pathfinder, photos } from '../../configurations/site'
import { Head, Img, Section } from '../Shared'
import { fonts } from '../../Theme/theme'

export default function Pathfinder() {
  const [pick, setPick] = useState(pathfinder[0].id)
  const sel = pathfinder.find((p) => p.id === pick)
  const course = courses.find((c) => c.id === sel.course)

  return (
    <Section id="find-your-path">
      <Head title="Not sure which course is right for you?" text="Tell us where you stand today and we will show you which programme to ask about." />
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5.25 }} className="reveal">
          <List role="radiogroup" aria-label="Your current situation" disablePadding sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            {pathfinder.map((p, k) => (
              <ListItemButton
                key={p.id}
                role="radio"
                aria-checked={pick === p.id}
                selected={pick === p.id}
                onClick={() => setPick(p.id)}
                divider
                sx={{ gap: 1.5, py: 2.5, px: 0.75, '&.Mui-selected, &.Mui-selected:hover': { bgcolor: 'transparent' }, '&:hover': { bgcolor: 'transparent', pl: 1.75 }, transition: 'padding .35s' }}
              >
                <Typography sx={{ fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, color: 'secondary.dark', minWidth: 30 }}>0{k + 1}</Typography>
                <Typography sx={{ flex: 1, fontFamily: fonts.display, fontWeight: 600, fontSize: { xs: 19, md: 23 }, lineHeight: 1.25, color: pick === p.id ? 'primary.main' : 'text.secondary' }}>
                  {p.label}
                </Typography>
                <Radio checked={pick === p.id} tabIndex={-1} size="small" color="secondary" sx={{ p: 0 }} />
              </ListItemButton>
            ))}
          </List>
        </Grid>

        <Grid size={{ xs: 12, md: 6.75 }} className="reveal" sx={{ '--d': '.08s' }}>
          <Card key={pick} sx={{ height: '100%', display: 'grid', gridTemplateRows: { xs: '150px 1fr', md: '170px 1fr' }, bgcolor: 'primary.main', color: '#fff', border: 0, animation: 'ex-in .5s cubic-bezier(.2,.8,.2,1)' }}>
            <Img id={photos[course.id]} w={900} h={400} sx={{ height: 'calc(100% - 16px)', width: 'calc(100% - 32px)', mx: 2, mt: 2, borderRadius: 1 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', p: { xs: 3, md: 4.5 } }}>
              <Typography variant="overline" sx={{ color: 'secondary.main' }}>Suggested programme</Typography>
              <Typography variant="h3" sx={{ my: 1.25 }}>{course.title}</Typography>
              <Typography sx={{ color: 'brand.onNavy2', mb: 3, maxWidth: 460 }}>{sel.why}</Typography>
              <Box sx={{ mt: 'auto', display: 'flex', gap: 2.5, alignItems: 'center', flexWrap: 'wrap' }}>
                <Button component={RouterLink} to={`/contact?course=${course.id}`} variant="contained" color="secondary" endIcon={<ArrowForwardIcon />}>
                  Enquire for {course.title}
                </Button>
                <Link component={RouterLink} to={`/courses#${course.id}`} color="inherit" sx={{ fontWeight: 600 }}>View details</Link>
              </Box>
              <Typography variant="caption" sx={{ mt: 2.25, color: 'brand.onNavy2', opacity: 0.8 }}>
                Admission is subject to the respective board or university eligibility requirements.
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Section>
  )
}
