import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import WhatsAppButton from '../components/WhatsAppButton'
import { BRAND } from '../data/site'

const VALUES = [
  {
    title: 'Education first',
    body: 'We help you understand your skin and body, so the choices you make each day work for you — not against you.',
  },
  {
    title: 'Personalised guidance',
    body: 'Every face is different and every case is special. We guide you towards the skincare regime and wellness programme that suits you.',
  },
  {
    title: 'Inside and out',
    body: 'True well-being is holistic: how you feel within, how your skin looks, and how confidently you move through your golden years.',
  },
]

const STORY_IMAGES = [
  {
    src: '/images/skin-portrait.webp',
    alt: 'A woman with healthy, dewy skin in soft light',
    caption: 'Healthy, dewy-looking skin',
  },
  {
    src: '/images/skincare-routine-mirror.webp',
    alt: 'A woman applying skincare in front of a mirror at home',
    caption: 'A routine you can keep',
  },
  {
    src: '/images/workshop-facial.webp',
    alt: 'A facial treatment being applied during a guided session',
    caption: 'Guided, hands-on care',
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Us — ACT-IN-FAITH · 817 H&B"
        description="Learn about ACT-IN-FAITH (817 H&B), a Singapore health and beauty hub by 8IF Pte Ltd, and our philosophy of becoming a better version of yourself every day."
      />
      <PageHero
        eyebrow="About Us"
        title="A health and beauty hub for ageing well — and ageing gracefully"
        lead="ACT-IN-FAITH, also known as 817 H&B (Health & Beauty), provides a one-stop consultancy for people who want to look and feel their best, today and into their golden years."
      />

      <section className="container-site py-16 sm:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug">
              Living every day as a better version of yourself than yesterday
            </h2>
            <div className="mt-6 space-y-5 text-xl leading-[1.7] text-mocha">
              <p>
                We take care of our clients' health and overall looks through education in
                lifestyle choices — helping each person move towards the best version of
                themselves in both physical abilities and external appearance, improving day
                by day as they enter their golden years.
              </p>
              <p>
                Our philosophy is simple: live every day by being a better version of yourself
                than you were yesterday. Small, consistent choices in how you care for your
                body and skin add up to confidence that lasts.
              </p>
              <p>
                For us, internal well-being means health at the cellular level — nourishing the
                body with the nutrients it needs each day. External well-being means looking
                your best, with healthy, dewy-looking skin and a shape you feel comfortable in.
                Together, they make up the confident you.
              </p>
            </div>
          </div>

          <div className="card p-8 sm:p-10">
            <img src="/images/logo.png" alt="ACT-IN-FAITH logo" className="w-44" />
            <dl className="mt-8 space-y-4 text-lg">
              <div>
                <dt className="text-base font-semibold uppercase tracking-[0.14em] text-mocha">Brand</dt>
                <dd className="mt-1 font-medium">
                  {BRAND.name} — also known as {BRAND.aka} ({BRAND.akaLong})
                </dd>
              </div>
              <div>
                <dt className="text-base font-semibold uppercase tracking-[0.14em] text-mocha">
                  Registered entity
                </dt>
                <dd className="mt-1 font-medium">{BRAND.company}</dd>
              </div>
              <div>
                <dt className="text-base font-semibold uppercase tracking-[0.14em] text-mocha">UEN</dt>
                <dd className="mt-1 font-medium">{BRAND.uen}</dd>
              </div>
              <div>
                <dt className="text-base font-semibold uppercase tracking-[0.14em] text-mocha">Visits</dt>
                <dd className="mt-1 font-medium">Strictly by appointment only</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {STORY_IMAGES.map((img) => (
            <figure key={img.src} className="card overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="px-5 py-3 text-base font-medium text-mocha">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-sand/60 py-16 sm:py-20">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Guidance, not guesswork
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="card p-8">
                <div className="mb-4 h-1 w-10 rounded-full bg-gold" aria-hidden="true" />
                <h3 className="font-serif text-2xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-lg leading-[1.65] text-mocha">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <div className="card mx-auto flex max-w-3xl flex-col items-center gap-5 p-10 text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Start your journey with us</h2>
          <p className="max-w-xl text-xl leading-[1.7] text-mocha">
            Tell us what you would like to improve — your skin, your weight, your daily energy —
            and we will help you explore the right next step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book an Enquiry
            </Link>
            <WhatsAppButton message="Hello 817 H&B, I would like to arrange a consultation." />
          </div>
        </div>
      </section>
    </>
  )
}
