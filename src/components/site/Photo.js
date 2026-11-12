'use client'

import { useEffect, useRef, useState } from 'react'

// Put the image file in /public and pass its path as src (e.g. "/office.jpg").
// If the file is missing, a labelled placeholder shows instead of a broken image.
export default function Photo({ src, alt = '', ratio = '16 / 9', need, shape, focus }) {
  const [failed, setFailed] = useState(false)
  const ref = useRef(null)

  // An image can fail before React hydrates, which skips onError; check again here.
  useEffect(() => {
    const el = ref.current
    if (el && el.complete && el.naturalWidth === 0) setFailed(true)
  }, [])

  const showImage = src && !failed
  return (
    <figure className={`photo${shape === 'circle' ? ' circle' : ''}`} style={{ aspectRatio: ratio }}>
      {showImage ? (
        <img ref={ref} src={src} alt={alt} loading="lazy" style={focus ? { objectPosition: focus } : undefined} onError={() => setFailed(true)} />
      ) : (
        <figcaption>
          {shape === 'circle' ? (
            <b>Headshot</b>
          ) : (
            <>
              <b>Photo placeholder</b>
              <span>{need}</span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  )
}
