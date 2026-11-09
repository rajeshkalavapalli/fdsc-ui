// All public-facing content lives here so the admin panel (fdsc-admin-ui) can later
// serve the same shape from the API without touching components.

export const contact = {
  name: 'FDSC – Firdaws Distance Study Center',
  short: 'FDSC',
  phone: '7032836912',
  phoneDisplay: '+91 70328 36912',
  whatsapp: '917032836912',
  email: 'Mailme.fdsc@gmail.com',
  addressLines: ['Kasipeta, Opposite RVM High School', 'Venkatagiri, Tirupati District', 'Andhra Pradesh'],
  // Replace with the exact Google Maps share link once available.
  mapsQuery: 'RVM High School, Kasipeta, Venkatagiri, Andhra Pradesh',
}

export const whatsappLink = (text = 'Hello FDSC, I would like to know about admissions.') =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`

export const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&z=16&output=embed`
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`

export const nav = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact', label: 'Contact' },
]

export const boards = [
  'APOSS',
  'NIOS',
  'Andhra University',
  'Acharya Nagarjuna University',
  'Bharathidasan University',
]

export const hero = {
  kicker: 'Firdaws Distance Study Center · Venkatagiri',
  titleA: 'Your Education.',
  titleB: 'Your Future.',
  titleC: 'Your Way.',
  sub: 'Learn Today. Grow Tomorrow.',
  body:
    'We help students continue their education through Open Schooling, Intermediate and Open Degree programmes. Whether you want to complete your 10th, 12th, Intermediate or pursue a Degree, FDSC is here to guide you throughout your educational journey.',
}

export const about = {
  lead:
    'Firdaws Distance Study Center (FDSC) is an educational support center located at Kasipeta, Opposite RVM High School, Venkatagiri, Tirupati District, Andhra Pradesh.',
  body: [
    'Our aim is to make education accessible and convenient for students who wish to continue their studies through flexible and alternative learning opportunities.',
    "We understand that every student's educational journey is different. Some students may have discontinued their education, while others may be working, managing family responsibilities or preparing for better career opportunities.",
    'FDSC aims to provide proper course guidance, admission assistance and student support to help learners take the next step towards their educational goals.',
  ],
  mission:
    'To make quality educational opportunities accessible to everyone by providing guidance, support and flexible learning pathways.',
  vision: 'To empower students through education and help them build a brighter future with confidence.',
}

export const courses = [
  {
    id: 'open-10th',
    vol: 'I',
    tag: 'Secondary',
    title: 'Open 10th',
    abbr: 'SSC',
    question: 'Did you discontinue your schooling? Want to complete your 10th standard?',
    body: 'Open Schooling provides an alternative pathway for eligible learners to complete their secondary education.',
    points: [
      'Open 10th admission guidance',
      'Flexible learning opportunities',
      'Student admission assistance',
      'Examination and academic guidance',
    ],
  },
  {
    id: 'open-12th',
    vol: 'II',
    tag: 'Higher Secondary',
    title: 'Open 12th',
    abbr: 'HSC',
    question: 'Continue your education and achieve your higher secondary qualification.',
    body: 'We guide students interested in completing their 12th through eligible Open Schooling programmes.',
    points: [
      'Open 12th admission assistance',
      'Course and eligibility guidance',
      'Academic support',
      'Examination guidance',
    ],
  },
  {
    id: 'intermediate',
    vol: 'III',
    tag: 'APOSS · NIOS',
    title: 'Intermediate',
    abbr: 'INTER',
    question: 'Continue your Intermediate education through alternative schooling pathways.',
    body: 'Our team helps students understand available courses, eligibility, admission procedures and examination requirements.',
    listTitle: 'Available board options',
    points: ['Andhra Pradesh Open School Society (APOSS)', 'National Institute of Open Schooling (NIOS)'],
  },
  {
    id: 'open-degree',
    vol: 'IV',
    tag: 'Distance · UG',
    title: 'Open Degree',
    abbr: 'UG',
    question: "Your dream of earning a university degree doesn't have to stop.",
    body: 'Explore eligible Open and Distance Learning degree opportunities through:',
    listTitle: 'Universities',
    points: ['Andhra University', 'Acharya Nagarjuna University', 'Bharathidasan University'],
    note:
      "Available degree programmes and specialisations are subject to the respective university's current admission notification, eligibility criteria and approved offerings.",
  },
]

export const reasons = [
  { title: 'Personalised Course Guidance', body: 'Get guidance to identify suitable educational pathways.' },
  { title: 'Admission Assistance', body: 'Support with application procedures and documentation.' },
  { title: 'Flexible Learning Options', body: 'Explore learning opportunities that suit your circumstances.' },
  { title: 'Student Support', body: 'Assistance throughout the admission and academic process.' },
  { title: 'Multiple Educational Pathways', body: 'Explore Open Schooling, Intermediate and Degree programmes.' },
  { title: 'Career-Oriented Guidance', body: 'Understand how further education can support your career goals.' },
]

export const audience = [
  'Students who discontinued their education.',
  'Students looking to complete 10th or 12th.',
  'Students interested in Open Intermediate.',
  'Working professionals who want to continue studying.',
  'Students looking for eligible Open Degree programmes.',
  'Learners seeking alternative educational pathways.',
]

export const steps = [
  { title: 'Contact Us', body: 'Reach FDSC through phone, WhatsApp or by visiting our center.' },
  { title: 'Choose Your Course', body: 'Our team will explain the available programmes and eligibility requirements.' },
  { title: 'Application & Documentation', body: 'Get assistance with the application and required documents.' },
  {
    title: 'Admission Confirmation',
    body: 'Complete the prescribed admission process and fee payment through the authorised procedure.',
  },
]

export const faqs = [
  {
    q: 'Can I complete my 10th through Open Schooling?',
    a: 'Eligible students can explore Open Schooling options through APOSS or NIOS, depending on the programme available.',
  },
  {
    q: 'Can working professionals pursue an Open Degree?',
    a: 'Yes. Eligible learners can explore recognised Open and Distance Learning programmes offered by universities.',
  },
  {
    q: 'Does FDSC provide admission assistance?',
    a: 'Yes. FDSC provides course guidance and assistance with admission procedures.',
  },
  {
    q: 'Which universities are available through FDSC?',
    a: 'Students can enquire about available programmes associated with Andhra University, Acharya Nagarjuna University and Bharathidasan University.',
  },
  {
    q: 'Can I visit your center for course details?',
    a: 'Yes. Visit our center at Kasipeta, Opposite RVM High School, Venkatagiri.',
  },
]

// "Find your path" — maps a learner's current situation to the programme to enquire about.
// Final eligibility is always decided by the respective board / university.
export const pathfinder = [
  { id: 'left-school', label: 'I discontinued school before 10th', course: 'open-10th', why: 'Open Schooling offers an alternative pathway for eligible learners to complete secondary education.' },
  { id: '10th-done', label: 'I passed 10th', course: 'intermediate', why: 'Continue with Intermediate through APOSS or NIOS, or complete your Open 12th.' },
  { id: 'inter-left', label: 'I discontinued Intermediate / 12th', course: 'open-12th', why: 'Complete your higher secondary qualification through eligible Open Schooling programmes.' },
  { id: 'inter-done', label: 'I passed Intermediate / 12th', course: 'open-degree', why: 'Explore Open & Distance Learning degree opportunities through recognised universities.' },
  { id: 'working', label: "I'm working and want to study", course: 'open-degree', why: 'Open & Distance Learning lets eligible working professionals study around their job.' },
]

// Free-licence photos (Unsplash License: free for commercial use, no attribution required).
// Swap any id for FDSC's own photos later — or replace `photo()` with local /public paths.
export const photos = {
  hero: '1495995424756-6a5a3f9e7543', // graduate holding cap
  heroSlides: ['1495995424756-6a5a3f9e7543', '1790339613413-4908b5e9faff', '1758270704787-615782711641'],
  heroSide: '1571260899304-425eee4c7efc', // student carrying textbooks
  aboutA: '1637589316488-6d4c41b335cd', // two students reading together
  aboutB: '1571260899304-425eee4c7efc', // student carrying textbooks
  band: '1719408937898-e15b8638e1d8', // graduates group
  who: '1604177091072-b7b677a077f6', // student with laptop
  'open-10th': '1522661067900-ab829854a57f',
  'open-12th': '1656266724105-302774929dfd',
  intermediate: '1758270705067-0d7edee57af0',
  'open-degree': '1790339613413-4908b5e9faff',
}

export const photo = (id, w = 1200, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=72`

// Legal wording shown on the site. Keep in sync with the Privacy Notice page.
export const legal = {
  disclaimer:
    'FDSC is an independent educational guidance centre. Admissions are processed by the respective boards and universities. Board and university names are used only to describe the programmes we guide students towards.',
  consent:
    'I agree that FDSC may store these details and contact me by phone, WhatsApp or email about my enquiry, as described in the Privacy Notice.',
  privacyUpdated: '9 November 2026',
}
