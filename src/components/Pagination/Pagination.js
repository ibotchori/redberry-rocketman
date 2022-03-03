import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.main}>
      <img className={styles.arrow} src="/images/right.png" />

      <span className={styles.active} />
      <span className={styles.inactive} />
      <span className={styles.inactive} />
      <span className={styles.inactive} />

      <img className={styles.arrow} src="/images/left.png" />
    </div>
  );
};

export default Pagination;
