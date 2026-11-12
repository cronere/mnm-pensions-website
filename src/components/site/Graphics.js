// Decorative graphics built from the firm's chevron mark.
export function Chevrons({ className, style }) {
  const band = (dy, hook) => {
    const pts = [[8, 128 + dy], [140, 20 + dy], [252, 124 + dy], [360, 22 + dy]]
    if (hook) pts.push([402, 58 + dy])
    return 'M' + pts.map((p) => p.join(',')).join(' L')
  }
  return (
    <svg viewBox="0 0 420 330" className={className} style={style} aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="30" strokeLinejoin="miter" strokeMiterlimit="4">
        <path d={band(0, true)} />
        <path d={band(70, false)} opacity="0.6" />
        <path d={band(140, true)} />
      </g>
    </svg>
  )
}

export function Dots({ className, style }) {
  return (
    <svg viewBox="0 0 120 120" className={className} style={style} aria-hidden="true" focusable="false">
      <defs>
        <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.6" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#dots)" />
    </svg>
  )
}
