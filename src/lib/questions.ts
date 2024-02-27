import { q, z } from 'groqd'

export const { query, schema } = q('*')
  .filter("_type == 'question'")
  .grab$({
    code: q('code').grab$({
      code: q.string(),
      language: q.union([q.literal('javascript'), q.literal('html')]).optional(),
    }),
    correctAnswer: q.string(),
    link: q.string(),
    otherAnswers: q.array(q.string()),
    _id: q.string(),
    level: q.union([q.literal('rookie'), q.literal('advanced'), q.literal('pro')]),
    _rev: q.string(),
  })

type ArrayElementType<T extends any[]> = T extends (infer U)[] ? U : never
export type Question = ArrayElementType<z.infer<typeof schema>>
export type QuestionWithHighlightedCode = Question & { highlightedCode: string }
