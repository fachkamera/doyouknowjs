import '../styles/globals.css'
import Link from 'next/link'
import { Source_Code_Pro } from 'next/font/google'
import Script from 'next/script'

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sourcecodepro',
  display: 'block',
})

function minimizeCode(code: string) {
  return code
    .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

const portraitWidths = [1280, 1488, 1792, 2048, 2560, 2880, 3323]
const landscapeWidths = [1280, 1488, 1792, 2048, 2560, 2880, 3323, 3584, 5120, 6646]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script id="dynamic-favicon" strategy="beforeInteractive">
          {minimizeCode(`(function(){
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
if (isSafari) return

const iconEl = document.querySelector('link[rel="icon"]')
dark.addEventListener('change', ({ matches }) => {
  iconEl.setAttribute('href', matches ? '/favicon.svg?dark' : 'favicon.svg')
})
})()`)}
        </Script>
      </head>
      <body
        className={`${sourceCodePro.variable} overflow-hidden bg-canvas-light text-black dark:bg-canvas-dark dark:text-white`}
      >
        <picture>
          <source
            media="(orientation: portrait)"
            type="image/avif"
            srcSet={portraitWidths.map((w) => `/bg-p-${w}.avif ${w}w`).join(', ')}
          />
          <source
            media="(orientation: portrait)"
            type="image/webp"
            srcSet={portraitWidths.map((w) => `/bg-p-${w}.webp ${w}w`).join(', ')}
          />
          <source
            type="image/avif"
            srcSet={landscapeWidths.map((w) => `/bg-l-${w}.webp ${w}w`).join(', ')}
          />
          <source
            type="image/webp"
            srcSet={landscapeWidths.map((w) => `/bg-l-${w}.webp ${w}w`).join(', ')}
          />
          <img
            className="fixed inset-0 z-[-1] h-full w-full object-cover object-[85%_50%] invert dark:brightness-75 dark:invert-0 dark:saturate-[0.3]"
            alt="satellite image of North America at night"
          />
        </picture>
        <div className="fixed z-[-1] h-full w-full bg-blue-100 opacity-30 dark:bg-blue-950 dark:opacity-20"></div>
        {children}
        <footer className="fixed inset-x-0 bottom-0 flex justify-center pb-3 font-mono text-xs">
          <p>
            (c){' '}
            <time className=" pl-0.5" dateTime="2024">
              2024
            </time>{' '}
            <Link
              className="rounded p-0.5 pb-0 outline-none focus-visible:ring-2 focus-visible:ring-current"
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
