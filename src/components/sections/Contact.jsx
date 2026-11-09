import { Box, Card, Grid, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import MailOutlineIcon from '@mui/icons-material/MailOutlined'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { contact, mapsEmbed, mapsLink, whatsappLink } from '../../configurations/site'
import EnquiryForm from '../EnquiryForm'
import { Section } from '../Shared'

export default function Contact() {
  const rows = [
    { href: `tel:${contact.phone}`, icon: <PhoneOutlinedIcon />, label: 'Call us', value: contact.phoneDisplay },
    { href: whatsappLink(), icon: <WhatsAppIcon />, label: 'WhatsApp', value: contact.phoneDisplay, ext: true },
    { href: `mailto:${contact.email}`, icon: <MailOutlineIcon />, label: 'Email', value: contact.email },
    { href: mapsLink, icon: <PlaceOutlinedIcon />, label: 'Visit the center', value: contact.addressLines.join(', '), ext: true },
  ]
  return (
    <Section id="contact">
      <Card className="reveal" sx={{ overflow: 'hidden' }}>
        <Grid container>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', flexDirection: 'column', p: { xs: 3.5, md: 6.5 }, bgcolor: 'primary.main', color: '#fff' }}>
            <Typography variant="h2" sx={{ mb: 1.75 }}>Let&apos;s Build Your Future Together!</Typography>
            <Typography sx={{ color: 'brand.onNavy2', mb: 3.25 }}>
              Have questions about Open 10th, Open 12th, Intermediate or Open Degree programmes? Our team is ready to guide you.
            </Typography>
            <List disablePadding sx={{ borderTop: '1px solid rgba(248,246,241,.14)', mb: 2.75 }}>
              {rows.map((r) => (
                <ListItemButton
                  key={r.label}
                  component="a"
                  href={r.href}
                  {...(r.ext ? { target: '_blank', rel: 'noreferrer' } : {})}
                  sx={{ px: 0, py: 1.75, borderBottom: '1px solid rgba(248,246,241,.14)', transition: 'padding .35s', '&:hover': { bgcolor: 'transparent', pl: 1 } }}
                >
                  <ListItemIcon sx={{ minWidth: 56 }}>
                    <Box sx={{ display: 'grid', placeItems: 'center', width: 42, height: 42, borderRadius: '50%', bgcolor: 'rgba(201,160,78,.14)', color: 'secondary.light', '& svg': { fontSize: 20 } }}>{r.icon}</Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={r.label}
                    secondary={r.value}
                    slotProps={{
                      primary: { sx: { fontSize: 11, fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'brand.onNavy2' } },
                      secondary: { sx: { color: '#fff', fontSize: 15.5, fontWeight: 500, overflowWrap: 'anywhere' } },
                    }}
                  />
                  <NorthEastIcon sx={{ fontSize: 18, color: 'secondary.main' }} />
                </ListItemButton>
              ))}
            </List>
            <Box sx={{ position: 'relative', mt: 'auto', height: 210, borderRadius: 1, overflow: 'hidden' }}>
              <Box component="iframe" title="FDSC location map" src={mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, filter: 'grayscale(.7) contrast(.95)' }} />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ p: { xs: 3.5, md: 6.5 } }}>
            <EnquiryForm />
          </Grid>
        </Grid>
      </Card>
    </Section>
  )
}
