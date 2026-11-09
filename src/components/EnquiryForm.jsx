import { useEffect, useState } from 'react'
import { Link as RouterLink, useSearchParams } from 'react-router-dom'
import { Alert, Box, Button, Checkbox, Chip, FormControlLabel, FormHelperText, Grid, Link, MenuItem, Stack, TextField, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { courses, legal, whatsappLink } from '../configurations/site'
import { submitEnquiry } from '../configurations/api'

const empty = { name: '', phone: '', email: '', course: '', qualification: '', message: '', website: '', consent: false }
const qualifications = ['Below 10th / Discontinued', '10th passed', 'Intermediate / 12th passed', 'Degree discontinued', 'Other']

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[6-9]\d{9}$/.test(v.phone.replace(/\D/g, '').slice(-10))) e.phone = 'Enter a valid 10-digit mobile number.'
  if (v.email && !/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email or leave it empty.'
  if (!v.course) e.course = 'Choose a course you are interested in.'
  if (!v.consent) e.consent = 'Please tick the box so we can contact you about your enquiry.'
  return e
}

export default function EnquiryForm() {
  const [params] = useSearchParams()
  const initialCourse = courses.some((c) => c.id === params.get('course')) ? params.get('course') : ''
  const [v, setV] = useState({ ...empty, course: initialCourse })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | ok | fail
  const [serverMessage, setServerMessage] = useState('')
  const [cooldown, setCooldown] = useState(false) // blocks accidental double submits for a minute

  useEffect(() => {
    if (!cooldown) return undefined
    const t = setTimeout(() => setCooldown(false), 60000)
    return () => clearTimeout(t)
  }, [cooldown])

  const set = (k) => (e) => setV((s) => ({ ...s, [k]: e.target.value }))
  const courseTitle = courses.find((c) => c.id === v.course)?.title || 'a course'
  const waText = `Hello FDSC,\nName: ${v.name}\nPhone: ${v.phone}\nInterested in: ${courseTitle}${v.qualification ? `\nLast qualification: ${v.qualification}` : ''}${v.message ? `\nMessage: ${v.message}` : ''}`

  async function onSubmit(e) {
    e.preventDefault()
    if (cooldown || status === 'sending') return
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) return
    setStatus('sending')
    setServerMessage('')
    try {
      await submitEnquiry({ ...v, phone: v.phone.replace(/\D/g, '').slice(-10) })
      setStatus('ok')
      setV(empty)
      setCooldown(true)
    } catch (err) {
      // 400/429 come with a message meant for the visitor (e.g. "We already have your enquiry").
      setServerMessage(err.status === 400 || err.status === 429 ? err.message : '')
      setStatus('fail')
    }
  }

  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <Typography variant="h3" sx={{ mb: 0.75 }}>Send an enquiry</Typography>
      {/* Spam trap: hidden from people and screen readers; bots fill it and the API ignores them. */}
      <Box aria-hidden="true" sx={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set('website')} />
        </label>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Share your details and our team will call you back with course and eligibility guidance.
      </Typography>

      <Stack direction="row" role="radiogroup" aria-label="Course of interest" sx={{ flexWrap: 'wrap', gap: 1, mb: errors.course ? 0.5 : 2 }}>
        {courses.map((c) => {
          const on = v.course === c.id
          return (
            <Chip
              key={c.id}
              role="radio"
              aria-checked={on}
              label={c.title}
              clickable
              onClick={() => setV((s) => ({ ...s, course: c.id }))}
              variant={on ? 'filled' : 'outlined'}
              color={on ? 'primary' : 'default'}
              sx={{ height: 38, px: 0.5, fontSize: 14, ...(on && { color: 'secondary.light' }) }}
            />
          )
        })}
      </Stack>
      {errors.course && <FormHelperText error sx={{ mb: 2 }}>{errors.course}</FormHelperText>}

      <Grid container spacing={1.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField label="Full name *" value={v.name} onChange={set('name')} autoComplete="name" error={!!errors.name} helperText={errors.name} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField label="Mobile / WhatsApp *" value={v.phone} onChange={set('phone')} autoComplete="tel" error={!!errors.phone} helperText={errors.phone} slotProps={{ htmlInput: { inputMode: 'tel' } }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField label="Email (optional)" value={v.email} onChange={set('email')} autoComplete="email" error={!!errors.email} helperText={errors.email} slotProps={{ htmlInput: { inputMode: 'email' } }} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField select label="Last qualification" value={v.qualification} onChange={set('qualification')}>
            <MenuItem value=""><em>Select</em></MenuItem>
            {qualifications.map((q) => <MenuItem key={q} value={q}>{q}</MenuItem>)}
          </TextField>
        </Grid>
        <Grid size={12}>
          <TextField label="Message" value={v.message} onChange={set('message')} multiline minRows={3} />
        </Grid>
      </Grid>

      <FormControlLabel
        sx={{ mt: 1.5, mr: 0, alignItems: 'flex-start' }}
        control={<Checkbox size="small" checked={v.consent} onChange={(e) => setV((s) => ({ ...s, consent: e.target.checked }))} sx={{ mt: -0.75 }} />}
        label={
          <Typography variant="body2" color="text.secondary" sx={{ fontSize: 13.5 }}>
            {legal.consent.replace('Privacy Notice.', '')}
            <Link component={RouterLink} to="/privacy" target="_blank" rel="noopener">Privacy Notice</Link>.
          </Typography>
        }
      />
      {errors.consent && <FormHelperText error sx={{ ml: 4 }}>{errors.consent}</FormHelperText>}

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2, justifyContent: 'flex-end', alignItems: { xs: 'stretch', sm: 'center' } }}>
        <Button type="submit" variant="contained" endIcon={<ArrowForwardIcon />} loading={status === 'sending'} loadingPosition="end" disabled={cooldown}>
          {status === 'sending' ? 'Sending' : cooldown ? 'Enquiry sent' : 'Submit enquiry'}
        </Button>
      </Stack>

      {status === 'ok' && (
        <Alert severity="success" sx={{ mt: 2.25 }}>Thank you! Your enquiry has been received. Our team will contact you soon.</Alert>
      )}
      {status === 'fail' && (
        <Alert
          severity="warning"
          sx={{ mt: 2.25, alignItems: 'center' }}
          action={
            <Button color="inherit" size="small" startIcon={<WhatsAppIcon />} href={whatsappLink(waText)} target="_blank" rel="noreferrer">
              WhatsApp
            </Button>
          }
        >
          {serverMessage || <>We couldn&apos;t send your enquiry online right now. You can send the same details on WhatsApp instead.</>}
        </Alert>
      )}
    </Box>
  )
}
