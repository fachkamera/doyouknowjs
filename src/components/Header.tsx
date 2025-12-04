'use client'

import clsx from 'clsx'
import { Bars2Icon } from '@heroicons/react/24/outline'
import { useAppState } from '@/lib/state'
import type { QuestionWithHighlightedCode } from '@/lib/questions'
import Logo from './Logo'

export default function Header({ questions }: { questions: QuestionWithHighlightedCode[] }) {
  const points = useAppState((state) => state.points)

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0">
      <div>
        <div className="flex items-center justify-end p-2">
          <div className="after:bgcurrent em32:after:-bottom-2 em32:after:scale-x-[0.8] em64:after:h-1 em64:after:scale-x-100 relative flex -translate-x-2 translate-y-2 flex-col after:absolute after:inset-x-0 after:-bottom-0 after:h-0.5 after:w-full after:origin-right after:scale-x-[0.7] after:rounded-full">
            <Logo />
            <div
              className={clsx(
                'em32:mt-1 em32:scale-x-[0.8] em64:mt-2 em64:h-1 em64:scale-x-100 relative flex h-[3px] w-full origin-right scale-x-[0.7] gap-1 overflow-hidden rounded-full fill-current',
                {
                  '': !points.length,
                },
              )}
            >
              <div
                className={clsx(
                  'absolute inset-0 bg-black transition-[translate,opacity] dark:bg-white',
                  {
                    '-translate-x-full opacity-0': points.length,
                  },
                )}
              ></div>
              {[...Array(questions.length)].map((_el, i) => (
                <div
                  key={i}
                  className={clsx(
                    'relative h-1 flex-1 overflow-hidden rounded-full bg-black/10 transition-opacity before:absolute before:inset-0 before:transition-transform dark:bg-white/10',
                    { 'before:-translate-x-full': points.length <= i },
                    { 'before:bg-red-600 dark:before:bg-red-400': !points[i] },
                    { 'before:bg-lime-600 dark:before:bg-lime-400': points[i] },
                    { 'opacity-0': !points.length },
                  )}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
