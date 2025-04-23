import { CustomSlide } from "../types"

export const cdn = 'https://shumlyansky.b-cdn.net'

const standardVideoProps = {
    type: 'video' as 'video',
    autoPlay: true,
    loop: true,
    controls: true,
    preload: 'metadata'
}

export const slides: CustomSlide[] = [
    {
        src: `${cdn}/pics/frame.avif`, // 0
        type: 'image',
        width: 2477,
        height: 2476,
    },
    {
        src: `${cdn}/pics/ring1.avif`, // 1
        type: 'image',
        width: 2477,
        height: 2843,
    },
    {
        width: 2160, // 2
        height: 2160,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/milk.mp4`,
                type: "video/mp4",
            },
        ],
    },
    {
        src: `${cdn}/pics/ring2.avif`, // 3
        type: 'image',
        width: 2160,
        height: 2160,
    },
    {
        src: `${cdn}/pics/balloons.avif`, // 4
        type: 'image',
        width: 2477,
        height: 2476,
    },
    {
        src: `${cdn}/pics/ring3.avif`, // 5
        type: 'image',
        width: 2476,
        height: 2842,
    },


    {
        width: 2560, // 6
        height: 1440,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/can.mp4`,
                type: "video/mp4",
            },
        ],
    },


    {
        width: 1536, // 7
        height: 1920,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/pucks.mp4`,
                type: "video/mp4",
            },
        ],
    },
    {
        width: 1080, // 8
        height: 1080,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/mouse.mp4`,
                type: "video/mp4",
            },
        ],
    },
    {
        width: 1080, // 9
        height: 1080,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/coolinart.mp4`,
                type: "video/mp4",
            },
        ],
    },


    {
        width: 2048, // 10
        height: 858,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/jois.mp4`,
                type: "video/mp4",
            },
        ],
        text: 'Совместная работа с агентством Zephyr Lab. Имиджевое видео для ЖК "JOIS". Режиссура, монтаж, моушн – Александр Шумлянский. Ролик транслировался в рекламном блоке перед киносеансами в кинотеатре "Художественный", в Москве.',
    },


    {
        width: 2160, // 11
        height: 3072,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/burberry.mp4`,
                type: "video/mp4",
            },
        ],
    },
    {
        src: `${cdn}/pics/burb1.avif`, // 12
        type: 'image',
        width: 2160,
        height: 3072,
    },
    {
        src: `${cdn}/pics/burb2.avif`, // 13
        type: 'image',
        width: 2160,
        height: 3072,
    },
    {
        src: `${cdn}/pics/burb3.avif`, // 14
        type: 'image',
        width: 2160,
        height: 3072,
    },
    {
        src: `${cdn}/pics/burb4.avif`, // 15
        type: 'image',
        width: 2160,
        height: 3072,
    },


    {
        width: 2560, // 16
        height: 1440,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/cosmetics.mp4`,
                type: "video/mp4",
            },
        ],
    },


    {
        width: 2800, // 17
        height: 2100,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/thorus.mp4`,
                type: "video/mp4",
            },
        ],
    },
    {
        width: 1536, // 18
        height: 1920,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/phone.mp4`,
                type: "video/mp4",
            },
        ],
    },
    {
        src: `${cdn}/pics/flower.avif`, // 19
        type: 'image',
        width: 2490,
        height: 2880,
    },
    {
        src: `${cdn}/pics/chakchak.avif`, // 20
        type: 'image',
        width: 3211,
        height: 3744,
    },
    {
        src: `${cdn}/pics/yellow.avif`, // 21
        type: 'image',
        width: 3211,
        height: 3744,
    },


    {
        width: 3840, // 22
        height: 2160,
        ...standardVideoProps,
        sources: [
            {
                src: `${cdn}/vids/furniture.mp4`,
                type: "video/mp4",
            },
        ],
    },


    
    {
        src: `${cdn}/pics/raul_green_1.avif`, // 23
        type: 'image',
        width: 2650,
        height: 3040,
    },
    {
        src: `${cdn}/pics/raul_violet_1.avif`, // 24
        type: 'image',
        width: 2650,
        height: 3040,
    },
    {
        src: `${cdn}/pics/raul_pink_1.avif`, // 25
        type: 'image',
        width: 2650,
        height: 3040,
    },
]
