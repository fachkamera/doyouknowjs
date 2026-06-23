import Header from '@/components/Header'
import Exercises from '@/components/Exercises'
import shiki from '@/lib/shiki'
import { questionsQuery } from '@/lib/questions'
import { shuffleArray } from '@/lib/helpers'
import { runQuery } from '@/lib/groqdClient'

export async function generateStaticParams() {
  return new Array(16).fill(0).map((_, i) => ({ id: (i + 1).toString() }))
}

export default async function Home({ params }: { params: Promise<{ id: string }> }) {
  const questions = await runQuery(questionsQuery)

  const getHighlighted = async () =>
    Promise.all(
      questions.map((question) =>
        shiki(question.code?.code || '', question.code?.language || 'javascript'),
      ),
    )

  const highlighted = await getHighlighted()
  const questionsWithHighlightedCode = questions.map((question, i) => {
    return {
      ...question,
      highlightedCode: highlighted[i],
    }
  })

  const shuffled = shuffleArray(questionsWithHighlightedCode)

  return (
    <>
      <Header questions={shuffled} />
      <main className="overflow-x-hidden">
        <Exercises questions={shuffled} />
      </main>
    </>
  )
}
