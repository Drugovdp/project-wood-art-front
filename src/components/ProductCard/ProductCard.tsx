import styles from './ProductCard.module.css'
import type { Product } from '../../data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={product.image} alt={product.title} />
        <span className={styles.grade}>{product.grade}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{product.price}</span>
          <a href="#contact" className={styles.btn}>Заказать</a>
        </div>
      </div>
    </article>
  )
}