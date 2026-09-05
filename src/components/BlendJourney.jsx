import { motion, useReducedMotion } from 'framer-motion'
import { timeline } from '../content/site.js'
import Reveal from './Reveal.jsx'
import LazyImg from './LazyImg.jsx'
import { images } from '../content/site.js'

export default function BlendJourney() {
  const reduce = useReducedMotion()

  return (
    <section className="blend" aria-labelledby="blend-title">
      <div className="wrap" style={{ position: 'relative' }}>
        <div className="blend-intro-grid">
          <Reveal className="blend-head">
            <span className="kicker">01 — 05</span>
            <h2 id="blend-title">The Search for the Perfect Blend.</h2>
            <p className="blend-intro">
              Months with tea traders, tasters and vendors familiar with Assam CTC
              grades. Testing batch after batch until the cup was right — strength,
              aroma, colour, a clean finish, real Assam character.
            </p>
          </Reveal>
          <Reveal className="media blend-intro-media" delay={0.12}>
            <LazyImg
              src={images.leaves.src}
              alt="Dark Assam tea leaves ready for tasting"
              eager
            />
          </Reveal>
        </div>

        <div className="timeline">
          {timeline.map((step, i) => (
            <motion.article
              className="t-item"
              key={step.n}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : i * 0.06 }}
            >
              <div className="t-n">{step.n}</div>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
