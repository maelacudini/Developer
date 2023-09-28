'use client';
import './globals.css'
import { Fragment, useEffect, useState } from 'react'
import SlidingText from '../components/SlidingText'
import Projects from '../components/Projects'
import Description from '../components/Description'
import SlidingGallery from '../components/SlidingGallery'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import About from '../components/About'
import Loader from '../components/Loader'
import Header from '../components/Header'
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 3000)
      }
    )()
  }, [])

  return (
    <main>
      <Header />
      <Cursor />
      <SlidingText />
      <Description />
      <Projects />
      <SlidingGallery />
      <About />
      <Footer />
    </main>
  )
}
