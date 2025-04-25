'use client'

import Image from 'next/image'
import '@/app/ui/index.scss'
import s from '@/app/ui/about.module.scss'
import { ScrollAnimation, LazyImage } from '@/app/components'
import { Rubik } from 'next/font/google'
import { useTranslation } from '../i18n/useTranslation'

const rubik = Rubik({ 
    subsets: ['cyrillic'],
    weight: ['400'],
})

export default function AboutPage() {
    const { t } = useTranslation()
    
    return (
        <>
            <div className={s.aboutPage}>
                <LazyImage src="/pics/guy.avif" alt={t('title')} width={3005} height={4006} className={`${s.guy}`}/>
                <div className={s.rightColumn}>
                    <div className={`${rubik.className} font-sans`}>
                        <p>{t('about.paragraph1')}</p>
                        <p>{t('about.paragraph2')}</p>
                        <p>{t('about.paragraph3')}</p>
                        <p>{t('about.paragraph4')}</p>
                        <div>{t('about.email')}</div>
                        <div>{t('about.telegram')}</div>
                    </div>
                    <div className={s.logos}>
                        <Image src="/svg/ps.svg" alt="Photoshop" width={25} height={25} />
                        <Image src="/svg/ae.svg" alt="After Effects" width={25} height={25} />
                        <Image src="/svg/figma.svg" alt="Figma" width={25} height={25} />
                        <Image src="/svg/vector.svg" alt="Vector" width={25} height={25} />
                        <Image src="/svg/blender.svg" alt="Blender" width={25} height={25} />
                        <Image src="/svg/davinci.svg" alt="DaVinci Resolve" width={25} height={25} />
                    </div>
                </div>
            </div>
        </>
    )
}
