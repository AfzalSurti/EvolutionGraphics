export const nav = [
  { label: 'Our Story', href: '/#story' },
  { label: 'Our Chai', href: '/#chai' },
  { label: 'Why Luzel', href: '/#why' },
  { label: 'Contact', href: '/#contact' },
]

export const shopHref = '/#shop'

export const images = {
  hero: {
    src: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=2000&q=80',
    srcSet:
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=75 800w, https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1400&q=78 1400w, https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=2000&q=80 2000w',
    alt: 'A steaming cup of strong Indian chai in warm morning light',
  },
  notTea: {
    src: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=1800&q=80',
    alt: 'Kadak chai in glasses, dark and aromatic',
  },
  question: {
    src: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=1400&q=80',
    alt: 'Loose Assam tea leaves, ready to be tasted and graded',
  },
  answer: {
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1400&q=80',
    alt: 'Freshly poured chai catching warm light',
  },
  problem: {
    src: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&w=1400&q=80',
    alt: 'A cup of milky Indian chai on a quiet table',
  },
  decision: {
    src: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=1400&q=80',
    alt: 'Hands preparing chai — the everyday Indian ritual',
  },
  blend: {
    src: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=2000&q=80',
    alt: 'Close-up of freshly brewed chai with a clean, rich colour',
  },
  classic: {
    src: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80',
    alt: 'Placeholder for Luzel Classic pack photography — strong kadak chai in a cup',
  },
  premium: {
    src: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Placeholder for Luzel Premium pack photography — a quieter, more luxurious cup',
  },
  morning: {
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1800&q=80',
    alt: 'Early morning light, a quiet cup of chai before the day begins',
  },
  garden: {
    src: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1800&q=80',
    alt: 'Tea gardens in morning mist — premium Assam gardens',
  },
  leaves: {
    src: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=1400&q=80',
    alt: 'Macro of dark CTC tea leaves',
  },
  originIndia: {
    src: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80',
    alt: 'Warm light on Indian architecture — Luzel’s start in Rajasthan and Gujarat',
  },
  close: {
    src: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=1800&q=80',
    alt: 'Warm chai photography with steam rising from the cup',
  },
}

export const chapters = [
  {
    id: '01',
    title: 'The Question',
    kicker: 'Chapter 01',
    text: 'Which product does every Indian use every day and still has room for a better brand?',
    image: images.question,
  },
  {
    id: '02',
    title: 'The Answer',
    kicker: 'Chapter 02',
    text: 'Chai. Not generic tea. Real kadak chai — the kind that fills a home before anyone has spoken.',
    image: images.answer,
  },
  {
    id: '03',
    title: 'The Problem',
    kicker: 'Chapter 03',
    text: 'There was a gap in the market. The big brands all tasted the same. Strength without character. Aroma that disappeared. A cup you drink because you have to, not because you want to.',
    image: images.problem,
  },
  {
    id: '04',
    title: 'The Decision',
    kicker: 'Chapter 04',
    text: 'I decided to fill it — with something I could be proud of. If the perfect chai doesn’t exist in the market, I’ll make it.',
    image: images.decision,
  },
]

export const timeline = [
  {
    n: '01',
    title: 'Search',
    body: 'Months with tea traders, tasters and vendors who know Assam CTC grades — not from a brochure, from the leaf.',
  },
  {
    n: '02',
    title: 'Experiment',
    body: 'Batch after batch. Different gardens. Different grades. Different cuts. Nothing assumed. Everything tasted.',
  },
  {
    n: '03',
    title: 'Taste',
    body: 'The only brief that mattered: strength, aroma, colour, a clean finish, and real Assam character.',
  },
  {
    n: '04',
    title: 'Refine',
    body: 'Rejecting anything that wasn’t right. Close was not enough. Almost was not the blend.',
  },
  {
    n: '05',
    title: 'The Blend',
    body: 'The moment everything clicked. That blend became Luzel Classic. Later came Luzel Premium — a more luxurious chai experience.',
  },
]

export const products = [
  {
    id: 'classic',
    name: 'Luzel Classic',
    line: 'Strong. Aromatic. Kadak.',
    position: 'For everyday strong, aromatic, kadak chai.',
    traits: ['Everyday strength', 'Assam character', 'Clean finish'],
    cta: 'Shop Classic',
    image: images.classic,
  },
  {
    id: 'premium',
    name: 'Luzel Premium',
    line: 'A small luxury in every cup.',
    position: 'For moments when chai becomes a small luxury.',
    traits: ['Richer aroma', 'A quieter luxury', 'Still kadak'],
    cta: 'Shop Premium',
    image: images.premium,
  },
]

export const standards = [
  {
    n: '01',
    title: 'Genuinely Good',
    body: 'Not merely drinkable. A cup you look forward to — not one you finish out of habit.',
  },
  {
    n: '02',
    title: 'Aroma That Stays',
    body: 'A real lingering chai experience. Open the pack. The room should know.',
  },
  {
    n: '03',
    title: 'Pure',
    body: 'No chemicals. No preservatives. Nothing you wouldn’t put in chai for your own family.',
  },
]

export const promises = [
  {
    title: 'Pure',
    body: 'No chemicals. No preservatives.',
  },
  {
    title: 'Consistent',
    body: 'Every pack should taste like the last.',
  },
  {
    title: 'Kadak & Aromatic',
    body: 'Open the pack and the aroma should hit immediately.',
  },
  {
    title: 'Honest',
    body: 'Premium Assam gardens. Nothing hidden.',
  },
]
