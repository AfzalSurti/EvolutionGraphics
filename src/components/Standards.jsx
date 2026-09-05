import { motion, useReducedMotion } from 'framer-motion'
import { standards } from '../content/site.js'

export default function Standards() {
  const reduce = useReducedMotion()

  return (
    <section className="standards" id="chai" aria-labelledby="standards-title">
      <div className="wrap">
        <h2 id="standards-title">Three standards of great chai.</h2>
        <div className="std-grid">
          {standards.map((s, i) => (
            <motion.article
              className="std"
              key={s.n}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : i * 0.12 }}
            >
              <div className="n">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
