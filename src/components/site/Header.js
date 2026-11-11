'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV } from '@/content/site'

export function Mark() {
  return (
    <Link href="/" className="mark" aria-label="MNM Pensions home">
      <b>MNM</b>
      <span>Pensions</span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const path = usePathname() || ''

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Mark />
        <nav className="nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hdr-actions">
          <Link href="/contact" className="btn ghost sm">Contact</Link>
          <Link href="/sign-in" className="btn sm">Sign in</Link>
        </div>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/sign-in" className="btn" onClick={() => setOpen(false)}>Sign in</Link>
        </nav>
      )}
    </header>
  )
}
