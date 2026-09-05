import { useState } from 'react'

const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || 'hello@luzeltea.com'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function onSubmit(e) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    if (data.get('website')) {
      setStatus('sent')
      return
    }

    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()

    if (!name || !email || !message) {
      setError('Please fill in all fields.')
      setStatus('error')
      return
    }

    const subject = encodeURIComponent(`Luzel enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
    form.reset()
    setError('')
    setStatus('sent')
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <div>
          <span className="kicker">Contact</span>
          <h2 id="contact-title">Write to Luzel.</h2>
          <p>
            For orders, stockists, or a conversation about the blends. We’ll
            keep it as honest as the chai.
          </p>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <label className="hp" aria-hidden="true">
            Website
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={4} required />
          </label>
          <label className="robot-check">
            <input name="human" type="checkbox" value="true" required />
            <span>I am not a robot</span>
          </label>
          <button className="btn btn-ink" type="submit">
            Open email <span className="arrow">→</span>
          </button>
          {status === 'sent' && (
            <p className="form-note" role="status">
              Your email app is ready with your message. ✓
            </p>
          )}
          {status === 'error' && (
            <p className="form-note form-error" role="alert">
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
