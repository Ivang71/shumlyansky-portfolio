'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox"
import Video from "yet-another-react-lightbox/plugins/video"
import "yet-another-react-lightbox/styles.css"
import s from '@/app/ui/gallery.module.scss'
import { cdn, slides } from "@/app/consts/slides"
import { useWindowWidth } from "@/app/hooks"
import { SlideFooter } from "./SlideFooter"


export const Gallery = () => {
    const [index, setIndex] = useState<number>(-1)
    const [isSafari, setIsSafari] = useState(false)
    const windowWidth = useWindowWidth()

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

    useEffect(() => {
        document.querySelectorAll('video').forEach((v) => { v.preload = "auto"; v.autoplay = true })
    }, [])

    return (
        <div className={s.gallery}>
            <div className={s.firstRow}>
                <Image src={`${cdn}/pics/frame_preview.avif`} alt="" priority width={630} height={630} className='fade-in' onClick={() => openMedia(0)} />
                <Image src={`${cdn}/pics/ring1_preview.avif`} alt="" priority width={626} height={719} className='fade-in' onClick={() => openMedia(1)} />
                <video width="475" height="475" muted autoPlay loop playsInline controls={isSafari} preload="auto" className='fade-in' onClick={() => openMedia(2)}>
                    <source src={`${cdn}/vids/milk_preview.mp4`} type="video/mp4" />
                </video>
            </div>

            <div className={s.secondRow}>
                <Image src={`${cdn}/pics/ring2_preview.avif`} alt="" priority width={626} height={719} className={`${s.balloonsImg} fade-in`} onClick={() => openMedia(3)} />
                <Image src={`${cdn}/pics/balloons_preview.avif`} alt="" priority width={630} height={630} className={`${s.balloonsImg} fade-in`} onClick={() => openMedia(4)} />
                <Image src={`${cdn}/pics/ring3_preview.avif`} alt="" priority width={626} height={719} className='fade-in' onClick={() => openMedia(5)} />
            </div>

            <video width="1146" height="814" muted loop playsInline controls={isSafari} preload="auto" className={`${s.canVid} fade-in`} onClick={() => openMedia(6)}>
                <source src={`${cdn}/vids/can_preview.mp4`} type="video/mp4" />
            </video>

            <div className={s.thirdRow}>
                <video width="313" height="391" muted loop playsInline controls={isSafari} preload="auto" className={`${s.pucksVid} fade-in`} onClick={() => openMedia(7)}>
                    <source src={`${cdn}/vids/pucks_preview.mp4`} type="video/mp4" />
                </video>
                <video width="552" height="714" muted loop playsInline controls={isSafari} preload="auto" className={`${s.mouseVid} fade-in`} onClick={() => openMedia(8)}>
                    <source src={`${cdn}/vids/mouse_preview.mp4`} type="video/mp4" />
                </video>
                <video width="313" height="313" muted loop playsInline controls={isSafari} preload="auto" className={`${s.coolinartVid} fade-in`} onClick={() => openMedia(9)}>
                    <source src={`${cdn}/vids/coolinart_preview.mp4`} type="video/mp4" />
                </video>
            </div>

            <video width="1446" height="606" muted loop playsInline controls={isSafari} preload="auto" className={`${s.joisVid} fade-in`} onClick={() => openMedia(10)}>
                <source src={`${cdn}/vids/jois_preview.mp4`} type="video/mp4" />
            </video>

            <div className={s.seventhRow}>
                <video width="442" height="628" muted loop playsInline controls={isSafari} preload="auto" className={`${s.phoneVid} fade-in`} onClick={() => openMedia(11)}>
                    <source src={`${cdn}/vids/burberry_preview.mp4`} type="video/mp4" />
                </video>
                <div className={s.burbBlock}>
                    <Image src={`${cdn}/pics/burb1.avif`} alt="" priority={false} width={604} height={859} loading='lazy' className='fade-in' onClick={() => openMedia(12)} />
                    <Image src={`${cdn}/pics/burb2.avif`} alt="" priority={false} width={604} height={859} loading='lazy' className='fade-in' onClick={() => openMedia(13)} />
                    <Image src={`${cdn}/pics/burb3.avif`} alt="" priority={false} width={604} height={859} loading='lazy' className='fade-in' onClick={() => openMedia(14)} />
                    <Image src={`${cdn}/pics/burb4.avif`} alt="" priority={false} width={604} height={859} loading='lazy' className='fade-in' onClick={() => openMedia(15)} />
                </div>
            </div>

            <video width="1446" height="814" muted loop playsInline controls={isSafari} preload="auto" className={`${s.cameraVid} fade-in`} onClick={() => openMedia(16)}>
                <source src={`${cdn}/vids/camera_preview.mp4`} type="video/mp4" />
            </video>

            <div className={s.fifthRow}>
                <video width="942" height="1177" muted loop playsInline controls={isSafari} preload="auto" className={`${s.phoneVid} fade-in`} onClick={() => openMedia(17)}>
                    <source src={`${cdn}/vids/phone.mp4`} type="video/mp4" />
                </video>
                <Image src={`${cdn}/pics/flower_preview.avif`} alt="" priority={false} width={650} height={751} loading='lazy' className={`${s.flower} fade-in`} onClick={() => openMedia(18)} />
                <Image src={`${cdn}/pics/chakchak_preview.avif`} alt="" priority={false} width={650} height={757} loading='lazy' className={`${s.chakchak} fade-in`} onClick={() => openMedia(19)} />
            </div>

            <video width="3840" height="2160" muted loop playsInline controls={isSafari} preload="auto" className='fade-in' onClick={() => openMedia(20)}>
                <source src={`${cdn}/vids/furniture_preview.mp4`} type="video/mp4" />
            </video>

            <div className={s.ninethRow}>
                <Image src={`${cdn}/pics/raul_green_1.avif`} alt="" priority={false} width={2650} height={3040} loading='lazy' className='fade-in' onClick={() => openMedia(21)} />
                <Image src={`${cdn}/pics/raul_violet_1.avif`} alt="" priority={false} width={2650} height={3040} loading='lazy' className='fade-in' onClick={() => openMedia(22)} />
                <Image src={`${cdn}/pics/raul_pink_1.avif`} alt="" priority={false} width={2650} height={3040} loading='lazy' className='fade-in' onClick={() => openMedia(23)} />
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
