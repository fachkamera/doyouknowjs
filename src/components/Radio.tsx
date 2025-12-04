'use client'

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import useSfx from '@/hooks/useSfx'
import { useAppState } from '@/lib/state'
import type { QuestionWithHighlightedCode } from '@/lib/questions'

type Props = {
  question: QuestionWithHighlightedCode
  selectedOption?: string
  option: string
  setSelectedOption: (option: string) => void
  i: number
  isCorrect: boolean
  indicateCorrect: boolean
  isActive: boolean
}

const alphabet = 'ABCDEF'

export default function Radio({
  question,
  selectedOption,
  option,
  setSelectedOption,
  i,
  isCorrect,
  indicateCorrect,
  isActive,
}: Props) {
  const { playSuccess, playFail } = useSfx()

  const answers = useAppState((state) => state.answers)
  const addAnswer = useAppState((state) => state.addAnswer)
  const addPoints = useAppState((state) => state.addPoints)

  const pointsMap = {
    rookie: 1,
    advanced: 2,
    pro: 3,
  }

  const handleClick = () => {
    isCorrect ? playSuccess() : playFail()
    addAnswer(option)
    addPoints(isCorrect ? pointsMap[question.level] : 0)
    setSelectedOption(option)
  }

  return (
    <button
      className={clsx(
        'group relative flex w-full select-none items-center gap-2 px-3 py-3 font-mono outline-none transition-all focus-visible:ring-4 focus-visible:ring-current',
        {
          'text-stone-600': !!selectedOption && !isCorrect && selectedOption !== option,
          'cursor-pointer dark:text-white': !selectedOption,
          'dark:bg-eerieblack/98 bg-white/95': selectedOption !== option && !indicateCorrect,
          'bg-lime-700 text-lime-100 dark:bg-lime-900 dark:text-white':
            selectedOption === option && isCorrect,
          'bg-red-700/95 text-white': selectedOption === option && !isCorrect,
          'before:animate-flash text-white before:absolute before:inset-0 before:z-[-1] before:bg-lime-700 dark:before:bg-lime-800/95':
            indicateCorrect,
          'text-neutral-900 hover:bg-white/70 hover:text-black dark:text-white dark:hover:bg-black/70 dark:hover:text-white ':
            !selectedOption,
        },
      )}
      style={{
        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      }}
      disabled={!!selectedOption || !isActive}
      onClick={handleClick}
    >
      <span
        className={clsx(
          'em32:mr-1 mr-0.5 flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-full border text-sm',
          {
            'group-hover:bg-white dark:group-hover:bg-inherit': !selectedOption,
            'border-black bg-black': selectedOption === option && !isCorrect,
            'border-lime-950 bg-lime-950': selectedOption === option && isCorrect,
            'border-red-950 bg-red-950': selectedOption === option && !isCorrect,
            'border-current': selectedOption !== option,
          },
        )}
      >
        {selectedOption === option ? (
          isCorrect ? (
            <CheckIcon strokeWidth={2} className="h-3.5 w-3.5 stroke-white" />
          ) : (
            <XMarkIcon strokeWidth={2} className="h-4 w-4 stroke-white" />
          )
        ) : (
          <> {alphabet[i]}</>
        )}
      </span>
      <span>{option}</span>
    </button>
  )
}
