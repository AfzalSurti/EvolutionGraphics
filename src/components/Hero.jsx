import { motion, useReducedMotion } from 'framer-motion'
import { images, shopHref } from '../content/site.js'
import LazyImg from './LazyImg.jsx'
import Steam from './Steam.jsx'

export default function Hero() {
  const reduce = useReducedMotion()

  const fade = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section className="hero" aria-label="Luzel Tea">
      <motion.div
        className="hero-bg"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <LazyImg
          src={images.hero.src}
          srcSet={images.hero.srcSet}
          alt={images.hero.alt}
          eager
          sizes="100vw"
        />
      </motion.div>
      <div className="hero-shade" />
      <Steam />
      <div className="hero-content">
        <motion.p className="hero-mark" {...fade(0.25)}>
          Luzel Tea · Est. 2026
        </motion.p>
        <motion.h1 {...fade(0.4)}>The chai worth waking up for.</motion.h1>
        <motion.p {...fade(0.62)}>
          Strong. Aromatic. Pure. Crafted from premium Assam gardens for the way
          India actually drinks chai.
        </motion.p>
        <motion.div className="hero-actions" {...fade(0.8)}>
          <a className="btn btn-primary" href={shopHref}>
            Shop Luzel <span className="arrow">→</span>
          </a>
          <a className="btn btn-ghost" href="#story">
            Our Story ↓
          </a>
        </motion.div>
      </div>
    </section>
  )
}
