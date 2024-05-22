import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const randomNumberBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  if (url.pathname === '/') return NextResponse.rewrite(new URL(`/prerendered/${randomNumberBetween(1, 16)}`, request.url))
  
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
