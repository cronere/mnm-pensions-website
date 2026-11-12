export default function SectionHead({ id, title, sub, light }) {
  return (
    <div className={`sec-head${light ? ' light' : ''}`}>
      <h2 id={id}>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  )
}
