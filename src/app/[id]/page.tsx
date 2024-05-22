import Header from '@/components/Header'
import Exercises from '@/components/Exercises'
import shiki from '@/lib/shiki'
import { sanityClient } from '@/utils/sanityClient'
import { query, schema } from '@/lib/questions'
import { shuffleArray } from '@/lib/helpers'

export async function generateStaticParams() {
  return new Array(16).fill(0).map((_, i) => ({ id: (i + 1).toString() }))
}

export default async function Home({ params }: { params: { id: string } }) {
  const questions = schema.parse(
    await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: 86400,
        },
      },
    ),
  )

  const getHighlighted = async () =>
    Promise.all(
      questions.map(async (question) => {
        return shiki(question.code.code, question.code.language || 'javascript')
      }),
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
