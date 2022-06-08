import styles from './styles.module.css';

type Props = {
  data:
}

export const ProductItem = ({}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}></div>
      <div className={styles.info}>
        <div className={styles.img}>
          <img src='/tmp/burger.png' alt='Burger Old' />
        </div>
        <div className={styles.categoryName}>Tradicional</div>
        <div className={styles.productName}>Old burger</div>
        <div className={styles.productPrice}>R$ 25,90</div>
      </div>
    </div>
  );
}
