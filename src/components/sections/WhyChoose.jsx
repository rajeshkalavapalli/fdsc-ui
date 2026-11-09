import { Box, Grid, Typography } from '@mui/material'
import { reasons } from '../../configurations/site'
import { Head, Section } from '../Shared'
import { fonts } from '../../Theme/theme'

export default function WhyChoose() {
  return (
    <Section tone="paper">
      <Head title="Your Success Is Our Priority" text="At FDSC, we believe every student deserves an opportunity to succeed. What makes us different?" />
      <Grid component="ol" container columnSpacing={{ xs: 4, md: 7 }} sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {reasons.map((r, i) => (
          <Grid component="li" key={r.title} size={{ xs: 12, sm: 6, md: 4 }} className="reveal" sx={{ py: 4.25, borderTop: '1px solid', borderColor: 'divider', '--d': `${(i % 3) * 0.06}s` }}>
            <Typography sx={{ fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, fontSize: 56, lineHeight: 1, color: 'secondary.main', mb: 3.25 }}>
              {String(i + 1).padStart(2, '0')}
            </Typography>
            <Typography variant="h4" sx={{ mb: 1.25 }}>{r.title}</Typography>
            <Box sx={{ maxWidth: 340 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: 15.5 }}>{r.body}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  )
}
