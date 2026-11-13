import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import WhatsAppButton from '../components/WhatsAppButton'
import { WORKSHOPS } from '../data/site'

function ScheduleCard({ workshop }) {
  return (
    <article className="card flex flex-col p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-serif text-2xl font-semibold">{workshop.day}s</p>
          <p className="mt-1 text-lg font-semibold tracking-wide text-gold-deep">
            {workshop.time}
          </p>
        </div>
        <span className="rounded-full bg-sand px-3 py-1 text-sm font-bold uppercase tracking-widest text-mocha">
          Weekly
        </span>
      </div>
      <div className="mt-5 border-t border-linen pt-5 text-lg leading-relaxed text-mocha">
        <p className="font-semibold text-espresso">{workshop.venue.name}</p>
        <p>{workshop.venue.address}</p>
      </div>
      <div className="mt-5">
        <WhatsAppButton
          message={`Hello 817 H&B, I would like to attend the DIY Facial Workshop on ${workshop.day} at ${workshop.time}.`}
          className="btn-outline !px-6 !py-3 !text-lg"
        >
          Enquire for {workshop.day}
        </WhatsAppButton>
      </div>
    </article>
  )
}

export default function Events() {
  return (
    <>
      <SEO
        title="Events & Workshops — DIY Facial Workshops | 817 H&B"
        description="Weekly DIY Facial Workshops at The Adelphi and Beauty Horizon, Singapore. Learn a home skincare routine for a dewy, K-glass look."
      />
      <PageHero
        eyebrow="Events & Workshops"
        title="DIY Facial Workshops"
        lead="Hands-on workshops where you learn a practical, step-by-step home skincare routine — aimed at achieving a dewy, K-glass look with professional-grade, botanically based Korean skincare."
      />

      <section className="container-site py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[10rem] rounded-b-3xl shadow-[0_20px_50px_-20px_rgba(42,36,30,0.35)] ring-1 ring-gold/30">
            <img
              src="/images/workshop-facial.webp"
              alt="A facial treatment being applied during a workshop session"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">What to Expect</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              Learn a routine you can keep
            </h2>
            <div className="mt-5 space-y-4 text-xl leading-[1.7] text-mocha">
              <p>
                Our workshops are educational and practical: you will be guided through a home
                skincare programme using professional-grade, botanically based Korean products —
                covering cleansing, hydration and protection.
              </p>
              <p>
                Every face is different. The workshop introduces the approach, and a personal
                consultation can then tailor the regime to your skin.
              </p>
            </div>
            <div className="card mt-8 p-6">
              <p className="eyebrow">Venues</p>
              <ul className="mt-4 space-y-5 text-lg leading-relaxed">
                <li>
                  <p className="font-serif text-xl font-semibold text-espresso">The Adelphi</p>
                  <p className="mt-1 text-mocha">1 Coleman Street, #B1-777, Singapore 179803</p>
                  <p className="mt-1 font-medium text-gold-deep">Monday &amp; Wednesday · 7:00 PM</p>
                </li>
                <li className="border-t border-linen pt-5">
                  <p className="font-serif text-xl font-semibold text-espresso">Beauty Horizon</p>
                  <p className="mt-1 text-mocha">
                    International Plaza, 10 Anson Road, Singapore 077903
                  </p>
                  <p className="mt-1 font-medium text-gold-deep">Friday · 2:00 PM</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand/60 py-16 sm:py-20">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <p className="eyebrow">Weekly Schedule</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
                Three sessions every week
              </h2>
            </div>
            <p className="max-w-sm text-lg leading-relaxed text-mocha">
              Recurring schedule supplied by the client — subject to confirmation and
              availability. Please enquire before attending.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {WORKSHOPS.map((w) => (
              <ScheduleCard key={w.day} workshop={w} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16 sm:py-20">
        <div className="card mx-auto flex max-w-3xl flex-col items-center gap-5 p-10 text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Reserve a spot at a workshop</h2>
          <p className="max-w-xl text-xl leading-[1.7] text-mocha">
            Places are confirmed by appointment. Send us an enquiry with your preferred session and
            we will confirm availability.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WhatsAppButton message="Hello 817 H&B, I would like to register interest in a DIY Facial Workshop." />
          </div>
        </div>
      </section>
    </>
  )
}
