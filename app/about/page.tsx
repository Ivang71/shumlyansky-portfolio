import Image from 'next/image'
import '@/app/ui/index.scss'
import s from '@/app/ui/about.module.scss'
import { ScrollAnimation, LazyImage } from '@/app/components'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ 
    subsets: ['cyrillic'],
    weight: ['400'],
})

export default async function AboutPage() {
    return (
        <>
            <div className={s.aboutPage}>
                <LazyImage src="/pics/guy.avif" alt="Alexander Shumlyansky" width={3005} height={4006} className={`${s.guy}`}/>
                <div className={s.rightColumn}>
                    <div className={`${rubik.className} font-sans`}>
                        <p>3D & Моушн-дизайнер, специализируюсь на создании цепляющих рендеров и моушн-роликов.</p>

                        <p>В своей работе стремлюсь найти и передать уникальную атмосферу бренда, находясь в тесном контакте с вами и вашим видением продукта.</p>

                        <p>Моделирование, анимации, симуляции, продуктовые посты, full CG видео.</p>

                        <p>Буду рад обсудить ваши идеи и различные варианты сотрудничества!</p>

                        <div>e-mail: shumlyanskyo@gmail.com</div>
                        <div>telegram: shumlyansky</div>
                    </div>
                    <div className={s.logos}>
                        <Image src="/svg/ps.svg" alt="" width={25} height={25} />
                        <Image src="/svg/ae.svg" alt="" width={25} height={25} />
                        <Image src="/svg/figma.svg" alt="" width={25} height={25} />
                        <Image src="/svg/vector.svg" alt="" width={25} height={25} />
                        <Image src="/svg/blender.svg" alt="" width={25} height={25} />
                        <Image src="/svg/davinci.svg" alt="" width={25} height={25} />
                    </div>
                </div>
            </div>
        </>
    )
}
