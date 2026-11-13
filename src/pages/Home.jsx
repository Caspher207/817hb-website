import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import WhatsAppButton, { WhatsAppIcon } from '../components/WhatsAppButton'
import { RESET_PROGRAMMES, WORKSHOPS, whatsappLink } from '../data/site'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sand via-cream to-gold-soft/40" />
      <div
        className="absolute -right-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-gold-soft/50 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site grid items-center gap-14 pb-28 pt-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="eyebrow">ACT-IN-FAITH · 817 H&B · Singapore</p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.08] sm:text-6xl">
            A better version of you,{' '}
            <span className="italic text-gold-deep">every day.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-[1.7] text-mocha">
            We are a health and beauty hub that cares for your internal wellness and external
            appearance — through education in everyday lifestyle choices — so you can age well,
            and age gracefully.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-gold">
              Book an Enquiry
            </Link>
            <Link to="/services" className="btn-outline">
              Explore Services
            </Link>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-3">
            <a
              href={whatsappLink('Hello 817 H&B, I would like to find out more about your wellness programmes.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-medium text-pine underline-offset-4 hover:text-pine-deep hover:underline"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Us
            </a>
            <Link
              to="/events"
              className="text-lg font-medium text-espresso underline-offset-4 hover:text-gold-deep hover:underline"
            >
              Discover Workshops →
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-[12rem] rounded-b-3xl shadow-[0_24px_60px_-20px_rgba(42,36,30,0.35)] ring-1 ring-gold/30">
            <img
              src="/images/hero-facial-treatment.webp"
              alt="A client receiving a relaxing facial treatment"
              className="aspect-[4/5] w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="card absolute -bottom-7 left-1/2 w-[85%] -translate-x-1/2 px-6 py-5 sm:left-auto sm:right-0 sm:w-72 sm:translate-x-0">
            <p className="font-serif text-xl font-semibold">DIY Facial Workshops</p>
            <p className="mt-1 text-base leading-relaxed text-mocha">
              Every Monday, Wednesday &amp; Friday — learn the routine for a dewy, K-glass look.
            </p>
            <Link
              to="/events"
              className="mt-2 inline-block text-base font-semibold text-gold-deep underline-offset-4 hover:underline"
            >
              See the schedule →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section className="container-site py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Our Philosophy</p>
        <h2 className="mt-4 font-serif text-3xl font-semibold leading-snug sm:text-4xl">
          Feeling and looking great is a gift that everyone deserves.
        </h2>
        <p className="mt-5 text-xl leading-[1.7] text-mocha">
          We believe wellness is built day by day. Start early in life, make thoughtful lifestyle
          choices, and enjoy your golden years with ease and confidence — becoming a better
          version of yourself than you were yesterday.
        </p>
      </div>
    </section>
  )
}

function InsideOut() {
  return (
    <section className="bg-sand/60 py-16 sm:py-20">
      <div className="container-site">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="eyebrow">Inside &amp; Out</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Two sides of the same confidence
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card overflow-hidden">
            <img
              src="/images/serum-dropper.webp"
              alt="A serum dropper releasing a golden drop of oil onto a hand"
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <div className="p-8 sm:p-9">
              <p className="eyebrow">Internal Wellness</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">
                Health begins with your cells
              </h3>
              <p className="mt-4 text-lg leading-[1.7] text-mocha">
                Internal well-being starts with the choices we make each day — bringing vitamins,
                minerals and micro-nutrients to the cells that need them. We choose products built
                on technology designed to deliver nutrients where they matter, complemented by
                equipment that supports healthy circulation and cellular metabolism.
              </p>
            </div>
          </div>
          <div className="card overflow-hidden">
            <img
              src="/images/skin-portrait.webp"
              alt="A woman with healthy, dewy skin and closed eyes in soft light"
              className="aspect-[16/9] w-full object-cover"
              loading="lazy"
            />
            <div className="p-8 sm:p-9">
              <p className="eyebrow">External Beauty</p>
              <h3 className="mt-3 font-serif text-2xl font-semibold">
                Care for the skin you live in
              </h3>
              <p className="mt-4 text-lg leading-[1.7] text-mocha">
                Daily life leaves build-ups on our skin — dead cells, pollution particles, product
                and hormonal residue — which can dull its appearance and clog pores. We use
                botanically based, professional-grade Korean skincare to cleanse, hydrate and
                protect, with guidance tailored to your face.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesOverview() {
  return (
    <section className="container-site py-16 sm:py-20">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-xl">
          <p className="eyebrow">What We Offer</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Our signature Reset programmes
          </h2>
        </div>
        <Link to="/services" className="btn-outline">
          View all services
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {RESET_PROGRAMMES.map((p) => (
          <div key={p.name} className="card p-8 transition hover:-translate-y-1 hover:shadow-lg">
            <p className="font-serif text-2xl font-semibold">{p.name}</p>
            <p className="mt-3 text-lg leading-[1.65] text-mocha">{p.summary}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function WorkshopsTeaser() {
  return (
    <section className="bg-pine py-16 text-cream sm:py-20">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow !text-gold-soft">Workshops &amp; Consultations</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
            Learn skincare hands-on — then let us guide you personally
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-[1.7] text-cream/90">
            Our DIY Facial Workshops teach you a practical home routine aimed at a dewy, K-glass
            look — and our one-to-one consultations provide personalised guidance for your skin
            and wellness goals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/events" className="btn-gold">
              Discover Workshops
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/50 px-8 py-3.5 text-lg font-medium tracking-wide text-cream transition hover:bg-cream hover:text-espresso"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
        <ul className="space-y-4">
          {WORKSHOPS.map((w) => (
            <li
              key={w.day}
              className="flex items-center justify-between gap-4 rounded-2xl bg-pine-deep/70 px-6 py-5 ring-1 ring-cream/15"
            >
              <div>
                <p className="font-serif text-xl font-semibold">
                  {w.day}s · {w.time}
                </p>
                <p className="mt-0.5 text-base text-cream/90">
                  {w.venue.name}, {w.venue.address}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-gold/25 px-3 py-1 text-sm font-bold uppercase tracking-widest text-gold-soft">
                Weekly
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <SEO
        title="ACT-IN-FAITH · 817 H&B — Health & Beauty, Singapore"
        description="A Singapore health and beauty hub offering wellness consultations, DIY facial workshops and personalised skincare guidance to help you age well and gracefully."
      />
      <Hero />
      <Philosophy />
      <InsideOut />
      <ServicesOverview />
      <WorkshopsTeaser />
    </>
  )
}
