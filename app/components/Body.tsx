'use client'

import { Header, Footer, MobileMenu } from '@/app/components'
import { useEffect, useState } from 'react'
import { useWindowWidth } from '../hooks'
import { SpeedInsights } from '@vercel/speed-insights/next'


export const Body = ({ children }: { children: React.ReactNode }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const windowWidth = useWindowWidth()

    useEffect(() => {
         window.document.body.style.overflow = isMobileMenuOpen? 'hidden' : 'auto'
    }, [isMobileMenuOpen])

    return (
        <body>
            <div className='djr bodyContent'>
                <Header
                    isMobileMenuOpen={isMobileMenuOpen && windowWidth <= 1024}
                    toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
                <main>
                    {children}
                </main>
                <Footer />
                <MobileMenu isOpen={isMobileMenuOpen} close={() => setIsMobileMenuOpen(false)}/>
            </div>
            <SpeedInsights />
        </body>
    )
}
