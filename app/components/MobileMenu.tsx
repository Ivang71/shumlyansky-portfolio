'use client'

import Image from 'next/image'
import s from '@/app/ui/mobileMenu.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { useTranslation } from '../i18n/useTranslation'

interface MobileMenuProps {
    isOpen: boolean
    close: () => void
}

export const MobileMenu = ({ isOpen, close }: MobileMenuProps) => {
    const pathname = usePathname()
    const isProjects = pathname === '/'
    const { t } = useTranslation()

    useEffect(close, [pathname])

    return (
        <div className={`${s.menuOverlay} ${isOpen ? s.open : ''}`}>
            <div className={s.menu}>
                <div className={s.nav}>
                    <Link href="/" className={`${isProjects ? s.active : ''}`} title={t('nav.works')}>
                        <Image src="/svg/projects_bold.svg" alt={t('nav.works')} width={100} height={55} />
                    </Link>
                    <Link href="/about" className={`${isProjects ? '' : s.active}`} title={t('nav.about')}>
                        <Image src="/svg/about_bold.svg" alt={t('nav.about')} width={63} height={55} />
                    </Link>
                </div>
                <div className={s.social}>
                    <a href="https://t.me/shumlyansky" target='_blank' title="Telegram">
                        <Image src="/svg/tg.svg" alt="Telegram" width={27} height={27} />
                    </a>
                    <a href="https://www.instagram.com/shumlyansky/" target='_blank' title="Instagram">
                        <Image src="/svg/inst.svg" alt="Instagram" width={27} height={27} />
                    </a>
                    <a href="mailto:shumlyanskyo@gmail.com" target='_blank' title={t('contact.email')}>
                        <Image src="/svg/mail.svg" alt={t('contact.email')} width={27} height={27} />
                    </a>
                </div>
            </div>
        </div>
    )
}
