'use client';
import './globals.css'
import { useEffect, useState } from 'react'
import SlidingText from '../components/SlidingText'
import Projects from '../components/Projects'
import Description from '../components/Description'
import SlidingGallery from '../components/SlidingGallery'
import Cursor from '../components/Cursor'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll({
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true
          }
        });

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 3000)
      }
    )()
  }, [])

  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <Loader />}
      </AnimatePresence>
      <Cursor />
      <SlidingText />
      <Description />
      <Projects />
      <SlidingGallery />
      <Footer />
    </main>
  )
}
