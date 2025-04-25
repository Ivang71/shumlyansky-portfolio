import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const userLocale = request.headers.get('accept-language')?.split(',')[0].split('-')[0]
  const isRussian = userLocale === 'ru'
  
  // No need to redirect paths, just set cookie for client-side detection
  if (isRussian) {
    const response = NextResponse.next()
    response.cookies.set('NEXT_LOCALE', 'ru')
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
} 