'use client'

import { useState } from 'react'
import { SITE } from '@/content/site'
import Icon from './Icon'
import SectionHead from './SectionHead'
import { Chevrons } from './Graphics'

// Composes an email in the visitor's mail app. Swap for a server action or
// API route once there is a delivery destination (inbox or CRM).
export default function ContactSection({ id = 'contact' }) {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = [
      `Name: ${f.get('name')}`,
      `Organization: ${f.get('org')}`,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone') || ''}`,
      `Topic: ${f.get('topic')}`,
      '',
      f.get('message'),
    ].join('\n')
    const subject = `Website inquiry: ${f.get('topic')}`
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="sec dark" id={id} aria-labelledby={`${id}-h`}>
      <Chevrons className="wm wm-l" />
      <div className="wrap">
        <SectionHead
          id={`${id}-h`}
          light
          title="Tell us about your plan."
          sub="A short description is plenty: the institution, roughly how many participants, and what you use today. We reply within one business day."
        />
        <div className="contact-grid">
          <dl className="info">
            <div className="info-item">
              <span className="bubble"><Icon name="mail" /></span>
              <div><dt>Email</dt><dd><a href={`mailto:${SITE.email}`}>{SITE.email}</a></dd></div>
            </div>
            <div className="info-item">
              <span className="bubble"><Icon name="phone" /></span>
              <div><dt>Phone</dt><dd><a href={SITE.phoneHref}>{SITE.phone}</a>, {SITE.phoneNote}</dd></div>
            </div>
            <div className="info-item">
              <span className="bubble"><Icon name="fax" /></span>
              <div><dt>Fax</dt><dd>{SITE.fax}</dd></div>
            </div>
            <div className="info-item">
              <span className="bubble"><Icon name="pin" /></span>
              <div>
                <dt>Mail</dt>
                <dd>
                  <address className="addr">
                    {SITE.legalName}<br />
                    {SITE.mail.street}<br />
                    {SITE.mail.city}, {SITE.mail.region} {SITE.mail.zip}
                  </address>
                </dd>
              </div>
            </div>
          </dl>

          <div className="form-card">
            <form className="form" onSubmit={onSubmit}>
              <div className="two">
                <div className="field">
                  <label htmlFor={`${id}-name`}>Your name</label>
                  <input id={`${id}-name`} name="name" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor={`${id}-org`}>College or district</label>
                  <input id={`${id}-org`} name="org" required autoComplete="organization" />
                </div>
              </div>
              <div className="two">
                <div className="field">
                  <label htmlFor={`${id}-email`}>Work email</label>
                  <input id={`${id}-email`} name="email" type="email" required autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor={`${id}-phone`}>Phone (optional)</label>
                  <input id={`${id}-phone`} name="phone" type="tel" autoComplete="tel" />
                </div>
              </div>
              <div className="field">
                <label htmlFor={`${id}-topic`}>What do you need?</label>
                <select id={`${id}-topic`} name="topic" defaultValue="Moving a plan to MNM">
                  <option>Moving a plan to MNM</option>
                  <option>Setting up a new plan</option>
                  <option>Pricing question</option>
                  <option>I am a participant with a question</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor={`${id}-msg`}>Message</label>
                <textarea id={`${id}-msg`} name="message" required />
              </div>
              <button className="btn" type="submit">Send message</button>
              {sent && (
                <p role="status" className="status">
                  Your email app should have opened with the message ready to send. If it did not, write to {SITE.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
