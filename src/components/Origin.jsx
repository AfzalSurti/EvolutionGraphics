import { images } from '../content/site.js'
import LazyImg from './LazyImg.jsx'
import Reveal from './Reveal.jsx'

export default function Origin() {
  return (
    <>
      <section className="origin" aria-labelledby="origin-title">
        <div className="wrap-wide">
          <Reveal>
            <span className="kicker">Origin</span>
            <h2 id="origin-title">From premium Assam gardens to your morning cup.</h2>
          </Reveal>
          <div className="h-scroll">
            <div className="media">
              <LazyImg src={images.garden.src} alt={images.garden.alt} />
            </div>
            <div className="media">
              <LazyImg src={images.leaves.src} alt={images.leaves.alt} />
            </div>
            <div className="media">
              <LazyImg src={images.question.src} alt={images.question.alt} />
            </div>
          </div>
          <p className="origin-note">
            Luzel Classic and Luzel Premium are based on premium Assam gardens,
            crafted for the kadak, milky chai of North and West India. We don’t
            dress that up with claims we can’t stand behind.
          </p>
        </div>
      </section>

      <section className="begin" aria-labelledby="begin-title">
        <div className="begin-copy">
          <Reveal>
            <span className="kicker">February 2026</span>
            <h2 id="begin-title">Luzel began in Rajasthan and Gujarat.</h2>
            <p>
              The long-term vision is simple, and large enough: to serve every
              Indian the best cup of chai they have ever had from a packaged
              brand.
            </p>
          </Reveal>
        </div>
        <div className="media begin-media">
          <LazyImg src={images.originIndia.src} alt={images.originIndia.alt} />
        </div>
      </section>
    </>
  )
}
