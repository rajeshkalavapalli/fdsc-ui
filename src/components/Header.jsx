import { useEffect, useState } from 'react'
import { Link as RouterLink, NavLink, useLocation } from 'react-router-dom'
import { AppBar, Box, Button, Container, Drawer, IconButton, List, ListItemButton, ListItemText, Stack, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import { nav, contact } from '../configurations/site'
import { fonts } from '../Theme/theme'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => setOpen(false), [pathname])

  const solid = scrolled
  const fg = solid ? 'primary.main' : '#fff'

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          color: fg,
          bgcolor: solid ? 'rgba(248, 246, 241, 0.9)' : 'transparent',
          backdropFilter: solid ? 'blur(14px)' : 'none',
          borderBottom: '1px solid',
          borderColor: solid ? 'divider' : 'transparent',
          transition: 'background-color .4s, border-color .4s, color .4s',
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: { xs: 68, md: solid ? 70 : 88 }, gap: 2.5, transition: 'min-height .4s' }}>
            <Box component={RouterLink} to="/" aria-label="FDSC home" sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mr: 'auto' }}>
              <Box component="img" src="/fdsc-logo.png" alt="" sx={{ width: 44, height: 44, borderRadius: '50%', boxShadow: '0 0 0 1px rgba(201,160,78,.5)' }} />
              <Box sx={{ lineHeight: 1.1 }}>
                <Typography sx={{ fontFamily: fonts.display, fontWeight: 600, fontSize: 22, lineHeight: 1.1 }}>FDSC</Typography>
                <Typography sx={{ display: { xs: 'none', sm: 'block' }, fontSize: 10.5, letterSpacing: '.12em', textTransform: 'uppercase', opacity: 0.7 }}>
                  Firdaws Distance Study Center
                </Typography>
              </Box>
            </Box>

            <Stack component="nav" aria-label="Main" direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {nav.map((n) => (
                <Button
                  key={n.to}
                  component={NavLink}
                  to={n.to}
                  end={n.to === '/'}
                  sx={{
                    color: 'inherit',
                    minHeight: 40,
                    px: 1.75,
                    fontWeight: 500,
                    opacity: 0.8,
                    position: 'relative',
                    '&::after': { content: '""', position: 'absolute', left: 14, right: 14, bottom: 4, height: 1.5, bgcolor: 'secondary.main', transform: 'scaleX(0)', transition: 'transform .4s' },
                    '&:hover, &.active': { opacity: 1, bgcolor: 'transparent' },
                    '&:hover::after, &.active::after': { transform: 'scaleX(1)' },
                  }}
                >
                  {n.label}
                </Button>
              ))}
            </Stack>

            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Button
                href={`tel:${contact.phone}`}
                size="small"
                variant="outlined"
                startIcon={<PhoneOutlinedIcon />}
                sx={{ display: { xs: 'none', md: 'inline-flex' }, color: 'inherit', borderColor: 'currentColor', opacity: 0.9 }}
              >
                {contact.phoneDisplay}
              </Button>
              <Button component={RouterLink} to="/contact" size="small" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />} sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
                Enquire Now
              </Button>
              <IconButton
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                sx={{ display: { md: 'none' }, bgcolor: 'secondary.main', color: 'primary.main', '&:hover': { bgcolor: 'secondary.light' } }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { sx: { width: { xs: '100%', sm: 380 }, p: 3, display: 'flex' } } }}>
        <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box component="img" src="/fdsc-logo.png" alt="FDSC" sx={{ width: 44, height: 44, borderRadius: '50%' }} />
          <IconButton aria-label="Close menu" onClick={() => setOpen(false)}><CloseIcon /></IconButton>
        </Stack>
        <List sx={{ flex: 1 }}>
          {nav.map((n, i) => (
            <ListItemButton
              key={n.to}
              component={NavLink}
              to={n.to}
              end={n.to === '/'}
              divider
              sx={{ px: 0, py: 1.25, '&.active .MuiListItemText-primary': { fontStyle: 'italic', color: 'secondary.dark' } }}
            >
              <Typography variant="caption" sx={{ width: 34, color: 'text.disabled' }}>0{i + 1}</Typography>
              <ListItemText primary={n.label} slotProps={{ primary: { sx: { fontFamily: fonts.display, fontWeight: 600, fontSize: 'clamp(1.9rem, 9vw, 2.6rem)', lineHeight: 1.2 } } }} />
            </ListItemButton>
          ))}
        </List>
        <Stack spacing={1.5} sx={{ mt: 3 }}>
          <Button href={`tel:${contact.phone}`} variant="contained" startIcon={<PhoneOutlinedIcon />}>Call {contact.phoneDisplay}</Button>
          <Typography variant="body2" color="text.secondary">{contact.email}</Typography>
        </Stack>
      </Drawer>
    </>
  )
}
