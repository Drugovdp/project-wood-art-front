'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation' // <-- добавили
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname() // <-- получаем текущий путь

  // Проверяем, находимся ли мы на странице продукции
  const isProductsPage = pathname === '/products'

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>Wood Art</a>

        {/* Если мы на /products — показываем только "На главную" */}
        {isProductsPage ? (
          <nav className={styles.nav}>
            <a href="/">На главную</a>
          </nav>
        ) : (
          <nav className={styles.nav}>
            <a href="#advantages">Преимущества</a>
            <a href="#gallery">Галерея</a>
            <a href="/products">Продукция</a>
            <a href="#contact">Контакты</a>
          </nav>
        )}

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          ☰
        </button>
      </div>

      {/* Мобильное меню тоже зависит от страницы */}
      <nav className={`${styles.mobileNav} ${menuOpen ? styles.open : ''}`}>
        {isProductsPage ? (
          <a href="/" onClick={() => setMenuOpen(false)}>На главную</a>
        ) : (
          <>
            <a href="#advantages" onClick={() => setMenuOpen(false)}>Преимущества</a>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Галерея</a>
            <a href="/products" onClick={() => setMenuOpen(false)}>Продукция</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a>
          </>
        )}
      </nav>
    </header>
  )
}