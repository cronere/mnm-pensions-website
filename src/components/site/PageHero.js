export default function PageHero({ title, lede }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <h1>{title}</h1>
        {lede && <p className="lede">{lede}</p>}
      </div>
    </section>
  )
}
