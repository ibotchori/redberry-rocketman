import styles from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Welcome Rocketter !</h1>
      <Link to="/personalInfo" className={styles.button}>
        Start Questionnaire
      </Link>
      <Link to="/submitted-item" className={styles.link}>
        Submitted Applications
      </Link>
      <img src="/images/rocketman.png" alt="rocket" className={styles.img} />
    </div>
  );
};

export default Landing;
