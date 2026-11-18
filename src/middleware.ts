import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Защищаем только путь /products/new
  if (request.nextUrl.pathname.startsWith('/products/new')) {
    const adminToken = request.cookies.get('admin_token')?.value

    // Сравниваем с секретом из переменной окружения
    if (adminToken !== process.env.ADMIN_SECRET) {
      // Если токена нет или он неверный — редирект на главную
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/products/new/:path*',
}