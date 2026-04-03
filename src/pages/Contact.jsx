import { useState } from 'react'
import './Contact.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const FORM_ENDPOINT = 'https://formspree.io/f/mkopvvel'

function Contact() {
  useScrollReveal()
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.target)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact-section">
      <h1 className="contact-title title-bckr reveal">Contact</h1>
      {status === 'sent' ? (
        <div className="contact-success reveal">
          <p>Submitted!</p>
        </div>
      ) : (
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="contact-row">
            <div className="contact-field">
              <label className="contact-label" htmlFor="name">Name</label>
              <input className="contact-input" id="name" name="name" type="text" required />
            </div>
            <div className="contact-field">
              <label className="contact-label" htmlFor="email">Email</label>
              <input className="contact-input" id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="contact-field">
            <label className="contact-label" htmlFor="message">Message</label>
            <textarea className="contact-input contact-textarea" id="message" name="message" rows={6} required />
          </div>
          {status === 'error' && (
            <p className="contact-error">Something went wrong. Please try again.</p>
          )}
          <button className="contact-submit title-bckr" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
