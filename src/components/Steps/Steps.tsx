import styles from './Steps.module.css'

const steps = [
  {
    number: 1,
    title: 'Консультирование',
    text: 'Консультируем и предварительно рассчитываем стоимость.',
  },
  {
    number: 2,
    title: 'Разработка дизайна',
    text: 'Подбор древесины для сауны, проработка цвета, выбор финишного покрытия.',
  },
  {
    number: 3,
    title: 'Документы',
    text: 'Составляем договор и спецификацию.',
  },
  {
    number: 4,
    title: 'Аванс 60%',
    text: 'Аванс для начала работ.',
  },
  {
    number: 5,
    title: 'Начало работы',
    text: 'Важный этап — процесс изготовления.',
  },
  {
    number: 6,
    title: 'Фотоотчёт',
    text: 'Делаем фотоотчёт процесса отделки.',
  },
  {
    number: 7,
    title: 'Презентация',
    text: 'Приглашаем вас на предварительную приёмку.',
  },
  {
    number: 8,
    title: 'Остаток 40%',
    text: 'Остаток оплаты после приёмки.',
  },
  {
    number: 9,
    title: 'Результат',
    text: 'Наслаждаетесь результатом.',
  },
]

export default function Steps() {
  return (
    <section id="steps" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Как сделать заказ?</h2>
        <div className={styles.grid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.number}>{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}