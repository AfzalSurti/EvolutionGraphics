import { images, shopHref } from '../content/site.js'
import LazyImg from './LazyImg.jsx'
import Reveal from './Reveal.jsx'
import Steam from './Steam.jsx'

export default function TheMoment() {
  return (
    <section className="moment" aria-labelledby="moment-quote">
      <LazyImg src={images.blend.src} alt={images.blend.alt} sizes="100vw" />
      <Steam />
      <div className="moment-inner wrap">
        <Reveal>
          <p className="kicker">The moment everything clicked</p>
          <blockquote id="moment-quote">
            “Strong without being harsh. Aromatic without being overpowering.
            Clean finish. Real Assam character.”
          </blockquote>
          <div className="blend-pair">
            <div>
              <h3>Luzel Classic</h3>
              <p>Strong. Aromatic. Kadak.</p>
            </div>
            <div>
              <h3>Luzel Premium</h3>
              <p>A small luxury in every cup.</p>
            </div>
            <a className="btn btn-ghost" href={shopHref}>
              Explore the blends <span className="arrow">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
