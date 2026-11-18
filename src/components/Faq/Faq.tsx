'use client'

import { useState } from 'react'
import styles from './Faq.module.css'

const faqItems = [
  {
    question: 'Как подготовить помещение под отделку?',
    answer:
      'Помещение готово к отделке, если завершён чистовой пол, возведены стены, предусмотрены выводы для электрооборудования и вентиляции.',
  },
  {
    question: 'Можно ли заказать отделку без дизайн-проекта?',
    answer:
      'Мы заботимся о качестве результата, поэтому работаем по дизайн-проекту, чтобы оправдать ожидания заказчика и спланировать работу и её конечную стоимость заранее. Точный расчёт материала можно выполнить только по дизайн-проекту.',
  },
  {
    question: 'Сколько времени занимает весь процесс?',
    answer:
      'В среднем весь процесс при работе «под ключ» занимает от 5 до 10 дней, в зависимости от объёма работы, оперативности обратной связи при согласовании и готовности помещения под отделку.',
  },
  {
    question: 'В какие города осуществляете доставку материала?',
    answer:
      'Вы можете заказать материалы под дизайн-проект, находясь в любом городе России.',
  },
  {
    question: 'У вас есть доставка?',
    answer:
      'Отправляем в регионы и страны СНГ через транспортные компании (ПЭК, Деловые линии и т.д.) сборным грузом в твёрдой упаковке. Доставка до терминала бесплатна, далее — по тарифам транспортных компаний.',
  },
  {
    question: 'Какой порядок оплаты?',
    answer:
      'Мы принимаем как наличный, так и безналичный расчёт. Оплата материалов и работы производится в 2 этапа: оплата за материал и предоплата за работы по получению материала, заключительный платёж — за работы по готовности помещения и подписании акта.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Ответы на вопросы</h2>
        <div className={styles.list}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className={styles.item}>
                <button
                  className={styles.question}
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.open : ''}`}>
                    +
                  </span>
                </button>
                {isOpen && <p className={styles.answer}>{item.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}