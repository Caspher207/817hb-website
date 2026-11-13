import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found — 817 H&B" description="The page you are looking for does not exist." />
      <section className="container-site flex min-h-[50vh] flex-col items-center justify-center py-24 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold">This page could not be found</h1>
        <p className="mt-4 max-w-md text-mocha">
          The link may be out of date, or the page may have moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to Home
        </Link>
      </section>
    </>
  )
}
