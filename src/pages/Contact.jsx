import { useState } from 'react'
import SEO from '../components/SEO'
import PageHero from '../components/PageHero'
import { CONTACT, whatsappLink } from '../data/site'
import { WhatsAppIcon } from '../components/WhatsAppButton'

const INTERESTS = [
  'Reset Weight',
  'Reset Youth — Diamond Peel Program',
  'Reset Age',
  'DIY Facial Workshop',
  'K-Skin Glass Trial Facial',
  'General enquiry',
]

const labelCls = 'mb-2 block text-lg font-semibold uppercase tracking-[0.1em] text-espresso'
const errorCls = 'mt-1.5 text-base font-medium text-red-800'

function EnquiryForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    consent: false,
    website: '', // honeypot
  })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(e) {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = 'Please enter a valid email address.'
    if (form.phone.trim() && !/^[+0-9 ()-]{7,20}$/.test(form.phone.trim()))
      e.phone = 'Please enter a valid contact number.'
    if (!form.interest) e.interest = 'Please select an area of interest.'
    if (!form.message.trim()) e.message = 'Please tell us a little about your enquiry.'
    if (!form.consent) e.consent = 'Please acknowledge so we can respond to your enquiry.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function composedMessage() {
    return [
      'Hello 817 H&B, I would like to make an enquiry.',
      '',
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.phone.trim() ? `Contact: ${form.phone.trim()}` : null,
      `Interested in: ${form.interest}`,
      '',
      form.message.trim(),
    ]
      .filter(Boolean)
      .join('\n')
  }

  function onSubmit(e) {
    e.preventDefault()
    // honeypot — read the live DOM value so programmatic fills are caught too
    if (e.currentTarget.elements.website.value) return
    if (!validate()) return
    setSent(true)
    window.open(whatsappLink(composedMessage()), '_blank', 'noopener,noreferrer')
  }

  const mailtoHref = () =>
    `mailto:${CONTACT.email}?subject=${encodeURIComponent(
      `Website enquiry — ${form.interest || 'General'}`,
    )}&body=${encodeURIComponent(composedMessage())}`

  return (
    <form onSubmit={onSubmit} noValidate className="card p-8 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="field"
            value={form.name}
            onChange={update}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className={errorCls}>
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="field"
            value={form.email}
            onChange={update}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className={errorCls}>
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Contact number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="field"
            value={form.phone}
            onChange={update}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className={errorCls}>
              {errors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="interest" className={labelCls}>
            I am interested in *
          </label>
          <select
            id="interest"
            name="interest"
            className="field"
            value={form.interest}
            onChange={update}
            aria-invalid={!!errors.interest}
            aria-describedby={errors.interest ? 'interest-error' : undefined}
          >
            <option value="">Please select…</option>
            {INTERESTS.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
          {errors.interest && (
            <p id="interest-error" className={errorCls}>
              {errors.interest}
            </p>
          )}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="field"
            placeholder="Tell us what you would like to achieve, or ask us a question."
            value={form.message}
            onChange={update}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" className={errorCls}>
              {errors.message}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot — hidden from users */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={update}
        />
      </div>

      <div className="mt-7">
        <label className="flex items-start gap-3 text-lg leading-relaxed text-espresso">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={update}
            className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-[#937c54] accent-gold-deep"
            aria-invalid={!!errors.consent}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
          />
          <span>I consent to 817 H&B using the details above to respond to my enquiry. *</span>
        </label>
        {errors.consent && (
          <p id="consent-error" className={errorCls}>
            {errors.consent}
          </p>
        )}
      </div>

      <div className="mt-8 rounded-2xl bg-sand/70 p-5">
        <p className="text-base font-semibold uppercase tracking-[0.14em] text-espresso">
          How sending works
        </p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-lg leading-relaxed text-mocha">
          <li>Fill in the form and choose WhatsApp or email below.</li>
          <li>WhatsApp (or your mail app) opens with your enquiry already written.</li>
          <li>Press send there to deliver it to us — no details are stored on this website.</li>
        </ol>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn-primary">
          <WhatsAppIcon className="h-5 w-5" />
          Send via WhatsApp
        </button>
        <a href={mailtoHref()} className="btn-outline">
          Send via Email instead
        </a>
      </div>

      {sent && (
        <p className="mt-5 rounded-xl bg-sand px-5 py-4 text-lg text-espresso" role="status">
          WhatsApp should now be open with your message ready — press send there to deliver it.
          If it did not open, reach us directly at {CONTACT.phoneDisplay} or {CONTACT.email}.
        </p>
      )}
    </form>
  )
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Consultations & Contact — 817 H&B | ACT-IN-FAITH"
        description="Book a consultation or send an enquiry to 817 H&B (ACT-IN-FAITH). WhatsApp +65 9858 7188 or email 8if.info@gmail.com. Strictly by appointment only."
      />
      <PageHero
        eyebrow="Consultations & Contact"
        title="Let's talk about your goals"
        lead="Whether it is your skin, your weight or your everyday well-being, a personal consultation is the best place to start. We will listen first — then guide."
      />

      <section className="container-site py-16 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <EnquiryForm />

          <aside className="space-y-6">
            <div className="card p-8">
              <p className="eyebrow">Reach Us Directly</p>
              <ul className="mt-5 space-y-6 text-lg">
                <li>
                  <p className="text-base font-semibold uppercase tracking-[0.14em] text-mocha">
                    WhatsApp
                  </p>
                  <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-espresso hover:text-gold-deep"
                  >
                    <WhatsAppIcon className="h-5 w-5 text-pine" />
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p className="text-base font-semibold uppercase tracking-[0.14em] text-mocha">
                    Email
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 text-lg font-semibold text-espresso hover:text-gold-deep"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li>
                  <p className="text-base font-semibold uppercase tracking-[0.14em] text-mocha">
                    Visits
                  </p>
                  <p className="mt-1 font-medium text-espresso">{CONTACT.hours}</p>
                  <p className="mt-1 text-base text-mocha">
                    Please enquire to arrange a suitable time.
                  </p>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-pine p-8 text-cream shadow-[0_2px_24px_-8px_rgba(42,36,30,0.25)] ring-1 ring-pine-deep">
              <p className="font-serif text-2xl font-semibold">Prefer to chat first?</p>
              <p className="mt-3 text-lg leading-[1.65] text-cream">
                Message us on WhatsApp and we will help you find the right programme, workshop or
                consultation.
              </p>
              <a
                href={whatsappLink('Hello 817 H&B, I would like to make an enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
