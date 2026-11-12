'use client'

import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

// Shows the college's logo when the file exists, otherwise a graduation-cap icon.
export default function ClientLogo({ src, name }) {
  const [failed, setFailed] = useState(false)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (el && el.complete && el.naturalWidth === 0) setFailed(true)
  }, [])
  if (!src || failed) {
    return (
      <span className="bubble lg" aria-hidden="true">
        <Icon name="cap" size={30} />
      </span>
    )
  }
  return <img ref={ref} src={src} alt="" loading="lazy" onError={() => setFailed(true)} />
}
