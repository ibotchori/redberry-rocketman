import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Welcome Rocketter !</h1>
      <button className={styles.button}>Start Questionnaire</button>
      <a href="/personalInformation" className={styles.link}>
        Submitted Applications
      </a>
      <div className={styles.img}></div>
    </div>
  );
};

export default Landing;
