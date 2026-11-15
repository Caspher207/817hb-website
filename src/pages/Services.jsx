import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import WhatsAppButton from '../components/WhatsAppButton'
import { RESET_PROGRAMMES, OFFERINGS, RESULTS_IMAGES, FACIAL_COMPARISON } from '../data/site'

const SHOW_RESULTS = import.meta.env.VITE_SHOW_RESULTS === 'true'
// Dev-only review flag — renders the unverified original client conclusion
// for client review. Never enabled in production builds.
const REVIEW_MODE = import.meta.env.VITE_REVIEW_MODE === 'true'

function ResetSection() {
  return (
    <section className="container-site py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Signature Programmes</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">The Reset programmes</h2>
        <p className="mt-4 text-xl leading-[1.7] text-mocha">
          Three programmes that address weight, skin and age-related well-being. Speak with us to
          understand which programme — or combination — is right for you.
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {RESET_PROGRAMMES.map((p, i) => (
          <article key={p.name} className="card flex flex-col p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sand font-serif text-lg font-semibold text-gold-deep">
              0{i + 1}
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold">{p.name}</h3>
            <p className="mt-3 flex-1 text-lg leading-[1.65] text-mocha">{p.detail}</p>
            <Link
              to="/contact"
              className="mt-6 text-lg font-semibold text-gold-deep underline-offset-4 hover:underline"
            >
              Enquire about {p.name} →
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function OfferingsSection() {
  return (
    <section className="bg-sand/60 py-16 sm:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Skincare &amp; Workshops</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Facials and hands-on learning
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {OFFERINGS.map((o) => (
            <article key={o.name} className="card flex flex-col p-8">
              <h3 className="font-serif text-2xl font-semibold">{o.name}</h3>
              <p className="mt-3 text-lg font-medium text-gold-deep">{o.summary}</p>
              <p className="mt-3 flex-1 text-lg leading-[1.65] text-mocha">{o.detail}</p>
              <Link
                to={o.link}
                className="mt-6 text-lg font-semibold text-gold-deep underline-offset-4 hover:underline"
              >
                {o.linkLabel} →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-8 rounded-3xl bg-espresso p-8 text-cream sm:p-12 lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src="/images/diamond-peel-program.webp"
            alt="Miracle Diamond Peel Program logo"
            className="w-full rounded-2xl"
          />
          <div>
            <p className="eyebrow !text-gold-soft">Featured Programme</p>
            <h3 className="mt-3 font-serif text-3xl font-semibold">The Diamond Peel Program</h3>
            <p className="mt-4 text-xl leading-[1.7] text-cream">
              Our well-received Diamond Peel Program is a simple-to-use skincare system designed
              around the much-loved K-glass look — clear, dewy and refined. Every face is
              different, so we provide proper guidance on the most effective regime for you.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <WhatsAppButton
                message="Hello 817 H&B, I would like to know more about the Diamond Peel Program."
                className="btn-gold"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultsSection() {
  return (
    <section className="container-site py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Testimonials</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Results, as supplied</h2>
        <p className="mt-4 text-xl leading-[1.7] text-mocha">
          The photographs below were supplied by the client and are shown without retouching.
          Individual results vary depending on skin condition, routine and consistency.
        </p>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {RESULTS_IMAGES.map((img) => (
          <figure key={img.src} className="card overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-base font-medium text-mocha">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-mocha">
        Photographs are shared for general illustration only and do not constitute medical or
        treatment claims. Publication consent is being confirmed with the client; this section is
        shown in preview only.
      </p>
    </section>
  )
}

function ComparisonSection() {
  const c = FACIAL_COMPARISON
  return (
    <section className="bg-sand/60 py-16 sm:py-20">
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">Visual Comparison</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
            Before &amp; After Facial Comparison
          </h2>
          <p className="mt-4 text-xl leading-[1.7] text-mocha">{c.intro}</p>
        </div>

        <figure className="card mt-10 overflow-hidden">
          <div className="relative">
            <img src={c.src} alt={c.alt} className="w-full object-cover" />
            <span className="absolute left-3 top-3 rounded-full bg-cream/95 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-espresso shadow-sm">
              Before
            </span>
            <span className="absolute right-3 top-3 rounded-full bg-cream/95 px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-espresso shadow-sm">
              After
            </span>
          </div>
          <figcaption className="px-5 py-3 text-base font-medium text-mocha">
            {c.caption}
          </figcaption>
        </figure>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {c.categories.map((cat) => (
            <article key={cat.title} className="card p-6 sm:p-7">
              <h3 className="font-serif text-xl font-semibold sm:text-2xl">{cat.title}</h3>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="text-sm font-bold uppercase tracking-widest text-gold-deep">
                    Before
                  </dt>
                  <dd className="mt-1 text-lg leading-[1.6] text-mocha">{cat.before}</dd>
                </div>
                <div>
                  <dt className="text-sm font-bold uppercase tracking-widest text-pine">
                    After
                  </dt>
                  <dd className="mt-1 text-lg leading-[1.6] text-mocha">{cat.after}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>

        {REVIEW_MODE && (
          <aside className="card mt-8 max-w-3xl p-6 sm:p-8">
            <h3 className="font-serif text-xl font-semibold sm:text-2xl">
              Facial Comparison Summary
            </h3>
            <p className="mt-3 text-lg leading-[1.7] text-mocha">{c.reviewConclusion}</p>
          </aside>
        )}

        <p className="mt-8 max-w-3xl text-lg leading-[1.7] text-mocha">{c.disclaimer}</p>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <SEO
        title="Wellness Services — Reset Weight, Reset Youth, Reset Age | 817 H&B"
        description="Explore 817 H&B wellness programmes — Reset Weight, Reset Youth and Reset Age — plus DIY facial workshops and K-Skin Glass trial facials in Singapore."
      />
      <PageHero
        eyebrow="Wellness Services"
        title="Programmes designed around you"
        lead="From weight management to skincare to age-related well-being, our programmes combine education, quality products and personalised guidance."
      />
      <ResetSection />
      <OfferingsSection />
      {SHOW_RESULTS && <ResultsSection />}
      {SHOW_RESULTS && <ComparisonSection />}

      <section className="container-site pb-4">
        <div className="card mx-auto flex max-w-3xl flex-col items-center gap-5 p-10 text-center">
          <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Not sure where to start?</h2>
          <p className="max-w-xl text-xl leading-[1.7] text-mocha">
            Book a consultation and we will recommend a sensible starting point for your goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Book an Enquiry
            </Link>
            <WhatsAppButton message="Hello 817 H&B, I would like some guidance on which programme suits me." />
          </div>
        </div>
      </section>
    </>
  )
}
