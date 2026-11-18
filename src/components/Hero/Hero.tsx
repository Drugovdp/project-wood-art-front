import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.content}>
        <h1 className={styles.title}>БАНИ И САУНЫ</h1>
        <p className={styles.subtitle}>ГАРАНТИЯ КАЧЕСТВА</p>
        <p className={styles.text}>
          Отделка парных и саун в дереве — отличный способ сделать интерьер
          уникальным и необычным. Создаём атмосферу уюта и комфорта.
        </p>
        <div className={styles.buttons}>
          <a href="#contact" className="btn-accent">Получить консультацию</a>
          <a href="#gallery" className={styles.secondaryBtn}>Наши работы</a>
        </div>
      </div>
    </section>
  )
}