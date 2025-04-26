'use client'

import { useEffect, useRef, createContext, useContext, ReactNode } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type ScrollContextType = {
  lenis: Lenis | null
}

const ScrollContext = createContext<ScrollContextType>({ lenis: null })

export const useScroll = () => useContext(ScrollContext)

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    
    ScrollTrigger.refresh()

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </ScrollContext.Provider>
  )
} 