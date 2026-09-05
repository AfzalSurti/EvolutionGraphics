import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import StoryIntro from '../components/StoryIntro.jsx'
import FounderStory from '../components/FounderStory.jsx'
import BlendJourney from '../components/BlendJourney.jsx'
import TheMoment from '../components/TheMoment.jsx'
import Products from '../components/Products.jsx'
import Beliefs from '../components/Beliefs.jsx'
import Standards from '../components/Standards.jsx'
import WhyLuzel from '../components/WhyLuzel.jsx'
import PromiseSection from '../components/PromiseSection.jsx'
import Origin from '../components/Origin.jsx'
import FinalCTA from '../components/FinalCTA.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main id="main">
        <Hero />
        <StoryIntro />
        <FounderStory />
        <BlendJourney />
        <TheMoment />
        <Products />
        <Beliefs />
        <Standards />
        <WhyLuzel />
        <PromiseSection />
        <Origin />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
