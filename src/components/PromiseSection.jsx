import { motion, useReducedMotion } from 'framer-motion'
import { promises } from '../content/site.js'

export default function Promise() {
  const reduce = useReducedMotion()

  return (
    <section className="promise" aria-labelledby="promise-title">
      <div className="wrap">
        <div className="promise-head">
          <span className="kicker">To every person who buys Luzel</span>
          <h2 id="promise-title">Our Promise.</h2>
          <p>Pure. Consistent. Kadak & Aromatic. Honest.</p>
        </div>
        <div className="promise-grid">
          {promises.map((p, i) => (
            <motion.article
              className="pillar"
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65, delay: reduce ? 0 : i * 0.08 }}
            >
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
