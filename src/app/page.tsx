import Header from '@/components/Header'
import Exercises from '@/components/Exercises'
import { sanityClient } from '@/utils/sanityClient'
import { query, schema } from '@/lib/questions'
import type { Metadata, Viewport } from 'next'
import kv from '@/lib/kv'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Do You Know JS?',
  description: 'Test and strenghten your Javascript skills with Do You Know JS?',
  // icons: [
  //   {
  //     url: '/favicon.ico',
  //     sizes: '32x32',
  //     media: '(prefers-color-scheme: light)',
  //   },
  //   {
  //     url: '/favicon-inverted.ico',
  //     sizes: '32x32',
  //     media: '(prefers-color-scheme: dark)',
  //   },
  //   {
  //     url: '/favicon.svg',
  //     type: 'image/svg+xml',
  //   },
  // ],
  robots: 'index, follow, noarchive',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'rgb(238, 241, 247)' },
    { media: '(prefers-color-scheme: dark)', color: 'rgb(10, 13, 21)' },
  ],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
}

export default async function Home() {
  const sanityQuestionData = JSON.parse(
    await kv('sanityQuestionData', async () => {
      return JSON.stringify(await sanityClient.fetch(query))
    }),
  )
  const questions = schema.parse(sanityQuestionData)

  const highlighted = await Promise.all(
    questions.map(async (question) => {
      const { code } = question.code
      const language = question.code.language || 'javascript'
      const html = await kv(`${question._id}_${question._rev}`, async () => {
        return await (
          await fetch(
            `https://slshiki.vercel.app/api/shiki?language=${language}&code=${encodeURIComponent(code)}`,
            {
              headers: {
                authorization: `Bearer ${process.env.NEXT_SHIKI_TOKEN}`,
              },
            },
          )
        ).text()
      })
      return html
    }),
  )

  const questionsWithHighlightedCode = questions.map((question, i) => {
    return {
      ...question,
      highlightedCode: highlighted[i],
    }
  })

  return (
    <>
      <Header questions={questionsWithHighlightedCode} />
      <main className="overflow-x-hidden">
        <Exercises questions={questionsWithHighlightedCode} />
      </main>
    </>
  )
}
