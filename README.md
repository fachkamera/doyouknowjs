# Do You Know JS?

A quiz that tests how well you know JavaScript's quirks and gotchas.

[![Do You Know JS - Screenshot](assets/DoYouKnowJS-Screenshot-Safari.avif)](https://doyouknowjs.com)

## Try it

This repo is live at [DoYouKnowJS.com](https://doyouknowjs.com)

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Sanity](https://www.sanity.io) (CMS), queried via [GroqD](https://github.com/FormidableLabs/groqd)
- [Tailwind CSS](https://tailwindcss.com)
- [Shiki](https://shiki.style) syntax highlighting

## Running locally

Quiz content is pulled from a private Sanity project, so cloning and building this repo without your own Sanity dataset + corresponding env vars will fail. See [`questions.ts`](src/lib/questions.ts) for the data structure and [`.env.example`](.env.example) for required vars.
