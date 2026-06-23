import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p>The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link
        className="rounded p-0.5 underline outline-none focus-visible:ring-2 focus-visible:ring-current"
        href="/"
      >
        Back to start
      </Link>
    </main>
  )
}
