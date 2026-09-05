import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { images } from '../content/site.js'
import LazyImg from './LazyImg.jsx'

export default function StoryIntro() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : ['-8%', '8%'])

  return (
    <section className="not-tea" ref={ref} id="story" aria-labelledby="not-tea-title">
      <div className="not-tea-bg">
        <motion.div style={{ y, height: '120%', marginTop: '-10%' }}>
          <LazyImg src={images.notTea.src} alt={images.notTea.alt} sizes="100vw" />
        </motion.div>
      </div>
      <div className="not-tea-copy wrap">
        <motion.h2
          id="not-tea-title"
          initial={reduce ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Not tea.
        </motion.h2>
        <motion.p
          className="chai serif"
          style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', margin: '0.1em 0 0', lineHeight: 0.85 }}
          initial={reduce ? false : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.12 }}
        >
          Chai.
        </motion.p>
        <motion.p
          className="reveal-line"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The real, kadak, twice-boiled, fills-the-room-with-smell chai.
        </motion.p>
      </div>
    </section>
  )
}
