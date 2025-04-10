'use client'

import Image, { ImageProps } from 'next/image'
import { useState, useEffect, useRef, SyntheticEvent } from 'react'

interface LazyImageProps extends ImageProps {
}

export const LazyImage = (props: LazyImageProps) => {
    const ref = useRef<HTMLImageElement>(null)

    useEffect(() => () => {
        if (ref.current) {
            ref.current.classList.remove('visible')
        }
    }, [])

    const addVisible = (e: SyntheticEvent<HTMLImageElement, Event>) => e.currentTarget.classList.add('visible')

    return (
        <Image {...props} className={props.className + ' fade-in'} onLoad={addVisible} loading='lazy'/>
    )
}
