import styles from './Advantages.module.css'

const advantages = [
  { title: 'Эксклюзивные породы дерева', text: 'Используем только качественные материалы: кедр, липа, осина, абаш.', icon: '🌳' },
  { title: 'Собственное производство', text: 'Полный цикл работ — от эскиза до монтажа. Без посредников.', icon: '🛠️' },
  { title: 'Гарантия качества', text: 'Фиксированная цена в договоре и гарантия на все виды работ.', icon: '✅' },
  { title: 'Индивидуальный подход', text: 'Разрабатываем дизайн-проект под ваши пожелания и помещение.', icon: '📐' },
]

export default function Advantages() {
  return (
    <section id="advantages" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Почему выбирают нас</h2>
        <div className={styles.grid}>
          {advantages.map((item) => (
            <div key={item.title} className={styles.card}>
              <div className={styles.icon}>{item.icon}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}