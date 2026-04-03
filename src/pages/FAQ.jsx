import { useState } from 'react'
import './FAQ.css'
import { useScrollReveal } from '../hooks/useScrollReveal'

const faqs = [
  {
    q: 'What is Golden Lemon Games?',
    a: 'Golden Lemon Games is a single person endeavour...',
  },
  {
    q: 'Where are the games available?',
    a: 'All games are available on Steam. Links can be found on each game\'s page.',
  },
]

function FAQ() {
  useScrollReveal()
  const [open, setOpen] = useState(null)

  return (
    <section className="faq-section">
      <h1 className="faq-title title-bckr reveal">FAQs</h1>
      <div className="faq-list reveal">
        {faqs.map((item, i) => (
          <div
            key={i}
            className={`faq-item ${open === i ? 'faq-item-open' : ''}`}
          >
            <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
              <span>{item.q}</span>
              <span className="faq-icon">{open === i ? '−' : '+'}</span>
            </button>
            <p className={`faq-answer ${open === i ? 'faq-answer-open' : ''}`}>{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
