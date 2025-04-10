'use client'

import Image from 'next/image'
import { useWindowWidth } from '../hooks'
import s from '@/app/ui/header.module.scss'
import Link from 'next/link'

interface HeaderProps {
    isMobileMenuOpen: boolean
    toggleMobileMenu: () => void
}

export const Header = ({ isMobileMenuOpen, toggleMobileMenu }: HeaderProps) => {
    const windowWidth = useWindowWidth()
    return (
        <div className={s.header}>
            {windowWidth > 1024 ? (
                <>
                    <Link href="/">
                        <Image src="/svg/logo.svg" alt="" width={133} height={44} className={s.logo} loading='eager' priority />
                    </Link>
                    <div className={s.nav}>
                        <div className={s.social}>
                            <a href="https://t.me/shumlyansky" target='_blank' className='scaleOnHover'>
                                <Image src="/svg/tg.svg" alt="" width={14.49} height={11.82} />
                            </a>
                            <a href="https://www.instagram.com/shumlyansky/" target='_blank' className='scaleOnHover'>
                                <Image src="/svg/inst.svg" alt="" width={17.71} height={17.71} />
                            </a>
                            <a href="mailto:shumlyanskyo@gmail.com" target='_blank' className='scaleOnHover'>
                                <Image src="/svg/mail.svg" alt="" width={15.43} height={12.35} />
                            </a>
                        </div>
                        <Link href="/" className='scaleOnHover5'>
                            <Image src="/svg/projects.svg" alt="" width={89} height={29} />
                        </Link>
                        <Link href="/about" className='scaleOnHover5'>
                            <Image src="/svg/about.svg" alt="" width={59} height={29} />
                        </Link>
                    </div>
                </>
            ) : (windowWidth === 0) ? null : (
                <div className={s.mobileHeader}>
                    <div className={s.logo}>
                        <Link href="/">
                            <Image src="/svg/logo.svg" alt="" width={133} height={44} className={s.logo} />
                        </Link>
                    </div>
                    <div className={`${s.burger} ${isMobileMenuOpen ? `${s.open}` : ''}`} onClick={toggleMobileMenu}>
                        <span className={`${s.middle}`}></span>
                    </div>
                </div>
            )}
        </div>
    )
}
