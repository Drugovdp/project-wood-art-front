'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      // TODO: заменить на реальный эндпоинт FastAPI
      await new Promise((r) => setTimeout(r, 1000))
      setStatus('success')
      setForm({ name: '', phone: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Получить консультацию</h2>
        <p className={styles.subtitle}>
          Оставьте заявку, и мы свяжемся с вами в ближайшее время
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Ваше имя *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Телефон *</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={styles.input}
            />
          </div>

          <div className={styles.field}>
            <label>Сообщение</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={styles.textarea}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-accent"
          >
            {status === 'sending' ? 'Отправка…' : 'Отправить заявку'}
          </button>

          {status === 'success' && <p className={styles.success}>Спасибо! Мы свяжемся с вами.</p>}
          {status === 'error' && <p className={styles.error}>Ошибка отправки. Попробуйте позже.</p>}

          <p className={styles.note}>
            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
          </p>
        </form>
      </div>
    </section>
  )
}