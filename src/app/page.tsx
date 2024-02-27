import Header from '@/components/Header'
import Exercises from '@/components/Exercises'
import shikiji from '@/lib/shikiji'
import { sanityClient } from '@/utils/sanityClient'
import { query, schema } from '@/lib/questions'
import { unstable_cache } from 'next/cache'
import type { Metadata, Viewport } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Do You Know JS?',
  description: 'Test and strenghten your Javascript skills with Do You Know JS?',
  icons: [
    {
      url: '/favicon.ico',
      sizes: '32x32',
      media: '(prefers-color-scheme: light)',
    },
    {
      url: '/favicon-inverted.ico',
      sizes: '32x32',
      media: '(prefers-color-scheme: dark)',
    },
    {
      url: '/favicon.svg',
      type: 'image/svg+xml',
    },
  ],
  robots: 'index, follow, noarchive',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'rgb(228,231,228)' },
    { media: '(prefers-color-scheme: dark)', color: 'rgb(7,10,21)' },
  ],
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
}

export default async function Home() {
  const questions = schema.parse(
    await sanityClient.fetch(
      query,
      {},
      {
        next: {
          revalidate: 1,
        },
      },
    ),
  )

  const getHighlighted = unstable_cache(
    async () =>
      Promise.all(
        questions.map(async (question) => {
          return shikiji(question.code.code, question.code.language || 'javascript')
        }),
      ),
    questions.map((question) =>
      question._rev.concat('test2').concat(new Date().toISOString().slice(0, 15)),
    ),
  )
  const highlighted = await getHighlighted()
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
