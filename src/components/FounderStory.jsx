import { chapters } from '../content/site.js'
import LazyImg from './LazyImg.jsx'
import Reveal from './Reveal.jsx'

export default function FounderStory() {
  return (
    <section className="founder" aria-labelledby="founder-title">
      <div className="wrap">
        <Reveal className="founder-head">
          <span className="kicker">The founder story</span>
          <h2 id="founder-title">There was a gap in the market.</h2>
          <p>I decided to fill it — with something I could be proud of.</p>
        </Reveal>

        {chapters.map((chapter, i) => (
          <article
            className={`chapter ${i % 2 ? 'is-flip' : ''}`}
            key={chapter.id}
          >
            <Reveal className="chapter-copy" delay={0.05}>
              <span className="kicker">{chapter.kicker}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </Reveal>
            <Reveal className="media chapter-media" delay={0.12}>
              <LazyImg src={chapter.image.src} alt={chapter.image.alt} />
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  )
}
