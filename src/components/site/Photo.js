// Drop a real image into /public and pass src. Without src, a labelled
// placeholder shows what kind of photo belongs here.
export default function Photo({ src, alt = '', ratio = '16 / 9', need }) {
  return (
    <figure className="photo" style={{ aspectRatio: ratio }}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <figcaption>
          <b>Photo placeholder</b>
          <span>{need}</span>
        </figcaption>
      )}
    </figure>
  )
}
