'use client'

import { useEffect, useRef, useState } from 'react'

type LazyVideoProps = {
  src: string
  w: number
  h: number
  poster?: string
  className?: string
  onClick?: () => void
  controls?: boolean
}

export const LazyVideo = ({
  src,
  w,
  h,
  poster,
  className,
  onClick,
  controls = false
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        setIsVisible(entry.isIntersecting)
        
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '200px' }
    )
    
    observer.observe(video)
    
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      width={w}
      height={h}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
      poster={poster}
      className={className}
      onClick={onClick}
      controls={controls}
      style={{ display: 'block' }}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
} 