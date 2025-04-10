'use client'

import Image from 'next/image'
import s from '@/app/ui/mobileMenu.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
    isOpen: boolean
    close: () => void
}

export const MobileMenu = ({ isOpen, close }: MobileMenuProps) => {
    const pathname = usePathname()
    const isProjects = pathname === '/'

    useEffect(close, [pathname])

    return (
        <div className={`${s.menuOverlay} ${isOpen ? s.open : ''}`}>
            <div className={s.menu}>
                <div className={s.nav}>
                    <Link href="/" className={`${isProjects ? s.active : ''}`}>
                        <Image src="/svg/projects_bold.svg" alt="" width={100} height={55} />
                    </Link>
                    <Link href="/about" className={`${isProjects ? '' : s.active}`}>
                        <Image src="/svg/about_bold.svg" alt="" width={63} height={55} />
                    </Link>
                </div>
                <div className={s.social}>
                    <a href="https://t.me/shumlyansky" target='_blank'>
                        <Image src="/svg/tg.svg" alt="" width={27} height={27} />
                    </a>
                    <a href="https://www.instagram.com/shumlyansky/" target='_blank'>
                        <Image src="/svg/inst.svg" alt="" width={27} height={27} />
                    </a>
                    <a href="mailto:shumlyanskyo@gmail.com" target='_blank'>
                        <Image src="/svg/mail.svg" alt="" width={27} height={27} />
                    </a>
                </div>
            </div>
        </div>
    )
}
