import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Container, Divider, Grid, Link, Stack, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { contact, courses, nav, whatsappLink } from '../configurations/site'
import LegalNote from './LegalNote'

// Admin panel address (fdsc-admin-ui). Set VITE_ADMIN_URL per environment, e.g. https://admin.fdsc.in
const ADMIN_URL = (import.meta.env.VITE_ADMIN_URL || 'http://localhost:5190').replace(/\/$/, '')

function Col({ title, children }) {
  return (
    <Box>
      <Typography variant="overline" sx={{ display: 'block', mb: 2, color: 'secondary.main' }}>{title}</Typography>
      <Stack spacing={1.25} sx={{ color: 'brand.onNavy2', fontSize: 15, '& a:hover': { color: '#fff' } }}>{children}</Stack>
    </Box>
  )
}

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'brand.navyDeep', color: 'brand.onNavy', pt: 10, pb: { xs: 12, sm: 3.5 } }}>
      <Container>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box component="img" src="/fdsc-logo.png" alt="FDSC logo" sx={{ width: 70, height: 70, borderRadius: '50%', mb: 2.25 }} />
            <Typography variant="body2" sx={{ color: 'brand.onNavy2', maxWidth: 340 }}>
              Firdaws Distance Study Center. Guidance and admission support for Open Schooling, Intermediate and Open Degree programmes.
            </Typography>
            <Button
              href={`${ADMIN_URL}/login`}
              size="small"
              variant="outlined"
              startIcon={<LockOutlinedIcon />}
              sx={{ mt: 3, color: 'brand.onNavy2', borderColor: 'rgba(248,246,241,.25)', '&:hover': { color: '#fff', borderColor: 'secondary.main', bgcolor: 'transparent' } }}
            >
              Staff login
            </Button>
          </Grid>
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Col title="Explore">
              {nav.map((n) => <Link key={n.to} component={RouterLink} to={n.to} color="inherit" underline="none">{n.label}</Link>)}
            </Col>
          </Grid>
          <Grid size={{ xs: 6, md: 2.5 }}>
            <Col title="Courses">
              {courses.map((c) => <Link key={c.id} component={RouterLink} to={`/courses#${c.id}`} color="inherit" underline="none">{c.title}</Link>)}
            </Col>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <Col title="Visit / Reach">
              <span>{contact.addressLines.join(', ')}</span>
              <Link href={`tel:${contact.phone}`} color="inherit" underline="none">{contact.phoneDisplay}</Link>
              <Link href={whatsappLink()} target="_blank" rel="noreferrer" color="inherit" underline="none">WhatsApp us</Link>
              <Link href={`mailto:${contact.email}`} color="inherit" underline="none">{contact.email}</Link>
            </Col>
          </Grid>
        </Grid>
        <LegalNote light sx={{ mt: 6 }} />
        <Divider sx={{ my: 4, borderColor: 'rgba(248,246,241,.14)' }} />
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', alignItems: { md: 'center' }, fontSize: 13, color: 'brand.onNavy2' }}>
          <span>© {new Date().getFullYear()} FDSC – Firdaws Distance Study Center. All rights reserved.</span>
          <span>Admissions are subject to the respective board or university eligibility requirements.</span>
          <Link component={RouterLink} to="/privacy" color="inherit" underline="hover">Privacy Notice</Link>
        </Stack>
      </Container>
    </Box>
  )
}
