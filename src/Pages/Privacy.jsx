import { Box, Container, Divider, Link, Typography } from '@mui/material'
import { contact, legal } from '../configurations/site'
import { PageHero } from '../components/Shared'
import usePageMeta from '../hooks/usePageMeta'

/* Privacy Notice for the enquiry form (written for India's Digital Personal Data Protection Act, 2023).
   Plain-language template: have it reviewed by a legal adviser before relying on it. */
const sections = [
  {
    title: 'Who we are',
    body: [
      `${contact.name} ("FDSC", "we") is an independent educational guidance centre at ${contact.addressLines.join(', ')}. We are responsible for the personal data you share with us through this website.`,
    ],
  },
  {
    title: 'What we collect',
    body: [
      'When you send an enquiry we collect: your name, mobile number, email address (optional), the course you are interested in, your last qualification (optional) and your message (optional).',
      'For security and to stop misuse, our servers also record the network (IP) address and time of each request. We do not use advertising cookies or tracking pixels.',
    ],
  },
  {
    title: 'Why we use it',
    body: [
      'Only to respond to your enquiry: to call, WhatsApp or email you with course, eligibility and admission guidance, and to keep a record of what we discussed. We use your data only after you give consent on the enquiry form.',
    ],
  },
  {
    title: 'Who can see it',
    body: [
      'Only authorised FDSC staff, through a password-protected admin panel. We do not sell or rent your personal data.',
      'If you decide to apply for a programme, the details needed for your application are shared with the relevant board or university as part of the admission process, with your knowledge.',
      'Our website and database run on hosting providers who store the data on our behalf and may not use it for their own purposes.',
    ],
  },
  {
    title: 'How long we keep it',
    body: [
      'We keep enquiry details for up to 24 months after our last contact with you, so we can help with follow-up questions and future admission cycles. After that, or sooner if you ask, we delete them.',
    ],
  },
  {
    title: 'Your rights',
    body: [
      'You can ask us to: tell you what data we hold about you, correct it, delete it, or stop contacting you. You can withdraw your consent at any time; this does not affect anything we did before you withdrew it.',
      'To make a request or raise a complaint, contact us using the details below. If you are not satisfied with our response, you may approach the Data Protection Board of India.',
    ],
  },
  {
    title: 'How we protect it',
    body: [
      'The admin panel uses encrypted passwords, automatic sign-out and limits on repeated sign-in attempts, and every staff action is logged. The public website can only add new enquiries; it cannot read stored ones.',
    ],
  },
  {
    title: 'Children',
    body: [
      'If you are under 18, please send your enquiry together with a parent or guardian, who should agree to this notice on your behalf.',
    ],
  },
]

export default function Privacy() {
  usePageMeta('Privacy Notice', 'How FDSC collects, uses and protects the details you share through the enquiry form.')
  return (
    <>
      <PageHero crumb="Privacy Notice" title="Privacy Notice" text={`How we handle the details you share with us. Last updated ${legal.privacyUpdated}.`} />
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container sx={{ maxWidth: '820px !important' }}>
          {sections.map((s, i) => (
            <Box key={s.title} sx={{ mb: 5 }}>
              <Typography variant="h4" sx={{ mb: 1.5 }}>{i + 1}. {s.title}</Typography>
              {s.body.map((p) => (
                <Typography key={p.slice(0, 30)} color="text.secondary" sx={{ mb: 1.5 }}>{p}</Typography>
              ))}
            </Box>
          ))}
          <Divider sx={{ my: 5 }} />
          <Typography variant="h4" sx={{ mb: 1.5 }}>Contact for privacy requests</Typography>
          <Typography color="text.secondary">
            {contact.name}
            <br />
            {contact.addressLines.join(', ')}
            <br />
            Email: <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
            <br />
            Phone / WhatsApp: <Link href={`tel:${contact.phone}`}>{contact.phoneDisplay}</Link>
          </Typography>
        </Container>
      </Box>
    </>
  )
}
