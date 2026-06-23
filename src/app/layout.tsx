import '../styles/globals.css'
import Link from 'next/link'
import type { Metadata, Viewport } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import Script from 'next/script'
import bgL1280avif from '../assets/bg/bg-l-1280.avif'
import bgL1488avif from '../assets/bg/bg-l-1488.avif'
import bgL1792avif from '../assets/bg/bg-l-1792.avif'
import bgL2048avif from '../assets/bg/bg-l-2048.avif'
import bgL2560avif from '../assets/bg/bg-l-2560.avif'
import bgL2880avif from '../assets/bg/bg-l-2880.avif'
import bgL3323avif from '../assets/bg/bg-l-3323.avif'
import bgL3584avif from '../assets/bg/bg-l-3584.avif'
import bgL5120avif from '../assets/bg/bg-l-5120.avif'
import bgL6646avif from '../assets/bg/bg-l-6646.avif'
import bgL1280webp from '../assets/bg/bg-l-1280.webp'
import bgL1488webp from '../assets/bg/bg-l-1488.webp'
import bgL1792webp from '../assets/bg/bg-l-1792.webp'
import bgL2048webp from '../assets/bg/bg-l-2048.webp'
import bgL2560webp from '../assets/bg/bg-l-2560.webp'
import bgL2880webp from '../assets/bg/bg-l-2880.webp'
import bgL3323webp from '../assets/bg/bg-l-3323.webp'
import bgL3584webp from '../assets/bg/bg-l-3584.webp'
import bgL5120webp from '../assets/bg/bg-l-5120.webp'
import bgL6646webp from '../assets/bg/bg-l-6646.webp'
import bgP1280avif from '../assets/bg/bg-p-1280.avif'
import bgP1488avif from '../assets/bg/bg-p-1488.avif'
import bgP1792avif from '../assets/bg/bg-p-1792.avif'
import bgP2048avif from '../assets/bg/bg-p-2048.avif'
import bgP2560avif from '../assets/bg/bg-p-2560.avif'
import bgP2880avif from '../assets/bg/bg-p-2880.avif'
import bgP3323avif from '../assets/bg/bg-p-3323.avif'
import bgP1280webp from '../assets/bg/bg-p-1280.webp'
import bgP1488webp from '../assets/bg/bg-p-1488.webp'
import bgP1792webp from '../assets/bg/bg-p-1792.webp'
import bgP2048webp from '../assets/bg/bg-p-2048.webp'
import bgP2560webp from '../assets/bg/bg-p-2560.webp'
import bgP2880webp from '../assets/bg/bg-p-2880.webp'
import bgP3323webp from '../assets/bg/bg-p-3323.webp'

export const metadata: Metadata = {
  title: 'Do You Know JS?',
  description: 'Test and strenghten your Javascript skills with Do You Know JS?',
  robots: 'index, follow, noarchive',
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

const portraitWidths = [1280, 1488, 1792, 2048, 2560, 2880, 3323]
const landscapeWidths = [1280, 1488, 1792, 2048, 2560, 2880, 3323, 3584, 5120, 6646]
const portraitAvif = [
  bgP1280avif,
  bgP1488avif,
  bgP1792avif,
  bgP2048avif,
  bgP2560avif,
  bgP2880avif,
  bgP3323avif,
]
const portraitWebp = [
  bgP1280webp,
  bgP1488webp,
  bgP1792webp,
  bgP2048webp,
  bgP2560webp,
  bgP2880webp,
  bgP3323webp,
]
const landscapeAvif = [
  bgL1280avif,
  bgL1488avif,
  bgL1792avif,
  bgL2048avif,
  bgL2560avif,
  bgL2880avif,
  bgL3323avif,
  bgL3584avif,
  bgL5120avif,
  bgL6646avif,
]
const landscapeWebp = [
  bgL1280webp,
  bgL1488webp,
  bgL1792webp,
  bgL2048webp,
  bgL2560webp,
  bgL2880webp,
  bgL3323webp,
  bgL3584webp,
  bgL5120webp,
  bgL6646webp,
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="dynamic-favicon" strategy="beforeInteractive">
          {`(function(){
const dark = window.matchMedia('(prefers-color-scheme: dark)')
const { matches: isDark } = dark
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
const link = document.createElement('link')
link.rel = 'icon'
if (isSafari) {
  link.href = isDark ? '/favicon-inverted.ico' : '/favicon.ico'
} else {
  link.type = 'image/svg+xml'
  link.href = isDark ? 'favicon.svg?dark' : 'favicon.svg'
}
document.head.appendChild(link);
if (isSafari) return;

const iconEl = document.querySelector('link[rel="icon"]')
dark.addEventListener('change', ({ matches }) => {
  iconEl.setAttribute('href', matches ? '/favicon.svg?dark' : 'favicon.svg')
})
})()`}
        </Script>
      </head>
      <body
        className={`${sourceCodePro.variable} bg-canvas-light dark:bg-canvas-dark overflow-hidden text-black dark:text-white`}
      >
        <picture>
          <source
            media="(orientation: portrait)"
            type="image/avif"
            srcSet={portraitWidths.map((w, i) => `${portraitAvif[i].src} ${w}w`).join(', ')}
          />
          <source
            media="(orientation: portrait)"
            type="image/webp"
            srcSet={portraitWidths.map((w, i) => `${portraitWebp[i].src} ${w}w`).join(', ')}
          />
          <source
            type="image/avif"
            srcSet={landscapeWidths.map((w, i) => `${landscapeAvif[i].src} ${w}w`).join(', ')}
          />
          <source
            type="image/webp"
            srcSet={landscapeWidths.map((w, i) => `${landscapeWebp[i].src} ${w}w`).join(', ')}
          />
          <img
            className="fixed inset-0 z-[-1] h-full w-full object-cover object-[85%_50%] invert dark:brightness-75 dark:invert-0 dark:saturate-[0.3]"
            alt=""
            aria-hidden="true"
          />
        </picture>
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
