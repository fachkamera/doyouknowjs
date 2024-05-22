import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const randomNumberBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export function middleware(request: NextRequest) {
  return NextResponse.rewrite(new URL(`/${randomNumberBetween(1, 16)}`, request.url))
}

export const config = {
  matcher: '/',
}
