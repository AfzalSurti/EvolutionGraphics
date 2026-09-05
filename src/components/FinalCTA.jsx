import { images, shopHref } from '../content/site.js'
import LazyImg from './LazyImg.jsx'
import Reveal from './Reveal.jsx'
import Steam from './Steam.jsx'

export default function FinalCTA() {
  return (
    <section className="final" aria-labelledby="final-title">
      <LazyImg src={images.close.src} alt={images.close.alt} sizes="100vw" />
      <Steam />
      <div className="final-inner">
        <Reveal>
          <span className="kicker">The first light of the day</span>
          <h2 id="final-title">Your perfect chai might be closer than you think.</h2>
          <p>Strong. Aromatic. Pure. Made for the way India drinks chai.</p>
          <div className="final-actions">
            <a className="btn btn-primary" href={shopHref}>
              Discover Luzel <span className="arrow">→</span>
            </a>
            <a className="btn btn-ghost" href="#story">
              Our Story
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
