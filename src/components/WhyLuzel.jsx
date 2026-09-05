import { images } from '../content/site.js'
import LazyImg from './LazyImg.jsx'
import Reveal from './Reveal.jsx'

export default function WhyLuzel() {
  return (
    <section className="why" id="why" aria-labelledby="why-title">
      <LazyImg src={images.morning.src} alt={images.morning.alt} sizes="100vw" />
      <div className="why-inner wrap">
        <Reveal>
          <span className="kicker">Why Luzel?</span>
          <h2 id="why-title">Luzel means light.</h2>
          <p className="lead">
            For most of India, a cup of chai is the first light of the day.
            Before the news, the phone, work, the world — there is that first cup.
          </p>
          <ul className="before-list">
            <li>Before the news</li>
            <li>Before the phone</li>
            <li>Before work</li>
            <li>Before the world</li>
          </ul>
          <p className="first-cup">That first cup.</p>
        </Reveal>
      </div>
    </section>
  )
}
