import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function Legal({ title, intro }) {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main id="main" className="legal wrap">
        <p className="kicker">Luzel Tea</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <p>
          This page is a placeholder. The full {title.toLowerCase()} will be
          published here. Until then, write to us from the{' '}
          <a className="link-underline" href="/#contact">
            contact
          </a>{' '}
          section and we will share the current details.
        </p>
        <p>
          <Link className="btn btn-line" to="/">
            ← Back to Luzel
          </Link>
        </p>
      </main>
      <Footer />
    </>
  )
}
