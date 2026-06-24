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
import bgP1280avif from '../assets/bg/bg-p-1280.avif'
import bgP1488avif from '../assets/bg/bg-p-1488.avif'
import bgP1792avif from '../assets/bg/bg-p-1792.avif'
import bgP2048avif from '../assets/bg/bg-p-2048.avif'
import bgP2560avif from '../assets/bg/bg-p-2560.avif'
import bgP2880avif from '../assets/bg/bg-p-2880.avif'
import bgP3323avif from '../assets/bg/bg-p-3323.avif'

const portraitWidths = [1280, 1488, 1792, 2048, 2560, 2880, 3323]
const landscapeWidths = [...portraitWidths, 3584, 5120, 6646]
const portraitAvif = [
  bgP1280avif,
  bgP1488avif,
  bgP1792avif,
  bgP2048avif,
  bgP2560avif,
  bgP2880avif,
  bgP3323avif,
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

export default function BgImage() {
  return (
    <picture>
      <source
        media="(orientation: portrait)"
        type="image/avif"
        srcSet={portraitWidths.map((w, i) => `${portraitAvif[i].src} ${w}w`).join(', ')}
      />
      <source
        type="image/avif"
        srcSet={landscapeWidths.map((w, i) => `${landscapeAvif[i].src} ${w}w`).join(', ')}
      />
      <img
        className="fixed inset-0 z-[-1] h-full w-full object-cover object-[85%_50%] invert dark:brightness-75 dark:invert-0 dark:saturate-[0.3]"
        alt=""
        aria-hidden="true"
      />
    </picture>
  )
}
