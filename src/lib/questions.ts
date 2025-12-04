import { z, type InferFragmentType } from 'groqd'
import { q } from './groqdClient'

const question = q.fragmentForType<'question'>().project((question) => ({
  code: question.field('code').project({
    code: z.string().nullable(),
    language: q.raw('language', z.union([z.literal('javascript'), z.literal('html')]).nullable()),
  }),
  correctAnswer: q.string(),
  link: z.string(),
  otherAnswers: z.array(z.string()),
  _id: z.string(),
  level: z.union([z.literal('rookie'), z.literal('advanced'), z.literal('pro')]),
  _rev: z.string(),
}))

export const questionsQuery = q.star.filterByType('question').project(question)

// type ArrayElementType<T extends any[]> = T extends (infer U)[] ? U : never
export type Question = InferFragmentType<typeof question>
export type QuestionWithHighlightedCode = Question & { highlightedCode: string }
