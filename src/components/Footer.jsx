import { Link } from 'react-router-dom'
import { nav } from '../content/site.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div>
          <Link className="logo" to="/">
            Luzel Tea
          </Link>
          <p className="footer-tag">The first light of the day.</p>
        </div>
        <div>
          <h3>Navigate</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a className="link-underline" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Shopping</h3>
          <ul>
            <li>
              <a className="link-underline" href="/#chai-classic">
                Luzel Classic
              </a>
            </li>
            <li>
              <a className="link-underline" href="/#chai-premium">
                Luzel Premium
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Social</h3>
          <ul>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {year} Luzel Tea</span>
        <span className="footer-legal">
          <Link className="link-underline" to="/privacy">
            Privacy Policy
          </Link>
          {' · '}
          <Link className="link-underline" to="/terms">
            Terms & Conditions
          </Link>
          {' · '}
          <Link className="link-underline" to="/shipping">
            Shipping Policy
          </Link>
          {' · '}
          <Link className="link-underline" to="/refund">
            Refund Policy
          </Link>
        </span>
        <a
          className="footer-credit link-underline"
          href="https://www.linkedin.com/in/afzal-surti-9904b2287/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Afzal N. Surti
        </a>
      </div>
    </footer>
  )
}
