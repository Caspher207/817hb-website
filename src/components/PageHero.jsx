export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="border-b border-linen/70 bg-gradient-to-b from-sand/70 to-cream">
      <div className="container-site py-16 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-xl leading-[1.7] text-mocha">{lead}</p>}
      </div>
    </section>
  )
}
