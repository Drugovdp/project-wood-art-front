
import { createProduct } from '../../action/products'
import { redirect } from 'next/navigation'

export default function NewProductPage() {
  async function handleSubmit(formData: FormData) {
    'use server'
    await createProduct(formData)
    redirect('/products')
  }

  return (
    <form action={handleSubmit} className="max-w-md mx-auto p-6 space-y-4">
      <h1 className="text-xl font-semibold">Новый товар</h1>

      <div>
        <label className="block mb-1">Название</label>
        <input
          name="title"
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1">Цена</label>
        <input
          name="price"
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block mb-1">Толщина (необязательно)</label>
        <input name="thickness" className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block mb-1">Ширина (необязательно)</label>
        <input name="width" className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block mb-1">Фото</label>
        <input
          type="file"
          name="file"
          accept="image/*"
          required
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Создать
      </button>
    </form>
  )
}