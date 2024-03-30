'use client'

import Exercise from '@/components/Exercise'
import type { QuestionWithHighlightedCode } from '@/lib/questions'
import { useEffect, useState } from 'react'
import { useKeyDown } from '@/hooks/useKeyDown'
import clsx from 'clsx'
import { shuffleArray } from '@/lib/helpers'
import { useAppState } from '@/lib/state'
import useSfx from '@/hooks/useSfx'

export default function Exercises({ questions }: { questions: QuestionWithHighlightedCode[] }) {
  const { playWhoosh } = useSfx()
  const activeIndex = useAppState((state) => state.activeIndex)
  const answers = useAppState((state) => state.answers)
  const setActiveIndex = useAppState((state) => state.setActiveIndex)
  const addAnswer = useAppState((state) => state.addAnswer)
  const addPoints = useAppState((state) => state.addPoints)
  const [shuffledQuestions, setShuffledQuestions] = useState<QuestionWithHighlightedCode[]>([])

  useEffect(() => {
    if (shuffledQuestions.length) return
    const shuffledItems = shuffleArray(questions)
    setShuffledQuestions(shuffledItems)
  }, [questions, shuffledQuestions.length])

  const next = () => {
    if (activeIndex === shuffledQuestions.length - 1 || answers.length < activeIndex + 1) return
    playWhoosh()
    setActiveIndex(activeIndex + 1)
  }
  const prev = () => {
    if (activeIndex === 0) return
    playWhoosh()
    setActiveIndex(activeIndex - 1)
  }
  useKeyDown('ArrowRight', next)
  useKeyDown('ArrowLeft', prev)

  return (
    <>
      <div className="-translate-x-1/4 em64:translate-x-0">
        <ul
          className="flex transition-transform duration-1000"
          style={{
            transform: `translateX(calc(25% + var(--transform-boost) * ${
              (-100 * activeIndex) / 2
            }%))`,
          }}
        >
          {shuffledQuestions.map((question, index) => (
            <li key={question._id} className="flex w-full shrink-0 justify-center em64:w-1/2">
              <div
                className={clsx(
                  'w-full max-w-2xl font-mono transition-[transform,_opacity] duration-1000',
                  {
                    ' scale-[.7] opacity-50': index !== activeIndex,
                    '': index === activeIndex,
                  },
                )}
              >
                <Exercise
                  next={next}
                  prev={prev}
                  index={index}
                  isLast={index === shuffledQuestions.length - 1}
                  question={question}
                  activeIndex={activeIndex}
                  setActiveIndex={setActiveIndex}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
