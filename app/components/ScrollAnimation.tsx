'use client'

import { useEffect } from 'react'

export const ScrollAnimation = () => {
    useEffect(() => {
        const fadeElements = document.querySelectorAll('.fade-in')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                } else {
                    // Optional: remove 'visible' class if you want the fade-out effect
                    // entry.target.classList.remove('visible')
                }
            })
        }, {
            threshold: 0.1
        })

        fadeElements.forEach((el) => observer.observe(el))

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            fadeElements.forEach((el) => observer.unobserve(el))
        }
    }, [])

    return (
        <></>
    )
}
