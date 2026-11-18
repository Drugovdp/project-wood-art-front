// app/admin-login/route.ts (или Server Action)
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const { password } = await request.json()
  if (password === process.env.ADMIN_SECRET) {
    (await cookies()).set('admin_token', process.env.ADMIN_SECRET!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 день
    })
    return Response.json({ ok: true })
  }
  return Response.json({ error: 'Неверный пароль' }, { status: 401 })
}