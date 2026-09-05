import Reveal from './Reveal.jsx'

export default function Beliefs() {
  return (
    <section className="beliefs" aria-labelledby="beliefs-title">
      <div className="wrap">
        <h2 id="beliefs-title">What We Believe.</h2>
        <Reveal>
          <p className="line">Millions of Indians are still searching for their perfect chai.</p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="line">They haven’t settled. They haven’t found it.</p>
        </Reveal>
        <Reveal delay={0.22}>
          <p className="line last">They just haven’t found Luzel yet.</p>
        </Reveal>
      </div>
    </section>
  )
}
