import { useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { faqs, whatsappLink } from '../../configurations/site'
import { Section } from '../Shared'
import { fonts } from '../../Theme/theme'

export default function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <Section id="faq" tone="paper">
      <Grid container spacing={{ xs: 5, md: 12 }}>
        <Grid size={{ xs: 12, md: 4.75 }}>
          <Typography variant="h2" className="reveal" sx={{ mb: 2 }}>Frequently Asked Questions</Typography>
          <Typography className="reveal" color="text.secondary" sx={{ mb: 3.25, maxWidth: 380 }}>
            Can&apos;t find what you&apos;re looking for? Send us a message and our team will guide you.
          </Typography>
          <Button className="reveal" variant="contained" startIcon={<WhatsAppIcon />} href={whatsappLink('Hello FDSC, I have a question about admissions.')} target="_blank" rel="noreferrer">
            Ask on WhatsApp
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 7.25 }}>
          <Box sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            {faqs.map((f, i) => (
              <Accordion key={f.q} expanded={open === i} onChange={() => setOpen(open === i ? -1 : i)} className="reveal" sx={{ '--d': `${i * 0.04}s` }}>
                <AccordionSummary
                  expandIcon={
                    <Box sx={{ display: 'grid', placeItems: 'center', width: 40, height: 40, borderRadius: '50%', border: '1px solid', borderColor: open === i ? 'primary.main' : 'divider', bgcolor: open === i ? 'primary.main' : 'transparent', color: open === i ? 'secondary.light' : 'text.primary', transition: 'all .3s' }}>
                      <AddIcon fontSize="small" />
                    </Box>
                  }
                  sx={{ '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': { transform: 'rotate(45deg)' } }}
                >
                  <Typography sx={{ fontFamily: fonts.display, fontStyle: 'italic', fontWeight: 600, color: 'secondary.dark', minWidth: { xs: 34, sm: 46 } }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography sx={{ fontFamily: fonts.display, fontWeight: 600, fontSize: { xs: 18, md: 23 }, lineHeight: 1.25, pr: 2 }}>{f.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pl: { xs: 4.25, sm: 5.75 }, pr: 6 }}>
                  <Typography color="text.secondary">{f.a}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}
