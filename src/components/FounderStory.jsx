import { chapters } from '../content/site.js'
import LazyImg from './LazyImg.jsx'
import Reveal from './Reveal.jsx'

export default function FounderStory() {
  return (
    <section className="founder" aria-labelledby="founder-title">
      <div className="wrap">
        <div className="founder-intro">
          <Reveal className="founder-head">
            <span className="kicker">The founder story</span>
            <h2 id="founder-title">There was a gap in the market.</h2>
            <p>I decided to fill it — with something I could be proud of.</p>
          </Reveal>
          <Reveal className="media founder-intro-media" delay={0.12}>
            <LazyImg
              src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&w=1400&q=80"
              alt="Tea garden rows in warm morning light"
              eager
            />
          </Reveal>
        </div>

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
