'use client'

import { Children, useEffect, useRef, useState } from 'react'

// Accessible tabs. Every panel is rendered in the page (hidden when inactive),
// so all the pricing text stays readable by search engines.
export default function Tabs({ tabs, children, label }) {
  const [active, setActive] = useState(0)
  const refs = useRef([])
  const panels = Children.toArray(children)

  useEffect(() => {
    const i = tabs.findIndex((t) => `#${t.id}` === window.location.hash)
    if (i >= 0) setActive(i)
  }, [tabs])

  function select(i) {
    setActive(i)
    try { history.replaceState(null, '', `#${tabs[i].id}`) } catch {}
  }

  function onKey(e, i) {
    let n = null
    if (e.key === 'ArrowRight') n = (i + 1) % tabs.length
    if (e.key === 'ArrowLeft') n = (i - 1 + tabs.length) % tabs.length
    if (n !== null) {
      e.preventDefault()
      select(n)
      refs.current[n]?.focus()
    }
  }

  return (
    <div className="tabs">
      <div className="tablist" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[i] = el)}
            role="tab"
            type="button"
            id={`tab-${t.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${t.id}`}
            tabIndex={active === i ? 0 : -1}
            className="tab"
            onClick={() => select(i)}
            onKeyDown={(e) => onKey(e, i)}
          >
            <span className="tab-title">{t.label}</span>
            <span className="tab-sub">{t.sub}</span>
          </button>
        ))}
      </div>
      {panels.map((p, i) => (
        <div
          key={tabs[i].id}
          role="tabpanel"
          id={`panel-${tabs[i].id}`}
          aria-labelledby={`tab-${tabs[i].id}`}
          hidden={active !== i}
          className="tabpanel"
        >
          {p}
        </div>
      ))}
    </div>
  )
}
