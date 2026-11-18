'use client'

import { useMemo, useState } from 'react'
import { thermoosinaProducts } from '../../data/products'
import styles from './products.module.css'
import ProductCard from '../../components/ProductCard/ProductCard'

const grades = ['Все', 'Экстра', 'А/В', 'Первая'] as const

export default function ProductsPage() {
  const [activeGrade, setActiveGrade] = useState<(typeof grades)[number]>('Все')

  const filtered = useMemo(() => {
    if (activeGrade === 'Все') return thermoosinaProducts
    return thermoosinaProducts.filter((p) => p.grade === activeGrade)
  }, [activeGrade])

  return (
    <main className={styles.page}>
      <div className="container">
        <nav className={styles.breadcrumbs}>
          <a href="/">Главная</a>
          <span>/</span>
          <span>Продукция</span>
        </nav>

        <h1 className={styles.title}>Термоосина (термообработанная осина)</h1>
        <p className={styles.lead}>
          Термоосина — доступная порода с отличными характеристиками: устойчива к
          воздействию влаги, не деформируется и долго служит. Используется для
          отделки бань, саун и SPA-комплексов.
        </p>

        <div className={styles.filters}>
          <span className={styles.filtersLabel}>Сорт:</span>
          {grades.map((grade) => (
            <button
              key={grade}
              onClick={() => setActiveGrade(grade)}
              className={`${styles.filterBtn} ${activeGrade === grade ? styles.filterActive : ''}`}
            >
              {grade}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className={styles.empty}>Товаров с таким сортом пока нет.</p>
        ) : (
          <div className={styles.grid}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <section className={styles.cta}>
          <h2>Нужна консультация?</h2>
          <p>Поможем подобрать материал под ваш проект и рассчитаем стоимость.</p>
          <a href="/#contact" className={styles.ctaBtn}>Оставить заявку</a>
        </section>
      </div>
    </main>
  )
}