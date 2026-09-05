import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Legal from './pages/Legal.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/privacy"
        element={
          <Legal
            title="Privacy Policy"
            intro="How Luzel handles the information you share with us."
          />
        }
      />
      <Route
        path="/terms"
        element={
          <Legal
            title="Terms & Conditions"
            intro="The terms that govern use of this website and purchases of Luzel Tea."
          />
        }
      />
      <Route
        path="/shipping"
        element={
          <Legal
            title="Shipping Policy"
            intro="How Luzel packs and sends chai to you."
          />
        }
      />
      <Route
        path="/refund"
        element={
          <Legal
            title="Refund Policy"
            intro="How Luzel handles returns and refunds."
          />
        }
      />
    </Routes>
  )
}
