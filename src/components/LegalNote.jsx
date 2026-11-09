import { Stack, Typography } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { legal } from '../configurations/site'

/* "Independent guidance centre" disclaimer, shown wherever boards and universities are named. */
export default function LegalNote({ light = false, sx }) {
  return (
    <Stack direction="row" spacing={1.25} sx={{ alignItems: 'flex-start', p: 2, borderRadius: 1.5, border: '1px solid', borderColor: light ? 'rgba(248,246,241,.18)' : 'divider', bgcolor: light ? 'rgba(255,255,255,.04)' : 'background.paper', ...sx }}>
      <InfoOutlinedIcon sx={{ fontSize: 18, mt: '2px', color: light ? 'secondary.light' : 'secondary.dark', flex: 'none' }} />
      <Typography variant="body2" sx={{ color: light ? 'brand.onNavy2' : 'text.secondary', fontSize: 13.5, lineHeight: 1.55 }}>{legal.disclaimer}</Typography>
    </Stack>
  )
}
