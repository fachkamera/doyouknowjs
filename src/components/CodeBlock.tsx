'use client'
import type { Question } from '@/lib/questions'

export default function CodeBlock({ question }: { question: Question }) {
  return (
    <div className="dark:bg-eerieblack/98 em42:rounded-t-xl relative mx-auto max-w-6xl bg-white/95 p-4">
      <div
        className="em42:text-2xl text-base"
        dangerouslySetInnerHTML={{ __html: question.highlightedCode }}
      ></div>
    </div>
  )
}
