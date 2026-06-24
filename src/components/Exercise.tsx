'use client'

import RadioGroup from './RadioGroup'
import CodeBlock from '@/components/CodeBlock'
import { ArrowTopRightOnSquareIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import type { Question } from '@/lib/questions'
import { useQuizNavigation } from '@/hooks/useQuizNavigation'
import UiButton from './ui/UiButton'
import UiLink from './ui/UiLink'
import clsx from 'clsx'

export default function Exercise({
  question,
  index,
  isLast,
  totalQuestions,
}: {
  question: Question
  index: number
  isLast: boolean
  totalQuestions: number
}) {
  const { activeIndex, answeredCount, next, prev } = useQuizNavigation(totalQuestions)

  return (
    <div className="flex min-h-screen items-center justify-center py-16 supports-[height:100svh]:min-h-svh">
      <div
        className={clsx('relative w-full', {
          'pointer-events-none select-none': answeredCount < index,
        })}
      >
        {answeredCount >= index && index !== activeIndex && (
          <button
            className="absolute inset-0 z-10 outline-none focus-visible:ring-4 focus-visible:ring-current"
            onClick={index < activeIndex ? prev : next}
            disabled={index === activeIndex}
            aria-label={index < activeIndex ? 'Go to previous question' : 'Go to next question'}
          ></button>
        )}
        <div className="mb-1">
          <CodeBlock question={question} />
        </div>
        <RadioGroup question={question} isActive={index === activeIndex} />
        <ul className="flex justify-center space-x-1">
          <li className="flex basis-1/3">
            <UiButton
              className="em42:rounded-bl-xl"
              disabled={!index || index !== activeIndex}
              onClick={prev}
            >
              <ArrowLeftIcon className="mr-2 h-4 w-4" />
              <span>
                prev<span className="em32:inline hidden">ious</span>
              </span>
            </UiButton>
          </li>
          <li className="flex basis-1/3">
            <UiLink href={question.link} target="_blank" disabled={index !== activeIndex}>
              <span className="whitespace-nowrap">help</span>
              <ArrowTopRightOnSquareIcon className="ml-2 h-4 w-4" />
            </UiLink>
          </li>
          <li className="flex basis-1/3">
            <UiButton
              className="em42:rounded-br-xl"
              disabled={isLast || answeredCount <= index || index !== activeIndex}
              onClick={next}
            >
              <span>next</span>
              <ArrowLeftIcon className="ml-2 h-4 w-4 rotate-180" />
            </UiButton>
          </li>
        </ul>
      </div>
    </div>
  )
}
