'use client'

import Image from 'next/image'
import '@/app/ui/index.scss'
import { usePathname } from 'next/navigation'
import s from '@/app/ui/footer.module.scss'
import { useEffect, useState } from 'react'

export const Footer = () => {
    const pathname = usePathname()
    const isHome = pathname === '/'
    const [fadeEls, setFadeEls] = useState<NodeListOf<Element> | null>(null)

    useEffect(() => {
        setFadeEls(document.querySelectorAll('.fade-in'))
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        setTimeout(() => fadeEls?.forEach(el => el.classList.remove('visible')), 400)
    }

    return (
        <footer className={s.footer} style={{ marginTop: isHome? '80px' : '50px' }}>
            <div className={s.text}>
                <div>© ALEXANDER SHUMLYANSKY, {new Date().getFullYear()}</div>
            </div>
            <div className={`${s.buttonUp} scaleOnHover`} onClick={scrollToTop} style={{ visibility: isHome ? 'visible' : 'hidden' }}>
                <Image src="/svg/arrow_up.svg" alt="" width={26} height={14}/>
            </div>
        </footer>
    )
}
