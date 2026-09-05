import { products } from '../content/site.js'
import LazyImg from './LazyImg.jsx'
import Reveal from './Reveal.jsx'

export default function Products() {
  return (
    <section className="products" id="shop" aria-labelledby="products-title">
      <div className="wrap">
        <div className="products-head">
          <Reveal>
            <span className="kicker">Our chai</span>
            <h2 id="products-title">Two blends. One obsession.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ maxWidth: '32ch', color: 'var(--brown)', margin: 0 }}>
              Both from premium Assam gardens. Both made for the strong, milky,
              kadak style of chai common in North and West India.
            </p>
          </Reveal>
        </div>
        <div className="product-grid">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <article className="product-card" id={`chai-${p.id}`}>
                <div className="media product-visual">
                  <LazyImg src={p.image.src} alt={p.image.alt} />
                </div>
                <h3>{p.name}</h3>
                <p className="line">{p.line}</p>
                <p className="pos">{p.position}</p>
                <ul className="traits">
                  {p.traits.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <a className="btn btn-ink" href="#contact">
                  {p.cta} <span className="arrow">→</span>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <p
          style={{
            marginTop: '1.5rem',
            fontSize: '0.85rem',
            color: 'var(--mute)',
          }}
        >
          Shopping is opening. Until then, write to us below and we’ll help you
          get a pack of Classic or Premium.
        </p>
      </div>
    </section>
  )
}
