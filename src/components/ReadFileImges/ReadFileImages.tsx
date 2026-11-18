// src/components/GalleryServer.tsx
import fs from 'fs'
import path from 'path'
import Gallery from '../Gallery/Gallery'

export default function ReadFileImages() {
  // Путь к папке public/images
  const imagesDir = path.join(process.cwd(), 'public', 'images')

  // Читаем файлы и фильтруем только sauna_*.jpg
  let filenames: string[] = []
  try {
    filenames = fs
      .readdirSync(imagesDir)
      .filter((file) => /^sauna_\d+\.(jpg|jpeg|png|webp)$/i.test(file))
  } catch (e) {
    // Если папки нет — не падаем, просто показываем пустой список
    console.error('Не удалось прочитать папку images:', e)
  }

  // Формируем массив для клиентского компонента
  const works = filenames.map((name, index) => ({
    id: index + 1,
    title: ``,
    image: `/images/${name}`,
  }))

  return <Gallery works={works} />
}