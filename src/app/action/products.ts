'use server'

import { revalidatePath } from 'next/cache'

const API_URL = process.env.NEXT_PUBLIC_API_URL!

export async function createProduct(formData: FormData) {
  // formData уже содержит title, price и file — просто пересылаем его на FastAPI
  const res = await fetch(`${API_URL}/products/`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) {
    const data = await res.json().catch(() => null)
    throw new Error(data?.detail ?? `Ошибка ${res.status}`)
  }

  // Обновляем кеш страницы со списком, чтобы новый товар появился
  revalidatePath('/products')

  return res.json()
}