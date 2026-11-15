export const BRAND = {
  name: 'ACT-IN-FAITH',
  aka: '817 H&B',
  akaLong: '817 Health & Beauty',
  company: '8IF Pte Ltd',
  uen: '201911538H',
  tagline: 'Health & Beauty Hub',
}

export const CONTACT = {
  phoneDisplay: '+65 9858 7188',
  whatsapp: 'https://wa.me/6598587188',
  email: '8if.info@gmail.com',
  hours: 'Strictly by appointment only',
}

export function whatsappLink(message) {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`
}

export const VENUES = {
  adelphi: {
    name: 'The Adelphi',
    address: '1 Coleman Street, #B1-777, Singapore 179803',
  },
  beautyHorizon: {
    name: 'Beauty Horizon',
    address: 'International Plaza, 10 Anson Road, Singapore 077903',
  },
}

export const WORKSHOPS = [
  {
    day: 'Monday',
    time: '7:00 PM',
    venue: VENUES.adelphi,
  },
  {
    day: 'Wednesday',
    time: '7:00 PM',
    venue: VENUES.adelphi,
  },
  {
    day: 'Friday',
    time: '2:00 PM',
    venue: VENUES.beautyHorizon,
  },
]

export const RESET_PROGRAMMES = [
  {
    name: 'Reset Weight',
    summary:
      'A weight management programme built around guided, sustainable lifestyle choices and daily habits.',
    detail:
      'Reset Weight is our weight management programme, centred on sustainable lifestyle choices rather than quick fixes. Speak with us to understand the approach and whether it suits your goals.',
  },
  {
    name: 'Reset Youth',
    summary:
      'A skincare programme built around the Diamond Peel Program — designed to refresh and refine the skin.',
    detail:
      'Reset Youth centres on our Diamond Peel skincare programme — designed to re-set your skin\u2019s routine and unveil a smoother, more radiant-looking complexion.',
  },
  {
    name: 'Reset Age',
    summary:
      'A wellness concept focused on supporting vitality and physical well-being as you enter your senior years.',
    detail:
      'Reset Age is our age-related wellness programme, centred on supporting the body\u2019s cellular vitality and physical abilities as you move into your senior years — so you can keep doing the things you love.',
  },
]

export const OFFERINGS = [
  {
    name: 'DIY Facial Workshops',
    summary:
      'Hands-on educational workshops where you learn a practical home skincare routine aimed at a dewy, \u201CK-glass\u201D look.',
    detail:
      'Learn how to care for your skin at home with guided, step-by-step routines using professional-grade, botanically based Korean skincare. Held weekly at The Adelphi and Beauty Horizon.',
    link: '/events',
    linkLabel: 'See workshop schedule',
  },
  {
    name: 'K-Skin Glass Trial Facials',
    summary: 'Trial facial sessions held at The Adelphi outlet for those new to the programme.',
    detail:
      'Experience the K-Skin Glass facial approach at The Adelphi. Introductory pricing for new customers may be available — please enquire for current availability and terms.',
    link: '/contact',
    linkLabel: 'Enquire about a trial',
  },
]

// Identifiable before/after photographs supplied by the client.
// Source mapping:
//   results-facial-1,3,4,5,6,7  <-  Before&After.jpeg, Before&After2..6.jpeg
//   (slot 2 removed: that full-face before/after now appears only in the
//   Before & After Facial Comparison section as the supplied eye-region crop)
//   results-facial-8     <-  Before&After8.png (supersedes Before&After7.jpeg;
//                            caption strip cropped, square-padded on a blurred
//                            self-backdrop so both profiles fit the card)
// Crops removed text overlays and slide surrounds only; before/after order
// and skin appearance are unchanged. Shown in local preview only until
// publication consent is confirmed (see scripts/gallery.mjs).
export const RESULTS_IMAGES = [
  {
    src: '/images/results-facial-1.webp',
    alt: 'Before and after facial photographs supplied by the client',
    caption: 'Before & after — client-supplied photographs',
  },
  {
    src: '/images/results-facial-3.webp',
    alt: 'Three-panel client-supplied photographs showing skin appearance over time',
    caption: 'Three-stage series — client-supplied photographs',
  },
  {
    src: '/images/results-facial-4.webp',
    alt: 'Before and after facial photographs supplied by the client',
    caption: 'Before & after — client-supplied photographs',
  },
  {
    src: '/images/results-facial-5.webp',
    alt: 'Before and after close-up photographs of the cheek area, supplied by the client',
    caption: 'Before & after — cheek area',
  },
  {
    src: '/images/results-facial-6.webp',
    alt: 'Before and after profile photographs supplied by the client',
    caption: 'Before & after — profile view',
  },
  {
    src: '/images/results-facial-7.webp',
    alt: 'Before and after close-up photographs of the eye area, supplied by the client',
    caption: 'Before & after — eye area',
  },
  {
    src: '/images/results-facial-8.webp',
    alt: 'Before and after profile photographs supplied by the client',
    caption: 'Before & after — profile view',
  },
]

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Wellness Services' },
  { to: '/events', label: 'Events & Workshops' },
  { to: '/contact', label: 'Contact' },
]

// Featured before/after comparison supplied by the client (Ezekiel)
// (source: Before&After1-cut.jpeg — an eye-region crop of Before&After1.jpeg,
// the same before/after shown full-face in results-facial-2, removed from the
// gallery grid to avoid duplication), paired
// with the client's written explanation. The client's unverified interpretation
// of the cause (see project-root review notes) is deliberately not published.
export const FACIAL_COMPARISON = {
  src: '/images/comparison-eyelids.webp',
  alt: "Before and after close-up comparison of a man's eye and mid-face area, supplied by the client",
  caption: 'Before and after facial appearance comparison.',
  intro:
    'There are distinct structural and textural differences between the left (before) and right (after) photographs. The most notable changes occur around the lower eyelids, mid-face volume, and overall skin hydration. A direct comparison of the key facial regions reveals the following differences:',
  categories: [
    {
      title: 'Lower Eyelids & Tear Troughs',
      before: 'Prominent fat bulging (bags) with deep shadow lines underneath.',
      after: 'Completely smooth, flat transition from the lower eyelid to the cheek.',
    },
    {
      title: 'Skin Texture & Sheen',
      before: 'Matte finish with visible fine lines and deeper structural shadows.',
      after: 'High sheen, glossy appearance, and a noticeably tighter, highly hydrated surface.',
    },
    {
      title: 'Mid-Face & Cheek Volume',
      before: 'Mild sagging and hollowing in the upper cheek area.',
      after: 'Plumper, firmer appearance with a subtle lift in the mid-face region.',
    },
    {
      title: 'Hyperpigmentation',
      before: 'Visible sunspots and freckles on the cheeks.',
      after: 'The spots remain identical in placement, indicating pigmentation was not removed.',
    },
  ],
  disclaimer:
    'These descriptions reflect visible differences in the supplied photographs only. The treatment performed and the cause of the changes have not been independently verified. Appearance may be affected by lighting, positioning and other factors. Individual results may vary.',
}
