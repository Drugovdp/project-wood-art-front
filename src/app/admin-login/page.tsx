// app/admin-login/page.tsx
'use client' // Важно, так как используем форму и fetch

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const res = await fetch('/api/admin-login', { // URL вашего route.ts
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/products/new') // Редирект после успеха
      router.refresh()
    } else {
      const data = await res.json().catch(() => null)
      setError(data?.error ?? 'Неверный пароль')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 space-y-4">
      <h1 className="text-xl font-semibold">Вход для администратора</h1>
      <div>
        <label className="block mb-1">Пароль</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Войти
      </button>
      {error && <p className="text-red-600">{error}</p>}
    </form>
  )
}