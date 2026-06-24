import '../styles/globals.css'
import Link from 'next/link'
import type { Metadata, Viewport } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import Script from 'next/script'
import BgImage from '@/components/BgImage'

const title = 'Do You Know JS?'
const description = 'A quiz that tests how well you know JavaScript’s quirks and gotchas'

export const metadata: Metadata = {
  metadataBase: new URL('https://doyouknowjs.com'),
  title,
  description,
  robots: 'index, follow, noarchive',
  openGraph: {
    title,
    description,
    url: 'https://doyouknowjs.com',
    siteName: title,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'rgb(238, 241, 247)' },
    { media: '(prefers-color-scheme: dark)', color: 'rgb(10, 13, 21)' },
  ],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
}

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sourcecodepro',
  display: 'block',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="dynamic-favicon" src="/dynamic-favicon.js" strategy="beforeInteractive" />
      </head>
      <body
        className={`${sourceCodePro.variable} bg-canvas-light dark:bg-canvas-dark overflow-hidden text-black dark:text-white`}
      >
        <BgImage />
        <div className="fixed z-[-1] h-full w-full bg-blue-100 opacity-30 dark:bg-blue-950 dark:opacity-20"></div>
        {children}
        <footer className="fixed inset-x-0 bottom-0 flex justify-center pb-3 font-mono text-xs">
          <p>
            (c){' '}
            <time className="pl-0.5" dateTime="2024">
              2024
            </time>{' '}
            <Link
              className="rounded p-0.5 pb-0 outline-none focus-visible:ring-2 focus-visible:ring-current"
              target="_blank"
              href="https://mayermarkus.net"
            >
              Markus Mayer
            </Link>
          </p>
        </footer>
      </body>
    </html>
  )
}
