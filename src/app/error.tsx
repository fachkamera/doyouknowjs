'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <p>Please try again.</p>
      <button
        className="rounded p-0.5 underline outline-none focus-visible:ring-2 focus-visible:ring-current"
        onClick={() => reset()}
      >
        Try again
      </button>
    </main>
  )
}
