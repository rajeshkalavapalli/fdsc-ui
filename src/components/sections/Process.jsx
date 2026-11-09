import { Link as RouterLink } from 'react-router-dom'
import { Box, Button, Step, StepLabel, Stepper, Typography, useMediaQuery } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { steps } from '../../configurations/site'
import { Head, Section } from '../Shared'
import { fonts } from '../../Theme/theme'

function StepIcon({ icon }) {
  return (
    <Box
      sx={{
        display: 'grid',
        placeItems: 'center',
        width: 66,
        height: 66,
        borderRadius: '50%',
        bgcolor: 'primary.main',
        boxShadow: (t) => `inset 0 0 0 1.5px ${t.palette.secondary.main}`,
        color: 'secondary.light',
        fontFamily: fonts.display,
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize: 28,
        transition: 'background-color .35s, color .35s',
        '.MuiStep-root:hover &': { bgcolor: 'secondary.main', color: 'primary.main' },
      }}
    >
      {icon}
    </Box>
  )
}

export default function Process() {
  const wide = useMediaQuery((t) => t.breakpoints.up('md'))
  return (
    <Section id="admissions" tone="navy">
      <Head title="Start Your Educational Journey in 4 Simple Steps" light />
      <Stepper
        className="reveal"
        orientation={wide ? 'horizontal' : 'vertical'}
        connector={null}
        nonLinear
        activeStep={-1}
        sx={{
          position: 'relative',
          alignItems: 'flex-start',
          gap: wide ? 0 : 4.5,
          // one continuous gold line behind the circles (desktop) / down the left side (phone)
          '&::before': wide
            ? { content: '""', position: 'absolute', top: 33, left: 33, right: '25%', height: '1px', background: (t) => `linear-gradient(90deg, ${t.palette.secondary.main}, rgba(201,160,78,.35))` }
            : { content: '""', position: 'absolute', top: 33, bottom: 33, left: 32.5, width: '1px', bgcolor: 'rgba(201,160,78,.45)' },
        }}
      >
        {steps.map((s) => (
          <Step key={s.title} completed={false} sx={{ flex: wide ? 1 : 'none', p: 0, position: 'relative', zIndex: 1 }}>
            <StepLabel
              slots={{ stepIcon: StepIcon }}
              sx={{
                flexDirection: wide ? 'column' : 'row',
                alignItems: wide ? 'flex-start' : 'flex-start',
                textAlign: 'left',
                p: 0,
                '& .MuiStepLabel-iconContainer': { pr: wide ? 0 : 2.5 },
                '& .MuiStepLabel-labelContainer': { mt: wide ? 3.5 : 1 },
                '& .MuiStepLabel-label, & .MuiStepLabel-label.Mui-active': { textAlign: 'left', color: '#fff' },
              }}
            >
              <Typography variant="h4" sx={{ color: '#fff', mb: 1.25 }}>{s.title}</Typography>
              <Typography variant="body2" sx={{ color: 'brand.onNavy2', fontSize: 15.5, maxWidth: 260, pr: 2 }}>{s.body}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box className="reveal" sx={{ mt: 7.5 }}>
        <Button component={RouterLink} to="/contact" variant="contained" color="secondary" endIcon={<ArrowForwardIcon />}>Start with step one</Button>
      </Box>
    </Section>
  )
}
