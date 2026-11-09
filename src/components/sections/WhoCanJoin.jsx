import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { audience, photos } from '../../configurations/site'
import { Img, Section } from '../Shared'
import { fonts } from '../../Theme/theme'

export default function WhoCanJoin() {
  return (
    <Section id="who">
      <Grid container spacing={{ xs: 6, md: 12 }} sx={{ alignItems: 'center' }}>
        <Grid size={{ xs: 12, md: 5.5 }}>
          <Box className="reveal-img" sx={{ position: 'relative' }}>
            <Img id={photos.who} w={1000} h={1150} alt="A student studying with a laptop" sx={{ aspectRatio: '0.88', borderRadius: 1.5 }} />
            <Box sx={{ position: 'absolute', left: 22, right: 22, bottom: 22, px: 2.75, py: 2.5, borderRadius: 1, bgcolor: 'primary.main', color: '#fff' }}>
              <Typography sx={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 26 }}>It&apos;s never too late</Typography>
              <Typography sx={{ fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, fontSize: 20, color: 'secondary.light' }}>to continue your education.</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 6.5 }}>
          <Typography variant="h2" className="reveal" sx={{ mb: 2 }}>Who Can Join?</Typography>
          <Typography className="reveal" color="text.secondary" sx={{ mb: 2.5 }}>Our educational guidance services may be useful for:</Typography>
          <List disablePadding sx={{ mb: 3 }}>
            {audience.map((a, i) => (
              <ListItem key={a} divider className="reveal" sx={{ px: 0, py: 1.75, transition: 'padding .35s', '&:hover': { pl: 1 }, '--d': `${i * 0.04}s` }}>
                <ListItemIcon sx={{ minWidth: 48 }}>
                  <Box sx={{ display: 'grid', placeItems: 'center', width: 32, height: 32, borderRadius: '50%', bgcolor: 'primary.main', color: 'secondary.light' }}>
                    <CheckIcon sx={{ fontSize: 17 }} />
                  </Box>
                </ListItemIcon>
                <ListItemText primary={a} slotProps={{ primary: { sx: { fontSize: 17, fontWeight: 500 } } }} />
              </ListItem>
            ))}
          </List>
          <Typography variant="body2" className="reveal" sx={{ color: 'text.disabled' }}>
            Admission is subject to the respective board or university eligibility requirements.
          </Typography>
        </Grid>
      </Grid>
    </Section>
  )
}
