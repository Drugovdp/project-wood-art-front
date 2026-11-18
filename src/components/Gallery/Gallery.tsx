// src/components/Gallery.tsx
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import styles from './Gallery.module.css'

export type Work = {
  id: number
  title: string
  image: string
}

export default function Gallery({ works }: { works: Work[] }) {
  return (
    <section id="gallery" className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Наши работы</h2>

        {works.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--color-text-muted)' }}>
            Пока нет работ
          </p>
        ) : (
          <div className={styles.sliderWrap}>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              // pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className={styles.swiper}
            >
              {works.map((work) => (
                <SwiperSlide key={work.id}>
                  <div className={styles.slide}>
                    <img src={work.image} alt={work.title} />
                    <div className={styles.overlay}>
                      <p className={styles.caption}>{work.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  )
}