import { useEffect, useState } from 'react'
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom'
import { BRAND, CONTACT, NAV_LINKS, whatsappLink } from '../data/site'
import { WhatsAppIcon } from './WhatsAppButton'

function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-linen bg-cream/95 backdrop-blur-md">
      <div className="container-site flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="ACT-IN-FAITH logo" className="h-12 w-auto" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-xl font-semibold tracking-wide">{BRAND.name}</span>
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-mocha">
              {BRAND.aka} · {BRAND.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-lg font-medium tracking-wide transition ${
                  isActive ? 'text-gold-deep underline underline-offset-8' : 'text-espresso/85 hover:text-espresso'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={whatsappLink('Hello 817 H&B, I would like to make an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp !px-6 !py-3 !text-lg"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
        </nav>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-linen bg-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-linen bg-cream lg:hidden" aria-label="Mobile navigation">
          <ul className="container-site flex flex-col py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className={({ isActive }) =>
                    `block py-3.5 text-xl font-medium ${isActive ? 'text-gold-deep' : 'text-espresso'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pb-2 pt-3">
              <a
                href={whatsappLink('Hello 817 H&B, I would like to make an enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-linen bg-espresso text-cream">
      <div className="container-site grid gap-12 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" alt="" className="h-12 w-auto rounded-md bg-cream p-1" />
            <div className="leading-tight">
              <p className="font-serif text-xl font-semibold text-cream">{BRAND.name}</p>
              <p className="text-base font-semibold uppercase tracking-[0.16em] text-cream/85">
                {BRAND.aka} · {BRAND.tagline}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-lg leading-relaxed text-cream/90">
            A health and beauty hub helping you become a better version of yourself — every day.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-gold-soft">Explore</p>
          <ul className="mt-4 space-y-3 text-lg">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-cream/90 transition hover:text-gold-soft">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-gold-soft">Contact</p>
          <ul className="mt-4 space-y-3 text-lg text-cream/90">
            <li>
              WhatsApp:{' '}
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-cream transition hover:text-gold-soft"
              >
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              Email:{' '}
              <a href={`mailto:${CONTACT.email}`} className="font-medium text-cream transition hover:text-gold-soft">
                {CONTACT.email}
              </a>
            </li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-site flex flex-col gap-2 py-6 text-base text-cream/85 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.company} (UEN: {BRAND.uen}). All rights reserved.
          </p>
          <p>Content is for general wellness education and is not medical advice.</p>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
