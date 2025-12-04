'use client'
import type { QuestionWithHighlightedCode } from '@/lib/questions'

export default function CodeBlock({ question }: { question: QuestionWithHighlightedCode }) {
  return (
    <div className="dark:bg-eerieblack/98 em42:rounded-t-xl relative mx-auto max-w-6xl bg-white/95 p-4">
      {/* <div
        className={clsx(
          'absolute bottom-full right-4  px-3 py-0.5 text-base text-black before:absolute before:right-full before:top-0 before:h-0 before:w-0 before:border-b-[1.75rem] before:border-l-[0.5rem] before:border-transparent after:absolute after:left-full after:top-0 after:h-0 after:w-0 after:border-l-[0.5rem] after:border-t-[1.75rem] after:border-transparent dark:bg-black/90',
          {
            'text-lime-300': question.level === 'rookie',
            'ark:before:border-b-yellow-900 ark:after:border-l-yellow-900 bg-yellow-300 text-amber-300 dark:bg-stone-900/90':
              question.level === 'advanced',
            'text-red-400': question.level === 'pro',
          },
        )}
      >
        {question.level}
      </div> */}
      <div
        className="em42:text-2xl text-base"
        dangerouslySetInnerHTML={{ __html: question.highlightedCode }}
      ></div>
    </div>
  )
}
