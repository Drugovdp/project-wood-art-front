export type Product = {
  id: number
  title: string
  description: string
  price: string
  grade: 'Экстра' | 'А/В' | 'Первая'
  image: string
}

export const thermoosinaProducts: Product[] = [
  {
    id: 1,
    title: 'Полок из термоосины',
    description: 'Широкий полок для парной, устойчив к влаге и перепадам температур.',
    price: 'от 4 500 ₽/шт',
    grade: 'Экстра',
    image: 'https://placehold.co/600x400/2a2a2a/c5a880?text=Полок',
  },
  {
    id: 2,
    title: 'Вагонка из термоосины',
    description: 'Профилированная доска для отделки стен и потолка. Шип-паз.',
    price: 'от 1 200 ₽/м²',
    grade: 'А/В',
    image: 'https://placehold.co/600x400/2a2a2a/c5a880?text=Вагонка',
  },
  {
    id: 3,
    title: 'Плинтус из термоосины',
    description: 'Декоративный элемент для завершения отделки. Влагостойкий.',
    price: 'от 250 ₽/м',
    grade: 'Первая',
    image: 'https://placehold.co/600x400/2a2a2a/c5a880?text=Плинтус',
  },
  {
    id: 4,
    title: 'Доска из термоосины',
    description: 'Обрезная доска для пола и других конструкций в парной.',
    price: 'от 1 800 ₽/м²',
    grade: 'А/В',
    image: 'https://placehold.co/600x400/2a2a2a/c5a880?text=Доска',
  },
  {
    id: 5,
    title: 'Профиль из термоосины',
    description: 'Фигурный профиль для декоративной отделки углов и стыков.',
    price: 'от 400 ₽/м',
    grade: 'Первая',
    image: 'https://placehold.co/600x400/2a2a2a/c5a880?text=Профиль',
  },
  {
    id: 6,
    title: 'Дверь из термоосины',
    description: 'Дверное полотно для сауны, не боится высоких температур.',
    price: 'от 8 900 ₽',
    grade: 'Экстра',
    image: 'https://placehold.co/600x400/2a2a2a/c5a880?text=Дверь',
  },
]