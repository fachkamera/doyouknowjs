import { useAppState } from '@/lib/state'
import useSfx from './useSfx'

export function useQuizNavigation(totalQuestions: number) {
  const { playWhoosh } = useSfx()
  const { activeIndex, setActiveIndex, answers } = useAppState()
  const answeredCount = Object.keys(answers).length

  const next = () => {
    if (activeIndex === totalQuestions - 1 || answeredCount < activeIndex + 1) return
    playWhoosh()
    setActiveIndex(activeIndex + 1)
  }

  const prev = () => {
    if (activeIndex === 0) return
    playWhoosh()
    setActiveIndex(activeIndex - 1)
  }

  return { activeIndex, setActiveIndex, answeredCount, next, prev }
}
