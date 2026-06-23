'use client'

import Exercise from '@/components/Exercise'
import type { QuestionWithHighlightedCode } from '@/lib/questions'
import { useKeyDown } from '@/hooks/useKeyDown'
import { useQuizNavigation } from '@/hooks/useQuizNavigation'
import clsx from 'clsx'

export default function Exercises({ questions }: { questions: QuestionWithHighlightedCode[] }) {
  const { activeIndex, next, prev } = useQuizNavigation(questions.length)

  useKeyDown('ArrowRight', next)
  useKeyDown('ArrowLeft', prev)

  return (
    <>
      <div className="em64:translate-x-0 -translate-x-1/4">
        <ul
          className="flex transition-transform duration-1000"
          style={{
            transform: `translateX(calc(25% + var(--transform-boost) * ${
              (-100 * activeIndex) / 2
            }%))`,
          }}
        >
          {questions.map((question, index) => (
            <li key={question._id} className="em64:w-1/2 flex w-full shrink-0 justify-center">
              <div
                className={clsx(
                  'w-full max-w-2xl font-mono transition-[scale,opacity] duration-1000',
                  {
                    'scale-[.7] opacity-50': index !== activeIndex,
                    '': index === activeIndex,
                  },
                )}
              >
                <Exercise
                  index={index}
                  isLast={index === questions.length - 1}
                  question={question}
                  totalQuestions={questions.length}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
