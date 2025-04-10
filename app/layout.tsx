import '@/app/ui/global.scss'
import { Metadata } from 'next'
import { Analytics, Body } from './components'

export const metadata: Metadata = {
    title: 'Alexander Shumlyansky',
    description: '3D Modeling, Rendering, Texturing, Animation, Product visualization',
    metadataBase: new URL('https://shumlyansky.com'),
}

export default ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <head>
            <Analytics />
        </head>
        <Body children={children}/>
    </html>
)
