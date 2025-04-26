'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox"
import Video from "yet-another-react-lightbox/plugins/video"
import "yet-another-react-lightbox/styles.css"
import s from '@/app/ui/gallery.module.scss'
import { cdn, getSlides } from "@/app/consts/slides"
import { useWindowWidth } from "@/app/hooks"
import { SlideFooter } from "./SlideFooter"
import { useTranslation } from "@/app/i18n/useTranslation"
import { LazyVideo } from './LazyVideo'

export const Gallery = () => {
    const [index, setIndex] = useState<number>(-1)
    const [isSafari, setIsSafari] = useState(false)
    const windowWidth = useWindowWidth()
    const { locale, t } = useTranslation('slides')
    
    // Get slides with proper translations based on current locale
    const slides = getSlides((key, namespace) => t(key))

    // Retrieve query parameter on mount
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search)
        const media = searchParams.get('media')
        if (media) {
            setIndex(parseInt(media))
        }
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
    }, [])

    const close = () => {
        setIndex(-1)
        window.history.replaceState({}, '', window.location.pathname)
    }
    
    const openMedia = (index: number) => {
        setIndex(index)
        window.history.replaceState({}, '', `?media=${index}`)
    }

    return (
        <div className={s.gallery}>
            <div className={s.firstRow}>
                <Image src={`${cdn}/pics/frame_preview.avif`} alt="" priority width={630} height={630} className='fade-in' onClick={() => openMedia(0)} />
                <Image src={`${cdn}/pics/ring1_preview.avif`} alt="" priority width={626} height={719} className='fade-in' onClick={() => openMedia(1)} />
                <LazyVideo 
                    src={`${cdn}/vids/milk_preview.mp4`} 
                    w={475} 
                    h={475} 
                    className='fade-in' 
                    onClick={() => openMedia(2)}
                    controls={isSafari}
                />
            </div>

            <div className={s.secondRow}>
                <Image src={`${cdn}/pics/ring2_preview.avif`} alt="" priority width={626} height={719} className={`${s.balloonsImg} fade-in`} onClick={() => openMedia(3)} />
                <Image src={`${cdn}/pics/balloons_preview.avif`} alt="" priority width={630} height={630} className={`${s.balloonsImg} fade-in`} onClick={() => openMedia(4)} />
                <Image src={`${cdn}/pics/ring3_preview.avif`} alt="" priority width={626} height={719} className='fade-in' onClick={() => openMedia(5)} />
            </div>

            <LazyVideo 
                src={`${cdn}/vids/can_preview.mp4`} 
                w={1146} 
                h={814} 
                className={`${s.canVid} fade-in`} 
                onClick={() => openMedia(6)}
                controls={isSafari}
            />

            <div className={s.thirdRow}>
                <LazyVideo 
                    src={`${cdn}/vids/pucks_preview.mp4`} 
                    w={313} 
                    h={391} 
                    className={`${s.pucksVid} fade-in`} 
                    onClick={() => openMedia(7)}
                    controls={isSafari}
                />
                <LazyVideo 
                    src={`${cdn}/vids/mouse_preview.mp4`} 
                    w={552} 
                    h={714} 
                    className={`${s.mouseVid} fade-in`} 
                    onClick={() => openMedia(8)}
                    controls={isSafari}
                />
                <LazyVideo 
                    src={`${cdn}/vids/coolinart_preview.mp4`} 
                    w={313} 
                    h={313} 
                    className={`${s.coolinartVid} fade-in`} 
                    onClick={() => openMedia(9)}
                    controls={isSafari}
                />
            </div>

            <LazyVideo 
                src={`${cdn}/vids/jois_preview.mp4`} 
                w={1446} 
                h={606} 
                className={`${s.joisVid} fade-in`} 
                onClick={() => openMedia(10)}
                controls={isSafari}
            />

            <div className={s.seventhRow}>
                <LazyVideo 
                    src={`${cdn}/vids/burberry_preview.mp4`} 
                    w={442} 
                    h={628} 
                    className={`${s.phoneVid} fade-in`} 
                    onClick={() => openMedia(11)}
                    controls={isSafari}
                />
                <div className={s.burbBlock}>
                    <Image src={`${cdn}/pics/burb1.avif`} alt="" priority={false} width={604} height={859} loading='lazy' className='fade-in' onClick={() => openMedia(12)} />
                    <Image src={`${cdn}/pics/burb2.avif`} alt="" priority={false} width={604} height={859} loading='lazy' className='fade-in' onClick={() => openMedia(13)} />
                    <Image src={`${cdn}/pics/burb3.avif`} alt="" priority={false} width={604} height={859} loading='lazy' className='fade-in' onClick={() => openMedia(14)} />
                    <Image src={`${cdn}/pics/burb4.avif`} alt="" priority={false} width={604} height={859} loading='lazy' className='fade-in' onClick={() => openMedia(15)} />
                </div>
            </div>

            <LazyVideo 
                src={`${cdn}/vids/cosmetics_preview.mp4`} 
                w={1536} 
                h={864} 
                className={`${s.cosmeticsVid} fade-in`} 
                onClick={() => openMedia(16)}
                controls={isSafari}
            />

            <div className={s.rowWithThorus}>
                <LazyVideo 
                    src={`${cdn}/vids/thorus_preview.mp4`} 
                    w={1680} 
                    h={1260} 
                    className={`${s.phoneVid} fade-in`} 
                    onClick={() => openMedia(17)}
                    controls={isSafari}
                />
                <LazyVideo 
                    src={`${cdn}/vids/phone.mp4`} 
                    w={1536} 
                    h={1920} 
                    className={`${s.phoneVid} fade-in`} 
                    onClick={() => openMedia(18)}
                    controls={isSafari}
                />
            </div>

            <div className={s.fifthRow}>
                <Image src={`${cdn}/pics/flower_preview.avif`} alt="" priority={false} width={650} height={751} loading='lazy' className={`${s.flower} fade-in`} onClick={() => openMedia(19)} />
                <Image src={`${cdn}/pics/chakchak_preview.avif`} alt="" priority={false} width={650} height={757} loading='lazy' className={`${s.chakchak} fade-in`} onClick={() => openMedia(20)} />
                <Image src={`${cdn}/pics/yellow_preview.avif`} alt="" priority={false} width={1680} height={1260} loading='lazy' className={`${s.chakchak} fade-in`} onClick={() => openMedia(21)} />
            </div>

            <LazyVideo 
                src={`${cdn}/vids/furniture_preview.mp4`} 
                w={3840} 
                h={2160} 
                className={`${s.furnitureVid} fade-in`} 
                onClick={() => openMedia(22)}
                controls={isSafari}
            />

            <div className={s.ninethRow}>
                <Image src={`${cdn}/pics/raul_green_1.avif`} alt="" priority={false} width={2650} height={3040} loading='lazy' className='fade-in' onClick={() => openMedia(23)} />
                <Image src={`${cdn}/pics/raul_violet_1.avif`} alt="" priority={false} width={2650} height={3040} loading='lazy' className='fade-in' onClick={() => openMedia(24)} />
                <Image src={`${cdn}/pics/raul_pink_1.avif`} alt="" priority={false} width={2650} height={3040} loading='lazy' className='fade-in' onClick={() => openMedia(25)} />
            </div> 

            <Lightbox
                plugins={[Video]}
                index={index}
                open={index > -1}
                close={close}
                slides={slides}
                styles={{
                    container: {
                        backgroundColor: 'rgba(255,255,255,0.9)'
                    },
                    slide: {
                        ...(windowWidth > 500 && { padding: 'calc(5*calc(var(--yarl__carousel_padding_px, 0)*1px + 100/(var(--yarl__carousel_slides_count)*100 + (var(--yarl__carousel_slides_count) - 1)*var(--yarl__carousel_spacing_percent, 0))*var(--yarl__carousel_padding_percent, 0)*1%))' })
                    }
                }}
                render={{
                    slideFooter: ({ slide }) => (<SlideFooter slide={slide} />), // @ts-ignore
                    buttonClose: (props: any) => (
                        <button type="button" title="Close" aria-label="Close" className={`yarl__button ${s.closeBtn}`} key='close' style={{ filter: "none" }}>
                            <Image {...props} src="/svg/cross.svg" alt="" width={23} height={23} onClick={close} key='cross' />
                        </button>
                    ), // @ts-ignore
                    buttonNext: (props: any) => (
                        (windowWidth < 671) ? null : (
                            <button type="button" title="Next" aria-label="Next" className={`yarl__button yarl__navigation_next ${s.customGalleryNav}`} key='next' style={{ filter: "none" }}>
                                <Image {...props} src="/svg/arrow_right.svg" alt="" width={18} height={18} onClick={() => openMedia(index + 1)} key='right' />
                            </button>
                        )
                    ), // @ts-ignore
                    buttonPrev: (props: any) => (
                        (windowWidth < 671) ? null : (
                            <button type="button" title="Previous" aria-label="Previous" className={`yarl__button yarl__navigation_prev ${s.customGalleryNav}`} key='prev' style={{ filter: "none" }}>
                                <Image {...props} src="/svg/arrow_left.svg" alt="" width={18} height={18} onClick={() => openMedia(index - 1)} />
                            </button>
                        )
                    ),
                }}
            />
        </div>
    )
}
