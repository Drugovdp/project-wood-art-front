import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h3 className={styles.logo}>Wood Art</h3>
            <p className={styles.text}>
              Отделка бань, саун и SPA-комплексов под ключ. Собственное производство.
            </p>
          </div>

          <div>
            <h4 className={styles.heading}>Контакты</h4>
            <p className={styles.text}>+7 (999) 123-45-67</p>
            <p className={styles.text}>info@woodartekb.ru</p>
            <p className={styles.text}>Екатеринбург</p>
          </div>

          <div>
            <h4 className={styles.heading}>Навигация</h4>
            <ul className={styles.list}>
              <li><a href="#advantages">Преимущества</a></li>
              <li><a href="#gallery">Галерея</a></li>
              <li><a href="#contact">Контакты</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © 2026 Wood Art. Все права защищены.
      </div>
    </footer>
  )
}