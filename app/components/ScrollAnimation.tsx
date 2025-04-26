'use client'

import { useEffect } from 'react'
import { useScroll } from './ScrollProvider'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const ScrollAnimation = () => {
    const { lenis } = useScroll()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        
        const fadeElements = document.querySelectorAll('.fade-in')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                }
            })
        }, {
            threshold: 0.1
        })

        fadeElements.forEach((el) => observer.observe(el))

        if (lenis) {
            lenis.on('scroll', ScrollTrigger.update)
        }

        return () => {
            fadeElements.forEach((el) => observer.unobserve(el))
            if (lenis) {
                lenis.off('scroll')
            }
        }
    }, [lenis])

    return (
        <></>
    )
}
