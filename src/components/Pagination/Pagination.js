import styles from "./Pagination.module.css";
import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <div className={styles.main}>
      <img className={styles.arrow} src="/images/right.png" />

      <Link to="/personalInfo" className={styles.active} />
      <Link to="/skills" className={styles.inactive} />
      <Link to="/covid" className={styles.inactive} />
      <Link to="/redberrian" className={styles.inactive} />
      <Link to="/submit" className={styles.inactive} />

      <img className={styles.arrow} src="/images/left.png" />
    </div>
  );
};

export default Pagination;
